# Prompt: Generate Practice Problems

Copy/paste into the agent chat and fill in the angle-bracket fields.

---

Use the Tutor Mode rules in `AGENTS.md`. Generate practice problems for me.

- **Topic:** <e.g. "pandas groupby + window functions" | "sliding window algorithm" | "decorators with *args/**kwargs">
- **Difficulty:** <easy | medium | hard>
- **Style:** <fill-in-the-blank | open-ended | leetcode-style | code-the-output>
- **Count:** <number of problems, default 1 — do one at a time>
- **Dataset:** <`02_datasets/extended_income_job_country_100_rows.csv` | `02_datasets/python_sandbox.py` | "none" | other>
- **Reference banks:** Skim relevant files in `01_problem_banks/<area>/` to match style and difficulty.

**Delivery rules (follow the Problem Delivery Protocol in `AGENTS.md`):**
1. Print the problem in chat first — full and readable
2. Create `04_practice_log/<today>_<topic-slug>/solution.py` with the problem as a comment header
3. Tell me the exact file path to open
4. Write the full problem record to `problems.md` in the same folder (background — I don't need to open it)
5. Wait for me to say "done" or paste my output before doing anything else

**Do not:**
- Give me multiple problems at once — one at a time, wait for my solution
- Include the solution anywhere
- Move on before I've attempted it
