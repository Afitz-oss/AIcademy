import { readWorkspaceFile } from './fileUtils';

export interface ProfileData {
  name: string;
  why: string;
  fear: string;
  dreamProject: string;
  experienceLevel: string;
  goalTrack: string;
  timePerDay: string;
  learningStyle: string;
  githubExperience: string;
  pythonInstalled: string;
  cursorExperience: string;
  errorComfort: string;
  excitingTopics: string;
}

export function buildFilledProfile(data: ProfileData): string {
  const experienceOptions = [
    '**Zero**',
    '**Dabbler**',
    '**Beginner**',
    '**Intermediate**',
  ];
  const goalOptions = [
    '**AI Engineer**',
    '**Data Scientist**',
    '**Software Engineer**',
    '**Undecided**',
  ];
  const timeOptions = [
    'Less than 30 minutes',
    '30–60 minutes',
    '1–2 hours',
    '2+ hours',
  ];
  const styleOptions = [
    'I like to read the theory first, then practice with problems',
    'I like to see a worked example, then try something similar myself',
    'I like to be thrown into a problem and figure it out — explain after',
    'I like a mix of all of the above',
  ];

  function checkboxes(options: string[], selected: string): string {
    return options
      .map(opt => {
        const checked = opt.toLowerCase().includes(selected.toLowerCase()) ? '[x]' : '[ ]';
        return `- ${checked} ${opt}`;
      })
      .join('\n');
  }

  return `# My Learner Profile

> **Instructions:** Fill out every section below before opening Cursor chat.
> Be honest — there are no wrong answers. The AI reads this file before every session
> and uses it to personalize your curriculum, problem difficulty, and teaching style.
> The more you share, the better it can adapt to you.

---

## About Me

- **Name / handle:** ${data.name}
- **Why I'm here (in your own words):** ${data.why}
  *(e.g. "I want to get a job in AI", "I want to build my own app", "I'm curious about coding", "I want to switch careers")*

- **My biggest fear or frustration about coding:** ${data.fear}
  *(e.g. "I always get lost and give up", "I can follow tutorials but can't build anything on my own", "error messages make no sense to me")*

- **One thing I want to build someday:** ${data.dreamProject}
  *(Dream big — this becomes your north star for every problem the AI generates)*

---

## My Experience Level

Pick the one that fits best:

${checkboxes(experienceOptions, data.experienceLevel)}

---

## My Goal Track

Pick one (you can change this later):

${checkboxes(goalOptions, data.goalTrack)}

---

## Time I Can Commit Per Day

${checkboxes(timeOptions, data.timePerDay)}

---

## How I Learn Best

${checkboxes(styleOptions, data.learningStyle)}

---

## A Few More Things (optional but helpful)

- **Have you used GitHub before?** ${data.githubExperience}
- **Do you have Python installed on your computer?** ${data.pythonInstalled}
- **Have you used Cursor or any AI coding tool before?** ${data.cursorExperience}
- **Are you comfortable reading error messages?** ${data.errorComfort}
- **Any topics that already excite you?** ${data.excitingTopics || 'Not specified'}

---

## After You Fill This Out

Open Cursor, start a new chat, and say:

> **"I just filled out my profile, let's get started."**

The AI will read everything above and generate your personalized learning path.
`;
}

export async function buildCurriculumPrompt(data: ProfileData): Promise<string> {
  const agentsContent = await readWorkspaceFile('AGENTS.md') ?? '';
  const roadmapContent = await readWorkspaceFile('09_roadmaps/python_first_principles.md') ?? '';
  const profileContent = buildFilledProfile(data);

  return `You are the AIcademy AI tutor. You follow the Onboarding Protocol defined below EXACTLY.

=== AGENTS.md PROTOCOL ===
${agentsContent}

=== CURRICULUM ROADMAP ===
${roadmapContent}

=== LEARNER PROFILE ===
${profileContent}

=== YOUR TASK ===

A new learner has just completed onboarding. Generate exactly three files following the Onboarding Protocol steps 2, 3, and 4.

Format your response EXACTLY as shown below — no text outside the FILE tags:

<FILE name="learning_path.md">
[Personalized curriculum based on their goal track and experience level. Pull the appropriate stage sequence from the roadmap. Be specific about why each stage was chosen for this learner.]
</FILE>
<FILE name="competency_map.md">
[Full skill tree with ALL items set to ⬜ not started. Include all stages from the roadmap plus their specific goal track. Follow the competency_map.md format exactly.]
</FILE>
<FILE name="intake_notes.md">
[Brief welcome message summarizing what you observed about their profile and what you'll focus on first. 2-3 paragraphs max. Personal and specific to them — reference their dream project and goal.]
</FILE>`;
}
