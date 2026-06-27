import * as vscode from 'vscode';
import { readWorkspaceFile, parseEnvFile } from './fileUtils';

interface GeneratedFiles {
  'learning_path.md': string;
  'competency_map.md': string;
  'intake_notes.md': string;
}

export async function generateCurriculumFiles(prompt: string): Promise<GeneratedFiles> {
  // Try vscode.lm first (works in Cursor and VS Code with Copilot)
  try {
    const result = await generateWithVscodeLm(prompt);
    if (result) { return result; }
  } catch (err) {
    console.log('vscode.lm unavailable, falling back to OpenAI API:', err);
  }

  // Fall back to OpenAI API via .env key
  const envContent = await readWorkspaceFile('.env');
  if (envContent) {
    const env = parseEnvFile(envContent);
    if (env['OPENAI_API_KEY']) {
      return await generateWithOpenAI(prompt, env['OPENAI_API_KEY']);
    }
    if (env['ANTHROPIC_API_KEY']) {
      return await generateWithAnthropic(prompt, env['ANTHROPIC_API_KEY']);
    }
  }

  throw new Error(
    'No AI model available. Either use Cursor with its built-in AI, or add your OPENAI_API_KEY to a .env file in the workspace root.'
  );
}

async function generateWithVscodeLm(prompt: string): Promise<GeneratedFiles | null> {
  const models = await vscode.lm.selectChatModels({ family: 'gpt-4o' });
  if (models.length === 0) {
    const fallbackModels = await vscode.lm.selectChatModels();
    if (fallbackModels.length === 0) { return null; }
    return streamLmResponse(fallbackModels[0], prompt);
  }
  return streamLmResponse(models[0], prompt);
}

async function streamLmResponse(
  model: vscode.LanguageModelChat,
  prompt: string
): Promise<GeneratedFiles> {
  const token = new vscode.CancellationTokenSource().token;
  const response = await model.sendRequest(
    [vscode.LanguageModelChatMessage.User(prompt)],
    {},
    token
  );

  let fullText = '';
  for await (const chunk of response.text) {
    fullText += chunk;
  }

  return parseGeneratedFiles(fullText);
}

async function generateWithOpenAI(prompt: string, apiKey: string): Promise<GeneratedFiles> {
  const body = JSON.stringify({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 4096,
    temperature: 0.3,
  });

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body,
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${err}`);
  }

  const data = await response.json() as {
    choices: Array<{ message: { content: string } }>;
  };
  const content = data.choices[0]?.message?.content ?? '';
  return parseGeneratedFiles(content);
}

async function generateWithAnthropic(prompt: string, apiKey: string): Promise<GeneratedFiles> {
  const body = JSON.stringify({
    model: 'claude-opus-4-5',
    max_tokens: 4096,
    messages: [{ role: 'user', content: prompt }],
  });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body,
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${err}`);
  }

  const data = await response.json() as {
    content: Array<{ type: string; text: string }>;
  };
  const content = data.content.find(c => c.type === 'text')?.text ?? '';
  return parseGeneratedFiles(content);
}

function parseGeneratedFiles(text: string): GeneratedFiles {
  const result: Partial<GeneratedFiles> = {};
  const pattern = /<FILE name="([^"]+)">([\s\S]*?)<\/FILE>/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const filename = match[1].trim() as keyof GeneratedFiles;
    const content = match[2].trim();
    if (filename in { 'learning_path.md': 1, 'competency_map.md': 1, 'intake_notes.md': 1 }) {
      result[filename] = content;
    }
  }

  const required: (keyof GeneratedFiles)[] = ['learning_path.md', 'competency_map.md', 'intake_notes.md'];
  for (const key of required) {
    if (!result[key]) {
      throw new Error(`AI response was missing file: ${key}. Try running onboarding again.`);
    }
  }

  return result as GeneratedFiles;
}
