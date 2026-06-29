#!/usr/bin/env bash
# =============================================================================
# aicademy — AIcademy CLI
#
# Usage:
#   ./scripts/aicademy.sh          → onboard (no-op if already set up)
#   ./scripts/aicademy.sh edit     → update profile, regenerate learning path
# =============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROFILE="$REPO_ROOT/LEARNER_PROFILE.md"
SESSION_STATE="$REPO_ROOT/08_learner_profile/session_state.md"
TRIGGER="$REPO_ROOT/scripts/trigger_agent.py"
TODAY="$(date +%Y-%m-%d)"
MODE="${1:-auto}"

# ── Colors ────────────────────────────────────────────────────────────────────
BOLD='\033[1m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
DIM='\033[2m'
RESET='\033[0m'

# ── Helpers ───────────────────────────────────────────────────────────────────

header() {
  echo ""
  echo -e "${CYAN}${BOLD}  ┌──────────────────────────────────────────┐${RESET}"
  echo -e "${CYAN}${BOLD}  │          🎓  AIcademy Setup               │${RESET}"
  echo -e "${CYAN}${BOLD}  └──────────────────────────────────────────┘${RESET}"
  echo ""
}

ask() {
  local prompt="$1"
  local placeholder="${2:-}"
  local allow_empty="${3:-false}"
  local result

  # All UI goes to stderr so it isn't swallowed by $(...) command substitution.
  echo -e "\n${BOLD}$prompt${RESET}" >&2
  [[ -n "$placeholder" ]] && echo -e "${DIM}  e.g. $placeholder${RESET}" >&2

  while true; do
    read -rp "  → " result
    if [[ -n "$result" || "$allow_empty" == "true" ]]; then
      echo "$result"
      return
    fi
    echo -e "${YELLOW}  Required — please enter a value.${RESET}" >&2
  done
}

pick() {
  local prompt="$1"
  shift
  local -a labels=("$@")

  echo -e "\n${BOLD}$prompt${RESET}" >&2
  for i in "${!labels[@]}"; do
    echo "  $((i+1)). ${labels[$i]}" >&2
  done

  local choice
  while true; do
    read -rp "  → " choice
    if [[ "$choice" =~ ^[0-9]+$ ]] && (( choice >= 1 && choice <= ${#labels[@]} )); then
      echo "${labels[$((choice-1))]}"
      return
    fi
    echo -e "${YELLOW}  Pick a number between 1 and ${#labels[@]}${RESET}" >&2
  done
}

checkboxes() {
  local selected="$1"
  shift
  for opt in "$@"; do
    if [[ "$opt" == "$selected" ]]; then
      echo "- [x] **$opt**"
    else
      echo "- [ ] **$opt**"
    fi
  done
}

is_profile_filled() {
  [[ -f "$PROFILE" ]] && ! grep -q "handle:\*\* ___" "$PROFILE" && grep -q "handle:\*\*" "$PROFILE"
}

# ── Guard: skip if already onboarded and not in edit mode ────────────────────
if [[ "$MODE" != "edit" ]]; then
  if is_profile_filled && \
     [[ -f "$SESSION_STATE" ]] && grep -q "first_problem_delivered: true" "$SESSION_STATE"; then
    echo -e "${GREEN}✓ Already set up.${RESET} Your curriculum is ready in Cursor."
    echo ""
    echo -e "  To update your profile: ${BOLD}./scripts/aicademy.sh edit${RESET}"
    exit 0
  fi
fi

# ── Welcome ───────────────────────────────────────────────────────────────────
header

if [[ "$MODE" == "edit" ]]; then
  echo -e "  ${BOLD}Update Mode${RESET} — re-answer any questions to update your profile."
  echo -e "  ${DIM}Your earned progress (competency map) will be preserved.${RESET}"
else
  echo -e "  Answer ${BOLD}13 quick questions${RESET} and your AI tutor will build a personalized"
  echo -e "  curriculum, generate your first problem, and write your solution file."
  echo ""
  echo -e "  ${DIM}Takes about 2 minutes. Press Ctrl+C at any time to cancel.${RESET}"
fi

echo ""
echo -e "${DIM}────────────────────────────────────────────${RESET}"

# ── Collect answers ───────────────────────────────────────────────────────────

name=$(ask \
  "1/13 · What's your name or handle?" \
  "Akim, coder42, anonymous")

why=$(ask \
  "2/13 · Why are you here? What's your goal?" \
  "I want to get a job in AI / build my own app / switch careers")

fear=$(ask \
  "3/13 · What's your biggest fear or frustration about coding?" \
  "I always get lost / error messages terrify me / I can follow tutorials but can't build on my own")

dream=$(ask \
  "4/13 · What's one thing you want to build someday? Dream big." \
  "my own AI agent / a transformer from scratch / a startup product")

experience=$(pick \
  "5/13 · What's your current experience level?" \
  "Zero — never written code, don't know what a variable is" \
  "Dabbler — watched tutorials, copied code, but nothing has stuck" \
  "Beginner — understand variables/loops/functions but can't build from scratch yet" \
  "Intermediate — can write working Python scripts, want to go deeper")

# Normalize experience to label only
case "$experience" in
  Zero*)    exp_label="Zero" ;;
  Dabbler*) exp_label="Dabbler" ;;
  Beginner*)exp_label="Beginner" ;;
  *)        exp_label="Intermediate" ;;
esac

goal=$(pick \
  "6/13 · Which track fits your goal?" \
  "AI Engineer — build with LLMs, APIs, and AI agents" \
  "Data Scientist — analyze data, build ML models, tell stories with numbers" \
  "Software Engineer — build apps, APIs, and backend systems" \
  "Undecided — help me figure out which path fits")

case "$goal" in
  "AI Engineer"*)    goal_label="AI Engineer" ;;
  "Data Scientist"*) goal_label="Data Scientist" ;;
  "Software"*)       goal_label="Software Engineer" ;;
  *)                 goal_label="Undecided" ;;
esac

time_day=$(pick \
  "7/13 · How much time can you commit per day?" \
  "Less than 30 minutes" \
  "30–60 minutes" \
  "1–2 hours" \
  "2+ hours")

case "$time_day" in
  Less*) time_label="Less than 30 minutes" ;;
  "30"*) time_label="30–60 minutes" ;;
  "1"*)  time_label="1–2 hours" ;;
  *)     time_label="2+ hours" ;;
esac

style=$(pick \
  "8/13 · How do you learn best?" \
  "Read theory first, then practice" \
  "See a worked example, then try myself" \
  "Throw me into a problem — explain after" \
  "Mix of all of the above")

case "$style" in
  "Read"*) style_label="I like to read the theory first, then practice with problems" ;;
  "See"*)  style_label="I like to see a worked example, then try something similar myself" ;;
  "Throw"*)style_label="I like to be thrown into a problem and figure it out — explain after" ;;
  *)       style_label="I like a mix of all of the above" ;;
esac

github=$(pick "9/13 · Have you used GitHub before?" "Yes" "No" "Not sure what that is")
python=$(pick "10/13 · Do you have Python installed?" "Yes" "No" "Not sure")
cursor_exp=$(pick "11/13 · Have you used Cursor or another AI coding tool?" "Yes" "No")
errors=$(pick "12/13 · Are you comfortable reading error messages?" \
  "Yes — I can usually figure out what went wrong" \
  "Sometimes — depends on the error" \
  "No — they terrify me")

case "$errors" in
  Yes*) error_label="Yes" ;;
  Some*)error_label="Sometimes" ;;
  *)    error_label="No — they terrify me" ;;
esac

topics=$(ask \
  "13/13 · Any topics that already excite you? (optional — press Enter to skip)" \
  "machine learning, chatbots, data analysis, web apps" \
  "true")

# ── Write LEARNER_PROFILE.md ──────────────────────────────────────────────────

cat > "$PROFILE" <<PROFILE
# My Learner Profile

> **Instructions:** Fill out every section below before opening Cursor chat.
> Be honest — there are no wrong answers. The AI reads this file before every session
> and uses it to personalize your curriculum, problem difficulty, and teaching style.
> The more you share, the better it can adapt to you.

---

## About Me

- **Name / handle:** $name
- **Why I'm here (in your own words):** $why
  *(e.g. "I want to get a job in AI", "I want to build my own app", "I'm curious about coding", "I want to switch careers")*

- **My biggest fear or frustration about coding:** $fear
  *(e.g. "I always get lost and give up", "I can follow tutorials but can't build anything on my own", "error messages make no sense to me")*

- **One thing I want to build someday:** $dream
  *(Dream big — this becomes your north star for every problem the AI generates)*

---

## My Experience Level

Pick the one that fits best:

$(checkboxes "$exp_label" "Zero" "Dabbler" "Beginner" "Intermediate")

---

## My Goal Track

Pick one (you can change this later):

$(checkboxes "$goal_label" "AI Engineer" "Data Scientist" "Software Engineer" "Undecided")

---

## Time I Can Commit Per Day

$(checkboxes "$time_label" "Less than 30 minutes" "30–60 minutes" "1–2 hours" "2+ hours")

---

## How I Learn Best

$(checkboxes "$style_label" \
  "I like to read the theory first, then practice with problems" \
  "I like to see a worked example, then try something similar myself" \
  "I like to be thrown into a problem and figure it out — explain after" \
  "I like a mix of all of the above")

---

## A Few More Things (optional but helpful)

- **Have you used GitHub before?** $github
- **Do you have Python installed on your computer?** $python
- **Have you used Cursor or any AI coding tool before?** $cursor_exp
- **Are you comfortable reading error messages?** $error_label
- **Any topics that already excite you?** ${topics:-Not specified}

---

## After You Fill This Out

Open Cursor, start a new chat, and say:

> **"I just filled out my profile, let's get started."**

The AI will read everything above and generate your personalized learning path.
PROFILE

# ── Write session_state.md (pending — agent will update to active) ────────────

mkdir -p "$(dirname "$SESSION_STATE")"
cat > "$SESSION_STATE" <<STATE
status: onboarded
first_problem_delivered: false
last_updated: $TODAY
mode: ${MODE}
STATE

# ── Summary ───────────────────────────────────────────────────────────────────

echo ""
echo -e "${DIM}────────────────────────────────────────────${RESET}"
echo ""
echo -e "${GREEN}${BOLD}✓ Profile saved.${RESET}"
echo ""
echo -e "  ${BOLD}Name:${RESET}       $name"
echo -e "  ${BOLD}Track:${RESET}      $goal_label"
echo -e "  ${BOLD}Level:${RESET}      $exp_label"
echo -e "  ${BOLD}Time/day:${RESET}   $time_label"
echo ""

# ── Trigger the Cursor SDK agent ──────────────────────────────────────────────

if ! command -v python3 &>/dev/null; then
  echo -e "${YELLOW}⚠  python3 not found — skipping AI curriculum generation.${RESET}"
  echo "   Install Python 3 and re-run, or open Cursor chat to generate your curriculum."
  exit 0
fi

if ! python3 -c "import cursor_sdk" 2>/dev/null; then
  echo -e "${YELLOW}⚠  cursor-sdk not installed.${RESET}"
  echo "   Run: pip install cursor-sdk"
  echo "   Then re-run this script, or open Cursor chat to generate your curriculum."
  exit 0
fi

echo -e "${CYAN}${BOLD}Generating your personalized curriculum via Cursor SDK...${RESET}"
echo -e "${DIM}(This may take 30–60 seconds)${RESET}"
echo ""

python3 "$TRIGGER" --mode "$MODE" --repo-root "$REPO_ROOT"
