# Tools and Setup Guide

> This guide is written for complete beginners. If you already know what Git, GitHub, and a terminal are, skim the "What is" sections and just follow the steps.

---

## Windows users — read this first

The AIcademy CLI (`./scripts/aicademy.sh`) is a bash script and will not run in PowerShell or Command Prompt. Before following the rest of this guide, install one of:

- **WSL (recommended):** Windows Subsystem for Linux — install from [aka.ms/wsl](https://aka.ms/wsl) and use an Ubuntu shell. Cursor can open WSL folders directly.
- **Git Bash:** Bundled with [Git for Windows](https://git-scm.com/download/win) — opens from the Start menu after installing and runs bash scripts natively.

Whenever this guide says "open your terminal," Windows users should use WSL or Git Bash. Mac and Linux users can use the default terminal app.

---

## What You Need (Overview)

| Tool | What it is | Why you need it |
|---|---|---|
| GitHub account | A website that stores your code in the cloud | To save your progress and share your work |
| Git | A program on your computer that tracks code changes | To sync your work between your computer and GitHub |
| Python | The programming language | To run your code |
| Cursor | An AI-powered code editor | The interface where you write code and chat with your AI tutor |
| API key | A private password to use AI models | So the AI can generate and grade your problems |

---

## Part 1 — GitHub and Git

### What is Git?

Git is a tool that tracks changes to your code over time. Think of it like "track changes" in Google Docs — but for every file in your project. It lives on your computer.

Every time you save a meaningful version of your work, you take a **commit** — a snapshot with a short message like "solved the Stage 1 variables problem." You can always go back to any previous snapshot.

### What is GitHub?

GitHub is a website that stores a copy of your code in the cloud. Think of it like Google Drive, but designed specifically for code tracked by Git. It lets you:
- Back up your work automatically
- Access your code from any computer
- Share your progress with others

### What is a repository (repo)?

A repo is a folder that Git is tracking. Every file inside it — every change, every version — Git watches all of it. AIcademy is a repo.

### What is forking?

Forking means making your own copy of someone else's repo on GitHub. You get everything in the original — all the files, structure, history — but your copy is yours. Changes you make don't affect the original.

**Analogy:** Forking is like photocopying a workbook. The original workbook stays clean. You write in your copy.

### What is cloning?

Cloning means downloading a repo from GitHub to your computer so you can actually open and edit the files in Cursor.

### The relationship between these things:

```
AIcademy Template Repo (on GitHub — the original workbook)
         │
         └── You fork it → Your Repo (on GitHub, your account — your photocopy)
                                    │
                                    └── You clone it → Your Computer (in Cursor — where you write)
```

### Step-by-step: Getting set up with GitHub

**Step 1 — Create a free GitHub account**
Go to [github.com](https://github.com) and sign up. It's free.

**Step 2 — Install Git on your computer**
- Mac: Open Terminal, type `git --version`. If it's not installed, macOS will prompt you to install it.
- Windows: Download from [git-scm.com](https://git-scm.com)
- Linux: `sudo apt install git`

Verify it worked: open your terminal and type `git --version`. You should see something like `git version 2.x.x`.

**Step 3 — Fork the AIcademy repo**
1. Go to the AIcademy repo on GitHub
2. Click the **Fork** button in the top right corner
3. Select your account — GitHub creates your own copy in about 3 seconds

**Step 4 — Clone your fork to your computer**
On your forked repo page on GitHub, click the green **Code** button and copy the URL. Then in your terminal:

```bash
git clone https://github.com/YOUR-USERNAME/AIcademy
cd AIcademy
```

You now have a local copy of the repo on your computer.

**Step 5 — Save your work with Git**
After you solve a problem or make progress, save it to GitHub:

```bash
git add .
git commit -m "solved stage 1 variables problem"
git push
```

- `git add .` — tell Git to include all changed files in the next snapshot
- `git commit -m "..."` — take the snapshot with a description
- `git push` — upload your snapshot to GitHub

---

## Part 2 — Python

### What is Python?

Python is a programming language — a way of writing instructions that a computer can understand and execute. It's the most popular language for AI, data science, and beginner programming because it reads almost like English.

### Install Python

Go to [python.org/downloads](https://python.org/downloads) and download the latest version (3.11 or higher).

**Verify it worked:** open your terminal and type:
```bash
python --version
```

You should see `Python 3.x.x`.

### Install the AIcademy dependencies

Once you've cloned the repo and have Python installed, run:

```bash
pip install -r requirements.txt
```

This installs all the Python libraries AIcademy uses (pandas, numpy, jupyter, etc.).

---

## Part 3 — Cursor

### What is Cursor?

Cursor is a code editor — the app where you write and run code. It's built on top of VS Code (the most popular code editor in the world) but adds a powerful AI assistant you can chat with directly.

In AIcademy, Cursor's AI chat is your tutor. It reads your learner profile, generates problems tailored to you, grades your solutions, and adapts as you improve.

### Install Cursor

1. Go to [cursor.com](https://cursor.com) and download the free version
2. Open Cursor
3. Click **File → Open Folder** and open your cloned AIcademy folder
4. Open the chat panel (usually on the right side or via `Cmd+L` on Mac, `Ctrl+L` on Windows)

---

## Part 4 — API Keys

### What is an API key?

An API key is a private password that proves to an AI service (like OpenAI) that you are who you say you are. When AIcademy asks an AI model to generate a problem or grade your solution, it uses your key to say "this request is from me — charge my account."

**Why do you need your own key?**
AI models cost money to run. OpenAI and Anthropic charge a tiny amount per request (fractions of a cent). For light practice use, costs are typically under $1/month. Your API key ties those charges to your own account.

### Get an OpenAI API key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account and add a payment method (you only pay for what you use)
3. Go to **API Keys** in the left sidebar
4. Click **Create new secret key**
5. Copy the key — you won't be able to see it again after you close the window

### Set up your `.env` file

Your API key is a secret. It should never be shared or uploaded to GitHub. AIcademy uses a `.env` file — a special file that stores secrets on your computer only.

**Step 1:** In your AIcademy folder, find the file called `.env.example`

**Step 2:** Make a copy of it and name the copy `.env` (no `.example`)

**Step 3:** Open `.env` and replace `your-key-here` with your actual API key:

```
OPENAI_API_KEY=sk-proj-abc123...your-actual-key...
```

**Step 4:** Save the file.

That's it. Your `.env` file is listed in `.gitignore`, which means Git will never upload it to GitHub.

> **Warning:** Never share your `.env` file with anyone. Never paste your API key into the Cursor chat. Your key is like a password — if someone else gets it, they can charge AI requests to your account.

### What if I don't want to pay for an API key right now?

The AI tutor in Cursor (Claude or GPT-4) can still help you learn — it just uses Cursor's built-in AI rather than calling your own key. The `.env` file is only needed if AIcademy scripts need to call AI APIs directly. You can skip this step for now and come back to it when you reach Stage 6 (Working with APIs).

---

## Quick Reference: Terminal Commands You'll Use

| Command | What it does |
|---|---|
| `ls` (Mac/Linux) or `dir` (Windows) | List files in the current folder |
| `cd foldername` | Move into a folder |
| `cd ..` | Move up one level |
| `python filename.py` | Run a Python file |
| `pip install packagename` | Install a Python library |
| `git status` | See what files have changed |
| `git add .` | Stage all changes for a commit |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Upload your commits to GitHub |
| `git pull` | Download the latest changes from GitHub |
