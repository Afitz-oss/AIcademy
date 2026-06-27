# Prompt: Weak-Spot Drill

Use this on Fridays/Sundays per `07_planning/strength_schedule.md`.

---

Use the Tutor Mode rules in `AGENTS.md`. Drill my weak spots.

1. Read `07_planning/error_log.csv`.
2. Group rows by `pattern_tag` and `category`. Identify the top 2-3 recurring weak spots in the last <14 | 30> days.
3. For each weak spot, generate **2 fresh problems** at the same difficulty as where I struggled, using `01_problem_banks/<area>/` for style.
4. Save them in `04_practice_log/<today>_weak_spot_drill/problems.md`, grouped by weak-spot heading.
5. After I solve, grade per `grade_my_solution.md` rules and update the existing error log rows:
   - If I got the corresponding pattern right this time, change `status` to `closed` and set `revisit_date` to 30 days out.
   - If I got it wrong again, leave `status=open`, increment a count in `notes`, and add a `revisit_date` 7 days out.

Tell me up front which 2-3 weak spots you identified and why before generating any problems.
