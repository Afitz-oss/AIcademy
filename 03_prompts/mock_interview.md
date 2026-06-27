# Prompt: Mock Interview

Use this on Saturdays per `07_planning/strength_schedule.md`.

---

Run a mock interview using the protocol in `AGENTS.md`.

- **Length:** <45 min algorithm + 25 min SQL + 5 min wrap | shorter / longer>
- **Algorithm pattern focus:** <random | sliding window | binary search | graphs | dp | "use my weak spot from error log">
- **SQL level:** <Level 1 | Level 2 | Level 3 — see Appendix B in strength_schedule.md>
- **Mode:** <strict (no hints unless I ask) | coaching (nudge me when stuck for >5 min)>

Procedure:

1. Pick the problems and write them to `04_practice_log/<today>_mock_interview/problems.md`.
2. **Do not reveal solutions or optimal approaches.** Only give hints if I'm stuck and request one.
3. After I submit my solutions in `solution_algo.py` and `solution.sql`, walk through:
   - Whether each solution is correct.
   - Time/space complexity (algo) and query plan considerations (SQL).
   - What an interviewer would push on.
   - One refactor that would impress.
4. Log "interview-time" mistakes to `07_planning/error_log.csv` with `category=Mock`.

Start by stating the time budget and reading me problem 1.
