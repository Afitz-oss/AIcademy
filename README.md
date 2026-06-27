# AIcademy

**An adaptive, AI-powered coding curriculum — from zero to AI engineer or software engineer.**

AIcademy is not a course. It's a personalized learning system that lives in your code editor. You fill out a short profile, and your AI tutor generates problems tailored to your level, goals, and weak spots — then grades your solutions using the Socratic method instead of just handing you answers.

No lectures. No passive watching. Just you, your editor, and a tutor that adapts to you.

---

## What You'll Learn

Pick a track — the AI builds your curriculum around it:

| Track | Where you end up |
|---|---|
| **AI Engineer** | Building things with LLMs, APIs, and AI agents |
| **Data Scientist** | Analyzing data, building ML models, telling stories with numbers |
| **Software Engineer** | Building apps, APIs, and backend systems in Python |
| **Undecided** | The AI helps you figure out which path fits you |

All tracks start from the same foundation: **first-principles Python** (Stages 0–6). Then they branch.

---

## Before You Start — What is GitHub?

If you're new to coding, you may not know what GitHub is. Here's the short version:

**Git** is a program that tracks changes to your code — like "track changes" in Google Docs, but for code. It lives on your computer.

**GitHub** is a website that stores a copy of your code in the cloud — like Google Drive, but for code. It lets you back up your work, access it from anywhere, and share it with others.

**A repository (repo)** is just a folder that Git is tracking. AIcademy is a repo.

**Forking** means making your own copy of someone else's repo on GitHub. Think of it as photocopying a workbook — the original stays clean, and you write in your copy.

**Cloning** means downloading your forked copy from GitHub to your computer so you can open it in Cursor.

> For a deeper explanation of all these tools, see `09_roadmaps/tools_and_setup.md`.

---

## Setup (One Time — ~15 Minutes)

### Step 1 — Create a free GitHub account

Go to [github.com](https://github.com) and sign up. It's free.

### Step 2 — Fork this repo

Click the **Fork** button in the top right corner of this page on GitHub. This creates your own copy of AIcademy under your GitHub account. Your practice log, profile, and progress will all live in your copy.

### Step 3 — Clone your fork to your computer

On your forked repo page, click the green **Code** button and copy the URL. Then open your terminal:

```bash
git clone https://github.com/YOUR-USERNAME/AIcademy
cd AIcademy
```

### Step 4 — Install Python (if you haven't)

Download from [python.org/downloads](https://python.org/downloads) (version 3.11 or higher).

Verify: `python --version`

### Step 5 — Install dependencies

```bash
pip install -r requirements.txt
```

### Step 6 — Install Cursor

Download from [cursor.com](https://cursor.com) (free). Open Cursor and use **File → Open Folder** to open your AIcademy folder.

### Step 7 — Set up your API key (optional for now)

AIcademy uses AI models to generate problems and grade your work. To use this directly from scripts, you need an API key from OpenAI or Anthropic.

**You can skip this step for now** — Cursor's built-in AI works for all the tutoring. Come back to this when you reach Stage 6.

When you're ready:
1. Get a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Copy the file `.env.example` and rename the copy to `.env`
3. Open `.env` and replace `your-key-here` with your actual key

> **Important:** Never share your `.env` file or paste your API key into the chat. It's a private password. The `.gitignore` file already ensures it never gets uploaded to GitHub.

### Step 8 — Fill out your learner profile

Open `LEARNER_PROFILE.md` in Cursor and fill out every section. It takes about 5 minutes. Be honest — there are no wrong answers.

### Step 9 — Start learning

Open the Cursor chat panel (`Cmd+L` on Mac, `Ctrl+L` on Windows) and say:

> **"I just filled out my profile, let's get started."**

The AI will read your profile and generate your personalized learning path, competency map, and first problem.

---

## How It Works Every Day

```
Open Cursor
    → Open chat
    → AI reads your profile + competency map
    → AI suggests what to work on today
    → AI generates a problem tailored to your level + goal track
    → You solve it in solution.py
    → Ask the AI to grade it
    → AI asks you questions (Socratic method) instead of just giving answers
    → AI updates your competency map + error log
    → Commit your work: git add . && git commit -m "solved today's problem" && git push
```

---

## Repo Map

```
AIcademy/
│
├── LEARNER_PROFILE.md            ★ Fill this out first
├── AGENTS.md                     AI tutor rules (do not edit)
├── .env.example                  Copy → rename to .env → add your API key
├── requirements.txt
│
├── 00_knowledgebase/             Reference material (read-only)
│   ├── python_basics.ipynb       Stage 0–3 concepts with examples
│   ├── pandas_python_reference.ipynb
│   ├── ai_engineering.ipynb      LLMs, APIs, RAG, embeddings
│   ├── data_science.ipynb        Stats, ML, model evaluation
│   └── software_engineering.ipynb  Git, testing, REST APIs
│
├── 01_problem_banks/             Source-of-truth problems (read-only)
│   ├── python_basics/            Beginner Stage 0–4 problems
│   ├── python_fundamentals/      Stage 5–6 problems
│   ├── ai_engineering/           LLM + RAG problems
│   ├── algorithms/               Algorithm patterns (easy → medium)
│   └── sql/                      SQL Level 1–3
│
├── 02_datasets/                  Data files for practice problems
│
├── 03_prompts/                   ★ Reusable prompts for the AI
│   ├── onboarding.md             First-run setup
│   ├── whats_next.md             "What should I work on today?"
│   ├── generate_problems.md      Request a specific problem type
│   ├── grade_my_solution.md      Submit your solution for grading
│   ├── explain_why.md            "Why does this concept matter?"
│   ├── explain_concept.md        Deep explanation of a topic
│   └── mock_interview.md         Full timed mock interview
│
├── 04_practice_log/              ★ AI writes your problems here (dated)
│
├── 05_solutions/                 Canonical reference solutions (read-only)
│
├── 06_tests/                     pytest tests for solutions
│
├── 07_planning/
│   ├── error_log.csv             Auto-updated mistake tracker
│   └── strength_schedule.md      4-week training plan
│
├── 08_learner_profile/           ★ Your personal progress (AI-generated)
│   ├── learning_path.md          Your personalized curriculum
│   ├── competency_map.md         Skill tree with progress tracking
│   └── intake_notes.md           AI's observations from your profile
│
└── 09_roadmaps/                  Learning path references (read-only)
    ├── python_first_principles.md  Stage 0–6 curriculum map
    └── tools_and_setup.md          Git, GitHub, Python, Cursor, API keys
```

---

## Saving Your Progress

After every session, save your work to GitHub:

```bash
git add .
git commit -m "brief description of what you worked on"
git push
```

Your competency map and error log are automatically updated by the AI during graded sessions. Committing keeps a full history of your learning journey.

---

## Getting Updates from the Template

If the AIcademy template repo gets new problem banks or knowledge base content, you can pull those updates into your fork:

```bash
git remote add upstream https://github.com/ORIGINAL-REPO-URL/AIcademy
git fetch upstream
git merge upstream/main
```

---

## License

MIT — free to use, fork, and share.
