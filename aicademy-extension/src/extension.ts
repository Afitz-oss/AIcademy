import * as vscode from 'vscode';
import { runOnboarding } from './onboard';
import { readWorkspaceFile } from './fileUtils';

export function activate(context: vscode.ExtensionContext) {
  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('aicademy.onboard', () => runOnboarding(context)),
    vscode.commands.registerCommand('aicademy.whatsNext', () => showWhatsNext())
  );

  // Status bar button — always visible when in AIcademy workspace
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  statusBar.text = '$(mortarboard) AIcademy';
  statusBar.command = 'aicademy.onboard';
  statusBar.tooltip = 'Open AIcademy Onboarding';
  statusBar.show();
  context.subscriptions.push(statusBar);

  // Auto-check profile on workspace open
  checkProfileOnActivation();
}

async function checkProfileOnActivation() {
  // Small delay so the editor finishes loading before we prompt
  await new Promise(resolve => setTimeout(resolve, 2000));

  const profileContent = await readWorkspaceFile('LEARNER_PROFILE.md');
  if (!profileContent) { return; }

  const isUnfilled =
    profileContent.includes('**Name / handle:** ___') ||
    profileContent.includes('- [ ] **Zero**') && profileContent.includes('- [ ] **Dabbler**');

  if (isUnfilled) {
    const action = await vscode.window.showInformationMessage(
      '👋 Welcome to AIcademy! Your learner profile is empty. Ready to set up your personalized curriculum?',
      'Start Onboarding',
      'Later'
    );
    if (action === 'Start Onboarding') {
      vscode.commands.executeCommand('aicademy.onboard');
    }
  }
}

async function showWhatsNext() {
  const learningPath = await readWorkspaceFile('08_learner_profile/learning_path.md');
  if (!learningPath || learningPath.includes('not yet generated')) {
    const action = await vscode.window.showWarningMessage(
      'Your learning path hasn\'t been generated yet. Complete onboarding first.',
      'Start Onboarding'
    );
    if (action === 'Start Onboarding') {
      vscode.commands.executeCommand('aicademy.onboard');
    }
    return;
  }
  vscode.window.showInformationMessage('Open the chat and say "what\'s next" — your AI tutor will pick up from your learning path.');
}

export function deactivate() {}
