# Practice Log

Every practice session lives in its own dated folder here. The agent creates these when you use a prompt from `03_prompts/`.

## Naming convention

```
04_practice_log/YYYY-MM-DD_<topic-slug>/
├── problems.md             # written by the agent
├── solution.py             # written by you
├── solution.sql            # if SQL practice
├── solution_reference.py   # written by the agent only if you ask
└── notes.md                # written by the agent during grading
```

`<topic-slug>` is lowercase, words joined with underscores, e.g.
`2026-04-26_pandas_groupby_windows`, `2026-04-27_sliding_window_medium`.

## Workflow

1. Run a prompt from `03_prompts/` to populate `problems.md`.
2. Solve in `solution.py`.
3. Run `03_prompts/grade_my_solution.md` to get a review in `notes.md`.
4. Mistakes flow into `../07_planning/error_log.csv` automatically.

## Cleanup

Old folders stay forever — they're your training history. If a folder gets too cluttered, archive it by prefixing with `_done_` instead of deleting.
