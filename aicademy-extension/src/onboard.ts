import * as vscode from 'vscode';
import { ProfileData, buildFilledProfile, buildCurriculumPrompt } from './prompts';
import { writeWorkspaceFile, openFileInEditor } from './fileUtils';
import { generateCurriculumFiles } from './aiClient';

export async function runOnboarding(context: vscode.ExtensionContext) {
  const data = await collectProfileAnswers();
  if (!data) {
    vscode.window.showInformationMessage('Onboarding cancelled. Run "AIcademy: Start Onboarding" anytime to continue.');
    return;
  }

  // Write filled profile immediately
  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'AIcademy',
      cancellable: false,
    },
    async (progress) => {
      progress.report({ message: 'Saving your profile...' });
      const profileContent = buildFilledProfile(data);
      await writeWorkspaceFile('LEARNER_PROFILE.md', profileContent);

      progress.report({ increment: 20, message: 'Building your personalized curriculum with AI...' });

      let files;
      try {
        const prompt = await buildCurriculumPrompt(data);
        files = await generateCurriculumFiles(prompt);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`AIcademy: Could not generate curriculum — ${message}`);
        return;
      }

      progress.report({ increment: 60, message: 'Writing your learning path...' });
      await writeWorkspaceFile('08_learner_profile/learning_path.md', files['learning_path.md']);

      progress.report({ increment: 10, message: 'Building your competency map...' });
      await writeWorkspaceFile('08_learner_profile/competency_map.md', files['competency_map.md']);

      progress.report({ increment: 5, message: 'Writing intake notes...' });
      await writeWorkspaceFile('08_learner_profile/intake_notes.md', files['intake_notes.md']);

      progress.report({ increment: 5, message: 'Done!' });
    }
  );

  // Show the intake notes and offer to open learning path
  const intakeContent = await (async () => {
    try {
      const { readWorkspaceFile } = await import('./fileUtils');
      return await readWorkspaceFile('08_learner_profile/intake_notes.md') ?? '';
    } catch {
      return '';
    }
  })();

  const action = await vscode.window.showInformationMessage(
    `✅ Onboarding complete, ${data.name}! Your curriculum is ready. Open your learning path?`,
    'Open Learning Path',
    'Open Intake Notes',
    'Start Chat'
  );

  if (action === 'Open Learning Path') {
    await openFileInEditor('08_learner_profile/learning_path.md');
  } else if (action === 'Open Intake Notes') {
    await openFileInEditor('08_learner_profile/intake_notes.md');
  } else if (action === 'Start Chat') {
    vscode.window.showInformationMessage(
      'Open a new chat and say "I just filled out my profile, let\'s get started." — your tutor is ready.'
    );
  }
}

async function collectProfileAnswers(): Promise<ProfileData | null> {
  vscode.window.showInformationMessage('Welcome to AIcademy! Answer a few questions to personalize your curriculum. Press Escape at any time to cancel.');

  const name = await ask('What\'s your name or handle?', 'e.g. Akim, coder42, anonymous');
  if (!name) { return null; }

  const why = await ask(
    'Why are you here? What\'s your goal?',
    'e.g. "I want to get a job in AI", "I want to build my own app"'
  );
  if (!why) { return null; }

  const fear = await ask(
    'What\'s your biggest fear or frustration about coding?',
    'e.g. "I always get lost", "error messages terrify me", "I can follow tutorials but can\'t build anything"'
  );
  if (!fear) { return null; }

  const dreamProject = await ask(
    'What\'s one thing you want to build someday? Dream big.',
    'e.g. "my own chatbot", "a trading algorithm", "a web app", "an AI that helps my team"'
  );
  if (!dreamProject) { return null; }

  const experienceLevel = await pick(
    'What\'s your current experience level?',
    [
      { label: 'Zero', description: 'Never written code. Don\'t know what a variable is.' },
      { label: 'Dabbler', description: 'Watched tutorials, copied code — nothing has really stuck.' },
      { label: 'Beginner', description: 'Understand variables, loops, functions — but can\'t build from scratch yet.' },
      { label: 'Intermediate', description: 'Can write working Python scripts. Want to go deeper into AI/data/engineering.' },
    ]
  );
  if (!experienceLevel) { return null; }

  const goalTrack = await pick(
    'Which track fits your goal best?',
    [
      { label: 'AI Engineer', description: 'Build with LLMs, APIs, AI agents. Understand how ChatGPT-like systems work.' },
      { label: 'Data Scientist', description: 'Analyze data, build ML models, tell stories with numbers.' },
      { label: 'Software Engineer', description: 'Build apps, APIs, backend systems. Write clean professional code.' },
      { label: 'Undecided', description: 'Not sure yet — help me figure out which path fits.' },
    ]
  );
  if (!goalTrack) { return null; }

  const timePerDay = await pick(
    'How much time can you realistically commit per day?',
    [
      { label: 'Less than 30 minutes', description: 'Short sessions — we\'ll keep it focused.' },
      { label: '30–60 minutes', description: 'One solid problem per session.' },
      { label: '1–2 hours', description: 'Good pace for consistent progress.' },
      { label: '2+ hours', description: 'Intensive — we can move fast.' },
    ]
  );
  if (!timePerDay) { return null; }

  const learningStyle = await pick(
    'How do you learn best?',
    [
      { label: 'Read theory first, then practice', description: 'Understand the concept before touching code.' },
      { label: 'See an example, then try myself', description: 'Show me one, then I\'ll do one.' },
      { label: 'Throw me in — explain after', description: 'I\'d rather struggle and figure it out.' },
      { label: 'Mix of all of the above', description: 'Adapts based on how I\'m feeling that day.' },
    ]
  );
  if (!learningStyle) { return null; }

  const githubExperience = await pick('Have you used GitHub before?', [
    { label: 'Yes', description: '' },
    { label: 'No', description: '' },
    { label: 'Not sure what that is', description: '' },
  ]);
  if (!githubExperience) { return null; }

  const pythonInstalled = await pick('Do you have Python installed?', [
    { label: 'Yes', description: '' },
    { label: 'No', description: '' },
    { label: 'Not sure', description: '' },
  ]);
  if (!pythonInstalled) { return null; }

  const cursorExperience = await pick('Have you used Cursor or another AI coding tool before?', [
    { label: 'Yes', description: '' },
    { label: 'No', description: '' },
  ]);
  if (!cursorExperience) { return null; }

  const errorComfort = await pick('Are you comfortable reading error messages?', [
    { label: 'Yes', description: 'I can usually figure out what went wrong.' },
    { label: 'Sometimes', description: 'Depends on the error.' },
    { label: 'No — they terrify me', description: 'We\'ll fix that.' },
  ]);
  if (!errorComfort) { return null; }

  const excitingTopics = await ask(
    'Any topics that already excite you? (optional — press Enter to skip)',
    'e.g. "machine learning", "chatbots", "data analysis", "web apps"',
    true
  );

  return {
    name,
    why,
    fear,
    dreamProject,
    experienceLevel,
    goalTrack,
    timePerDay,
    learningStyle,
    githubExperience,
    pythonInstalled,
    cursorExperience,
    errorComfort,
    excitingTopics: excitingTopics ?? '',
  };
}

async function ask(prompt: string, placeholder: string, optional = false): Promise<string | null> {
  const result = await vscode.window.showInputBox({
    prompt,
    placeHolder: placeholder,
    ignoreFocusOut: true,
    validateInput: optional ? undefined : (value) => {
      return value.trim() ? null : 'Please enter a value (or press Escape to cancel onboarding)';
    },
  });
  if (result === undefined) { return null; } // Escaped
  return result.trim() || (optional ? '' : null);
}

async function pick(
  prompt: string,
  items: Array<{ label: string; description: string }>
): Promise<string | null> {
  const result = await vscode.window.showQuickPick(items, {
    title: prompt,
    ignoreFocusOut: true,
    placeHolder: 'Select one option',
  });
  if (!result) { return null; }
  return result.label;
}
