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

## Before You Start — Key Concepts

If you're new to coding, a few terms will come up in setup. Here's what they mean:

**Git** is a program that tracks changes to your code — like "track changes" in Google Docs, but for code. It lives on your computer.

**GitHub** is a website that stores a copy of your code in the cloud — like Google Drive, but for code. It lets you back up your work, access it from anywhere, and share it with others.

**A repository (repo)** is just a folder that Git is tracking. AIcademy is a repo.

**Forking** means making your own copy of someone else's repo on GitHub. Think of it as photocopying a workbook — the original stays clean, and you write in your copy.

**Cloning** means downloading your forked copy from GitHub to your computer so you can open it in Cursor.

**Node.js** is a program that lets JavaScript run on your computer (outside a browser). You don't need to know JavaScript — Node.js is just the engine that builds the AIcademy extension. Think of it like Python, but for a different language. It comes with **npm** (Node Package Manager), which installs the extension's build tools the same way `pip install` installs Python packages.

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

### Step 7 — Install the AIcademy Extension (One-Time, ~2 minutes)

The AIcademy extension lives inside your repo and handles onboarding automatically — no manual profile editing required.

Open a terminal (`Cmd+Space` → type "Terminal" → hit Enter) and run:

```bash
cd ~/AIcademy/aicademy-extension
sed -i '' 's/\r//' setup.sh   # fix line endings (run once)
zsh setup.sh                   # installs Node.js if needed, builds and packages the extension
```

**What is that `sed` command?** It's a one-line fix for how the file was saved. It removes invisible characters that would confuse the script. You only run it once, ever. After that, just `zsh setup.sh` is enough.

**What does `setup.sh` do?**
1. Checks if Node.js (npm) is installed — installs it via Homebrew if not
2. Installs the extension's build tools (like `pip install` but for Node.js)
3. Builds and packages the extension into a single `aicademy-0.1.0.vsix` file

**Then install it in Cursor:**
1. Press `Cmd+Shift+P`
2. Type: `Extensions: Install from VSIX`
3. Select `aicademy-extension/aicademy-0.1.0.vsix`
4. Restart Cursor when prompted

After restarting, you'll see a `🎓 AIcademy` button in the bottom status bar. You're ready.

### Step 8 — Complete Onboarding

When you reopen the AIcademy folder after installing the extension, a prompt will appear automatically:

> **"Welcome to AIcademy! Your learner profile is empty. Ready to set up your personalized curriculum?"**

Click **Start Onboarding**. The extension will walk you through 13 short questions using dropdown menus and text boxes — no file editing. At the end, your AI tutor generates your personalized learning path, competency map, and intake notes automatically.

You can also trigger onboarding anytime with `Cmd+Shift+P` → `AIcademy: Start Onboarding`.

### Step 9 — Set up your API key (optional for now)

AIcademy uses Cursor's built-in AI for all tutoring — **you don't need an API key to get started.**

Come back to this at Stage 6 when you start building your own AI scripts:
1. Get a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Copy `.env.example` → rename to `.env` → replace `your-key-here` with your key

> **Important:** Never share your `.env` file or paste your key into chat. It's already in `.gitignore` so it won't be uploaded to GitHub.

### Step 10 — Start learning

Open the Cursor chat panel (`Cmd+L`) and say:

> **"What's my first problem?"**

Your tutor has already read your profile and curriculum. It's ready to go.

---

## How It Works Every Day

```
Open Cursor (AIcademy folder)
    → Click 🎓 AIcademy in the status bar — or just open the chat
    → AI reads your profile + competency map automatically
    → AI suggests what to work on today
    → AI generates a problem tailored to your level + goal track
    → Problem is delivered in chat AND written to 04_practice_log/ as solution.py
    → You write your solution below the comment block and run it
    → Say "done" in chat — AI grades it using the Socratic method
    → AI asks you questions before revealing what's wrong
    → AI updates your competency map + error log silently
    → Commit your work: git add . && git commit -m "solved today's problem" && git push
```

---

## Repo Map

```
AIcademy/
│
├── LEARNER_PROFILE.md            ★ Auto-filled by the extension during onboarding
├── AGENTS.md                     AI tutor rules (do not edit)
├── .env.example                  Copy → rename to .env → add your API key (Stage 6+)
├── requirements.txt              Python dependencies (pip install -r requirements.txt)
│
├── aicademy-extension/           ★ VS Code/Cursor extension — handles onboarding
│   ├── setup.sh                  Run once to build and package the extension
│   ├── package.json              Extension manifest + Node.js dependencies
│   ├── src/                      Extension source code (TypeScript)
│   └── aicademy-0.1.0.vsix      Packaged extension (generated by setup.sh)
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
├── 04_practice_log/              ★ AI writes your problems here (dated folders)
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
