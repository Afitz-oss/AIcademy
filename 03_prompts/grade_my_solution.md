# Prompt: Grade My Solution

Copy/paste into the agent chat after you've written `solution.py`.

---

Use the grading protocol in `AGENTS.md`.

- **Solution file:** `04_practice_log/<folder>/solution.py`
- **Problem file:** `04_practice_log/<folder>/problems.md`

Please:

1. Verify my solution against every acceptance criterion in `problems.md`.
2. List edge cases I missed (empty input, single element, duplicates, negatives, off-by-one, type coercion, etc.).
3. Comment on time/space complexity and suggest a more idiomatic version if mine is clunky.
4. Write your full review to `04_practice_log/<folder>/notes.md`.
5. Append one row per distinct mistake to `07_planning/error_log.csv` with the standard columns.
6. Suggest 1-2 follow-up problems targeting the same weak spot — but don't generate them unless I ask.

Be specific. Quote line numbers from my `solution.py` when calling out issues.
