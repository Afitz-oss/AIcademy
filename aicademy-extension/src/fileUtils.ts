import * as vscode from 'vscode';
import * as path from 'path';

export function getWorkspaceRoot(): vscode.Uri | undefined {
  return vscode.workspace.workspaceFolders?.[0]?.uri;
}

export async function readWorkspaceFile(relativePath: string): Promise<string | null> {
  const root = getWorkspaceRoot();
  if (!root) { return null; }

  try {
    const uri = vscode.Uri.joinPath(root, relativePath);
    const bytes = await vscode.workspace.fs.readFile(uri);
    return Buffer.from(bytes).toString('utf8');
  } catch {
    return null;
  }
}

export async function writeWorkspaceFile(relativePath: string, content: string): Promise<void> {
  const root = getWorkspaceRoot();
  if (!root) { throw new Error('No workspace folder open.'); }

  const uri = vscode.Uri.joinPath(root, relativePath);

  // Ensure parent directory exists
  const parentDir = vscode.Uri.file(path.dirname(uri.fsPath));
  try {
    await vscode.workspace.fs.createDirectory(parentDir);
  } catch {
    // Directory may already exist
  }

  await vscode.workspace.fs.writeFile(uri, Buffer.from(content, 'utf8'));
}

export async function openFileInEditor(relativePath: string): Promise<void> {
  const root = getWorkspaceRoot();
  if (!root) { return; }
  const uri = vscode.Uri.joinPath(root, relativePath);
  try {
    const doc = await vscode.workspace.openTextDocument(uri);
    await vscode.window.showTextDocument(doc, { preview: false });
  } catch {
    // File may not exist yet
  }
}

export function parseEnvFile(content: string): Record<string, string> {
  const env: Record<string, string> = {};
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) { continue; }
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) { continue; }
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
    if (key && value && !value.includes('your-') && !value.includes('your_')) {
      env[key] = value;
    }
  }
  return env;
}
