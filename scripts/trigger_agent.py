#!/usr/bin/env python3
"""
trigger_agent.py — Cursor SDK bridge for AIcademy

Runs the AIcademy agent programmatically after the CLI collects the profile.
The agent reads AGENTS.md and LEARNER_PROFILE.md, then generates all curriculum
files and the first problem — no Cursor chat window needed.

Usage:
  python3 scripts/trigger_agent.py --mode onboard --repo-root /path/to/AIcademy
  python3 scripts/trigger_agent.py --mode update  --repo-root /path/to/AIcademy
  python3 scripts/trigger_agent.py --mode edit    --repo-root /path/to/AIcademy  # alias for update
"""

import argparse
import os
import sys
from datetime import date
from pathlib import Path


# ── Env loader ────────────────────────────────────────────────────────────────

def load_env(repo_root: Path) -> dict[str, str]:
    env_path = repo_root / ".env"
    if not env_path.exists():
        return {}
    env: dict[str, str] = {}
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        val = val.strip().strip("\"'")
        if val and not val.startswith("your-") and not val.startswith("your_"):
            env[key.strip()] = val
    return env


def get_api_key(repo_root: Path) -> str:
    key = os.environ.get("CURSOR_API_KEY", "")
    if not key:
        env = load_env(repo_root)
        key = env.get("CURSOR_API_KEY", "")
    if not key:
        print(
            "\n✗  CURSOR_API_KEY not found.\n"
            "   Get your key at: https://cursor.com/dashboard/integrations\n"
            "   Then either:\n"
            "     export CURSOR_API_KEY=cursor_...\n"
            "   or add it to your .env file:\n"
            "     CURSOR_API_KEY=cursor_...\n",
            file=sys.stderr,
        )
        sys.exit(1)
    return key


# ── Prompts ───────────────────────────────────────────────────────────────────

ONBOARD_PROMPT = """You are the AIcademy AI tutor. The learner has just completed profile setup \
via the CLI script. Their LEARNER_PROFILE.md is ready and fully filled out.

Run the FULL Onboarding Protocol from AGENTS.md — all steps, in order:

1. Read LEARNER_PROFILE.md carefully.
2. Read 09_roadmaps/python_first_principles.md for stage sequencing.
3. Generate and WRITE 08_learner_profile/learning_path.md — personalized curriculum with \
reasoning for why each stage was chosen for this specific learner.
4. Generate and WRITE 08_learner_profile/competency_map.md — full skill tree. For intermediate \
learners mark Stages 0–4 as 🟡 exposed; set Stage 5+ to ⬜ not started.
5. WRITE 08_learner_profile/intake_notes.md — 2–3 paragraphs: what you observed, what you'll \
focus on first, watch-out patterns specific to this learner.
6. Generate the first problem following the Problem Delivery Protocol in AGENTS.md:
   a. WRITE the solution stub to 04_practice_log/{today}_<topic-slug>/solution.py
   b. WRITE the full problem record to 04_practice_log/{today}_<topic-slug>/problems.md
7. WRITE 08_learner_profile/session_state.md with:
   status: active
   first_problem_delivered: true
   last_updated: {today}

After writing all files, print to the terminal:
  - A 2–3 sentence intake summary (who this learner is, what you're starting with)
  - The full first problem statement
  - The exact path to solution.py

Do not skip any step. Do not ask clarifying questions. Act immediately.
""".format(today=date.today().isoformat())

UPDATE_PROMPT = """You are the AIcademy AI tutor. The learner has updated their profile via \
the CLI. LEARNER_PROFILE.md has changed.

Regenerate the curriculum WITHOUT losing any earned progress:

1. Read the updated LEARNER_PROFILE.md.
2. Read 08_learner_profile/competency_map.md — note ALL existing 🟠 and 🟢 entries.
3. Rewrite 08_learner_profile/learning_path.md based on the updated profile and current \
competency state.
4. Rewrite 08_learner_profile/competency_map.md — PRESERVE every existing 🟠/🟢 entry exactly. \
Only reset skills that genuinely no longer apply (e.g. if track changes, drop the old track's \
skills). Set truly new skills to ⬜.
5. WRITE 08_learner_profile/session_state.md with:
   status: active
   first_problem_delivered: true
   last_updated: {today}

DO NOT touch: 08_learner_profile/intake_notes.md, 07_planning/error_log.csv, or any \
04_practice_log/ files.

After writing, print to the terminal:
  - What changed in the profile
  - How the learning path changed as a result
  - What the new current focus is
""".format(today=date.today().isoformat())


# ── Stream helpers ────────────────────────────────────────────────────────────

def stream_run(run) -> None:
    """Stream agent output to stdout as it arrives."""
    try:
        for message in run.messages():
            if message.type == "assistant":
                for block in message.message.content:
                    if block.type == "text":
                        print(block.text, end="", flush=True)
    except Exception:
        pass  # messages() may raise after completion — that's fine


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="AIcademy Cursor SDK trigger")
    parser.add_argument(
        "--mode",
        choices=["onboard", "update", "auto", "edit"],
        default="auto",
        help="onboard: first-time setup; update/edit: regenerate after profile change; auto: infer from session_state",
    )
    parser.add_argument("--repo-root", type=Path, default=Path.cwd())
    args = parser.parse_args()

    repo_root = args.repo_root.resolve()
    mode = "update" if args.mode == "edit" else args.mode

    # If session_state says "edit" it's an update
    if mode == "auto":
        state_file = repo_root / "08_learner_profile" / "session_state.md"
        if state_file.exists() and "mode: edit" in state_file.read_text():
            mode = "update"
        else:
            mode = "onboard"

    api_key = get_api_key(repo_root)
    prompt = ONBOARD_PROMPT if mode == "onboard" else UPDATE_PROMPT

    try:
        from cursor_sdk import Agent, AgentOptions, LocalAgentOptions, CursorAgentError
    except ImportError:
        print(
            "✗  cursor-sdk is not installed.\n"
            "   Run: pip install cursor-sdk\n",
            file=sys.stderr,
        )
        sys.exit(1)

    label = "Generating your curriculum" if mode == "onboard" else "Updating your curriculum"
    print(f"  {label}...\n")

    try:
        with Agent.create(
            model="composer-2.5",
            api_key=api_key,
            local=LocalAgentOptions(cwd=str(repo_root)),
        ) as agent:
            run = agent.send(prompt)
            stream_run(run)
            result = run.wait()

        if result.status == "error":
            print(f"\n✗  Agent run failed (run id: {result.id})", file=sys.stderr)
            print("   Check the run in your Cursor dashboard.", file=sys.stderr)
            sys.exit(2)

    except Exception as e:  # CursorAgentError or unexpected
        name = type(e).__name__
        print(f"\n✗  Agent failed to start ({name}): {e}", file=sys.stderr)
        is_retryable = getattr(e, "is_retryable", False)
        if is_retryable:
            print("   This error is retryable — try running the script again.", file=sys.stderr)
        else:
            print("   Check your CURSOR_API_KEY and internet connection.", file=sys.stderr)
        sys.exit(1)

    print("\n")
    print("  ✓  Done. Open the solution.py path above in Cursor and start coding.")
    print("  ✓  Come back to the Cursor chat when you're ready to submit.")


if __name__ == "__main__":
    main()
