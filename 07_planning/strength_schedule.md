Programming Strength Schedule (4-Week Loop)

Time per day: ~3 hours
Structure per day:
- Warm-Up (20–30 min)
- Primary Skill (60–90 min)
- Secondary Skill (30–45 min)
- Error Log (5–10 min)

Primary reference assets in this workspace (use these often):
- `00_knowledgebase/pandas_python_reference.ipynb` — Pandas + Python reference, sections 1.x and 2.x
- `00_knowledgebase/algorithms.ipynb` — A-1 (Big O) through A-9 (DP); concept primers for every algorithm pattern
- `00_knowledgebase/ai_engineering.ipynb` — AE-1 through AE-6 (LLMs, APIs, prompting, embeddings, RAG, agents)
- `00_knowledgebase/software_engineering.ipynb` — SE-1 through SE-6 (Git, clean code, OOP, pytest, REST APIs)
- `01_problem_banks/pandas/dataset_manipulation.md` (Pandas selection / filtering / dict creation)
- `01_problem_banks/pandas/iteration_aggregation.md` (Pandas iteration + groupby)
- `01_problem_banks/python_fundamentals/{generators,aggregation_comprehensions,dict_counting,loops,builtins_and_methods}.md`
- Datasets: `02_datasets/extended_income_job_country_100_rows.csv`, `02_datasets/cleaned_data.csv`

How to use this plan
1) Pick the day below, check off the checklist, and timebox strictly.
2) For Pandas, prioritize using `extended_income_job_country_100_rows.csv`.
3) For algorithms/SQL, select from the pattern banks in the Appendices.
4) Log issues in `error_log_template.csv` daily.

Daily Checklists (copy into your notes each day)
- Warm-Up: 1–3 micro-drills from Warm-Up Pool
- Primary: Complete the listed blocks for the day (see below)
- Secondary: Finish 1 focused task
- Error Log: Record at least 1 learning + 1 weak-spot tag

Day-by-Day

Monday — Primary: Python + Pandas | Secondary: Algorithms (Easy)
- Warm-Up (pick 2–3):
  - `01_problem_banks/python_fundamentals/generators.md`: any row (e.g., Sum evens; Any match?)
  - `01_problem_banks/python_fundamentals/dict_counting.md`: key check vs init
  - `01_problem_banks/python_fundamentals/loops.md`: lists/strings loops
- Primary (do 2):
  - From `01_problem_banks/pandas/dataset_manipulation.md` → choose 2 distinct topics, e.g.:
    - “Get the Index and Retrieve Data” + “Pandas DataFrame Creation from a Dictionary”
    - or any “Filtering Data with Pandas” / “Accessing Specific Data Using loc”
  - From `01_problem_banks/pandas/iteration_aggregation.md` → choose 1 mapping/aggregation line and implement vectorized first
- Secondary (pick 1 easy algorithm): see Appendix A: Easy Patterns (Hash map, Two Pointers, Stack basics)
- Error Log (5–10m): note 1 Pandas gotcha + 1 algorithm pattern edge case

Tuesday — Primary: Algorithms I (Core Patterns) | Secondary: SQL (light)
- Warm-Up: 1 quick frequency-counter or two-pointer dry run
- Primary (choose one pattern; do 2–3 problems): Hash Map OR Two Pointers OR Sliding Window
- Secondary SQL (1 basic): simple join + aggregation or WHERE filtering (see Appendix B → SQL Level 1)
- Error Log: log boundary errors and off-by-one notes

Wednesday — Primary: SQL (Core → Advanced) | Secondary: Python scripting drills
- Warm-Up: 1 simple SELECT ... WHERE
- Primary (3–4 queries):
  - JOINs, GROUP BY, window functions, top-N per group, and a CTE rewrite
- Secondary (pick 1 small script):
  - File I/O or regex cleanup, or “mini CLI” that loads `extended_income_job_country_100_rows.csv` and prints top-5 by income
- Error Log: 1 window function pitfall + 1 indexing tip from notebook 1.3 or 1.5

Thursday — Primary: Algorithms II (Intermediate) | Secondary: Pandas mini-task/refactor
- Warm-Up: ≤15 min single easy algorithm
- Primary (2 medium): Sliding Window, Prefix Sums, Binary Search variants, Graph BFS/DFS, or Heaps
- Secondary (choose 1):
  - Refactor a previous Pandas solution for readability/perf
  - Or one short manipulation from `01_problem_banks/pandas/iteration_aggregation.md` (e.g., Income Difference + sort)
- Error Log: capture a complexity note and one alternative approach

Friday — Primary: Integration (Mixed) | Secondary: Weak Spot Review
- Warm-Up: 1 Python or SQL quickie
- Primary:
  - 1 Pandas exercise (from `01_problem_banks/pandas/dataset_manipulation.md` or `01_problem_banks/pandas/iteration_aggregation.md`)
  - 1 medium algorithm (speed + explanation)
  - 1 light SQL
- Secondary: review 1 weak area from your error log for 30–40 min
- Error Log: write 1 “before/after” correction story

Saturday — Primary: ML Concepts + Mock Interviews | Secondary: Algorithms (Blind Re-solve)
- ML Concept Block (60m) — rotate weekly:
  - W1: Overfitting, model selection, leakage
  - W2: Metrics & evaluation
  - W3: Feature engineering, drift
  - W4: System design (fraud/recsys pipeline)
- Mock Interview Block (60–90m): 1 algorithm + 1 SQL under time
- Secondary: 1 blind re-solve of a medium algorithm missed earlier in week
- Error Log: list 2 “interview-time” mistakes to fix next week

Sunday — Rest / Light Review | Secondary: Error Log & Pattern Analysis
- Light blind re-solves (1–2)
- Review error log for recurring mistakes (e.g., window misuse, Pandas indexing slips)
- Plan next week’s pattern focus (e.g., Binary Search boundaries Thursday)

Warm-Up Pool (rotate; 5–10 minute bites)
- Python fundamentals:
  - `01_problem_banks/python_fundamentals/generators.md` rows 1–11 (any/all/min/max/next/first-match)
  - `01_problem_banks/python_fundamentals/dict_counting.md` init vs exists; small dict-count kata
  - `01_problem_banks/python_fundamentals/loops.md` strings/dicts/tuples loop variants
  - `01_problem_banks/python_fundamentals/builtins_and_methods.md` quick-fire built-ins and methods
- Pandas micro-drills (use `00_knowledgebase/pandas_python_reference.ipynb`):
  - 1.2: `df.info`, `df.describe`, `df.nunique`
  - 1.3: `loc`, `iloc`, `isin`, `str.contains`
  - 1.5: `groupby().agg`, `value_counts`
  - 1.6: missing values: `isna`, `fillna`, `dropna`

Pandas Exercise Menu (pull from these all week)
- From `01_problem_banks/pandas/dataset_manipulation.md` (examples):
  - Index & retrieve “Software Engineer”; build `job_incomes` dict
  - Nested `country_data` dict → DataFrame
  - Filter income > 90k; set job titles as index; `.loc` country + job
  - Industry filtering; Technology > 80k; label columns
- From `01_problem_banks/pandas/iteration_aggregation.md` (pick lines):
  - Aggregations (avg per industry, median per country)
  - Mapping (Income Difference; Above Median flag; contains "Engineer")
  - Sorting (top 5 highest-paying)

Appendix A — Algorithm Problem Bank (by pattern)

Easy (use Mon/Tue warm-ups and Monday secondary)
- Hash Map
  - Two Sum variations (unique pair, count pairs)
  - Isomorphic strings
  - Ransom note (char counts)
  - Valid anagram; First unique character
- Two Pointers (arrays/strings)
  - Reverse vowels; Merge sorted arrays
  - Remove duplicates in-place; Valid palindrome II (at most one delete)
- Stack Basics
  - Valid parentheses; Remove adjacent duplicates; Min stack design (easy version)
- Prefix/Sets
  - Longest subarray with distinct elements (easy version on short arrays)

Medium (use Tue/Thu/Fri/Sat)
- Sliding Window
  - Longest substring without repeating characters
  - Minimum window substring
  - Longest substring with at most K distinct
- Prefix Sum / Counting
  - Subarray sum equals K
  - Continuous array with equal 0/1 (binary array)
  - Longest well-performing interval
- Binary Search (on value / on answer)
  - Find min in rotated sorted array
  - Koko eating bananas / capacity to ship packages
  - Median of two sorted arrays (stretch)
- Two Pointers / Greedy
  - 3Sum; 3Sum closest; Container with most water
  - Jump game II; Gas station
- Stack / Monotonic
  - Daily temperatures; Next greater element (circular)
  - Largest rectangle in histogram
- Graphs
  - Number of islands; Rotting oranges (BFS)
  - Course schedule (topo sort); Clone graph
- Heaps
  - Top-K frequent elements; Kth largest in stream
  - Merge K sorted lists
- Dynamic Programming (foundational)
  - House robber I/II; Coin change; Longest increasing subsequence

Appendix B — SQL Problem Bank (Level 1 → 3)

Level 1 (Tuesday secondary; Friday light)
- Basic select/filtering: WHERE with AND/OR, LIKE; ORDER BY
- Aggregation: COUNT/AVG/SUM with GROUP BY + HAVING
- Simple JOIN (inner/left) across tables

Level 2 (Wednesday core)
- Multi-join queries (3+ tables)
- Top-N per group with window functions: ROW_NUMBER/RANK/DENSE_RANK
- Rolling metrics: SUM() OVER(PARTITION BY ... ORDER BY ... ROWS ...)
- Conditional aggregation with CASE WHEN
- Date functions and bucketing

Level 3 (Wednesday advanced)
- CTE-based rewrites of nested subqueries
- Anti/semi joins (LEFT JOIN ... WHERE right IS NULL; EXISTS/NOT EXISTS)
- Gaps-and-islands (island labeling via difference of row_number and sequence)
- Deduplication (choose latest by timestamp per key)
- Percentiles with window functions (PERCENT_RANK/NTILE)

Saturday Mock Interview Guidance
- 75–90 minutes total: 45–50 min algorithm + 25–30 min SQL + buffer
- Algorithm: choose a Medium from Appendix A; verbalize approach, edge cases, complexity
- SQL: choose a Level 2 or Level 3; write a clean CTE version and a window-based version

Daily Error Log Protocol (5–10 minutes)
- Open `error_log_template.csv`
- Fill: date, category (Python/Pandas/SQL/Algo), problem, root cause, fix, next action, tags, revisit date
- Each Friday: scan for recurring patterns and schedule a 30–40 min fix block

Lightweight Weekly Rotation (Weeks 1–4)
- Week 1 focus: Sliding Window + Basic Windows in SQL
- Week 2 focus: Binary Search on answer + GROUP BY gotchas
- Week 3 focus: Monotonic Stack + joins and dedupe patterns
- Week 4 focus: Graph BFS/Topo + Top-N per group patterns

Notes
- Prefer vectorized Pandas first; only loop if necessary
- For algorithms, write brute force first (quick), then optimize to target pattern
- For SQL, validate intermediate CTE outputs with small SELECTs


