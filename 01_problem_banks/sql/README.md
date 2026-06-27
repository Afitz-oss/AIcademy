# SQL Problem Bank

This folder is a stub. The canonical SQL levels already live in **Appendix B of `../../07_planning/strength_schedule.md`**:

- **Level 1**: WHERE, GROUP BY/HAVING, simple JOIN
- **Level 2**: multi-join, window functions (ROW_NUMBER/RANK/DENSE_RANK), rolling metrics, CASE WHEN, dates
- **Level 3**: CTE rewrites, anti/semi joins, gaps-and-islands, dedup, percentiles

If you want per-level files later:

```
01_problem_banks/sql/
├── level_1.md
├── level_2.md
└── level_3.md
```

For now, ask the agent: *"Generate Level 2 SQL problems from Appendix B in `07_planning/strength_schedule.md`. Use the schema implied by `02_datasets/extended_income_job_country_100_rows.csv`."*
