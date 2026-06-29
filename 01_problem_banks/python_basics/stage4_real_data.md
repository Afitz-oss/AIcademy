# Stage 4 — Working with Real Data Problem Bank

**Who this is for:** Learners who have completed Stages 0–3 (variables, collections, functions).
**Knowledgebase reference:** `00_knowledgebase/pandas_python_reference.ipynb` (sections 1.1–1.3)
**Roadmap:** `09_roadmaps/python_first_principles.md` → Stage 4
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

> **Columns in the dataset:** `Country`, `Job Title`, `Average Annual Income (USD)`, `Median Annual Income (USD)`, `Income Bracket`, `Employment Rate (%)`, `Industry`

> **Bring your own dataset:** The default file is small (100 rows). You can drop any CSV into `02_datasets/` and tell the tutor its filename to generate these problems against your own data instead.

This stage bridges pure Python and real, professional work. All three tracks (AI, Data Science, Software) work with real data constantly — this is where you start.

---

## 1. Load and Look

**Difficulty:** Beginner
**Stage:** 4
**Pattern / topic:** `pd.read_csv`, `.head()`, `.shape`, `.columns`, `.info()`
**Goal track relevance:** Every data pipeline — AI training data, analytics, app backends — begins by loading and inspecting data. This is step one, always.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
Load the dataset with pandas and print: the number of rows and columns, the column names, the first 5 rows, and the data type of each column.

### Constraints / I/O
- Input: the CSV file path
- Output: shape, column names, head, dtypes printed
- Edge cases to consider: what dtype did the income columns get? Is `Employment Rate (%)` a float?

### Hints
<details><summary>Hint 1</summary>`import pandas as pd; df = pd.read_csv("02_datasets/extended_income_job_country_100_rows.csv")`</details>
<details><summary>Hint 2</summary>`df.shape`, `df.columns`, `df.head()`, `df.dtypes` — and `df.info()` shows it all at once.</details>

### Acceptance criteria
- [ ] Dataset loaded into a DataFrame
- [ ] Row/column count printed
- [ ] First 5 rows shown
- [ ] Column dtypes printed
- [ ] Learner can name which columns are numeric vs. text

---

## 2. Filter and Select

**Difficulty:** Beginner
**Stage:** 4
**Pattern / topic:** Boolean filtering, column selection
**Goal track relevance:** Filtering rows and selecting columns is the most common data operation you'll ever do — narrowing a dataset to what matters.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
From the dataset: (a) select only the `Country`, `Job Title`, and `Average Annual Income (USD)` columns, and (b) filter to only rows where `Average Annual Income (USD)` is greater than 80,000. Print how many rows match.

### Constraints / I/O
- Input: the DataFrame
- Output: a filtered, column-selected DataFrame + the matching row count
- Edge cases to consider: column names with spaces and units need exact bracket access

### Hints
<details><summary>Hint 1</summary>Select columns with a list: `df[["Country", "Job Title", "Average Annual Income (USD)"]]`.</details>
<details><summary>Hint 2</summary>Filter with a boolean mask: `df[df["Average Annual Income (USD)"] > 80000]`.</details>

### Acceptance criteria
- [ ] Correct three columns selected
- [ ] Rows filtered to income > 80,000
- [ ] Matching row count printed
- [ ] No `KeyError` from column-name typos

---

## 3. Group and Aggregate

**Difficulty:** Intermediate
**Stage:** 4
**Pattern / topic:** `groupby`, `.agg`, `.mean()`, sorting
**Goal track relevance:** Aggregation answers real questions: "what's the average income per industry?" This is the core of data analysis and feature engineering.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
Compute the average `Average Annual Income (USD)` for each `Industry`, sorted from highest to lowest. Then find which `Country` has the highest average employment rate.

### Constraints / I/O
- Input: the DataFrame
- Output: industry→avg income (sorted) and the top country by employment rate
- Edge cases to consider: industries with only one job; ties

### Hints
<details><summary>Hint 1</summary>`df.groupby("Industry")["Average Annual Income (USD)"].mean().sort_values(ascending=False)`.</details>
<details><summary>Hint 2</summary>For the country question, group by `Country` on `Employment Rate (%)` and take `.idxmax()`.</details>

### Acceptance criteria
- [ ] Average income per industry, sorted descending
- [ ] Top country by employment rate identified
- [ ] Uses `groupby` (not manual loops)
- [ ] Result is readable

---

## 4. String Methods on Real Columns

**Difficulty:** Intermediate
**Stage:** 4
**Pattern / topic:** `.str` methods, `str.contains`, filtering text
**Goal track relevance:** Text columns are everywhere and messy. String methods clean and filter them — essential for any real dataset.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
Find all rows where the `Job Title` contains the word "Engineer" (case-insensitive). Then create a new column `Title Upper` that is the uppercase version of `Job Title`. Print the count of engineering jobs and the first few new values.

### Constraints / I/O
- Input: the DataFrame
- Output: engineering-job rows, count, and the new uppercase column
- Edge cases to consider: case sensitivity ("engineer" vs "Engineer"); partial matches ("Engineering")

### Hints
<details><summary>Hint 1</summary>`df[df["Job Title"].str.contains("engineer", case=False)]`.</details>
<details><summary>Hint 2</summary>`df["Title Upper"] = df["Job Title"].str.upper()`.</details>

### Acceptance criteria
- [ ] Case-insensitive match for "Engineer"
- [ ] Count of matching rows printed
- [ ] New uppercase column created
- [ ] Uses vectorized `.str` methods, not a Python loop

---

## 5. From CSV to a Clean Summary (mini-project)

**Difficulty:** Advanced
**Stage:** 4
**Pattern / topic:** End-to-end: load → clean → aggregate → write
**Goal track relevance:** A complete small data pipeline — exactly the shape of real ETL work and AI data prep.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
Write a function `summarize(csv_path)` that loads the data, handles any missing values sensibly, computes a per-country summary (number of jobs, average income, average employment rate), and writes the summary to a new CSV `country_summary.csv`. Return the summary DataFrame.

### Constraints / I/O
- Input: the CSV path
- Output: a written `country_summary.csv` + the returned summary DataFrame
- Edge cases to consider: missing values; countries with one job; column naming in the output

### Hints
<details><summary>Hint 1</summary>Check `df.isna().sum()` first. Decide whether to fill or drop, and justify it.</details>
<details><summary>Hint 2</summary>`df.groupby("Country").agg(jobs=("Job Title","count"), avg_income=("Average Annual Income (USD)","mean"), avg_employment=("Employment Rate (%)","mean"))`, then `.to_csv(...)`.</details>

### Acceptance criteria
- [ ] Loads and inspects for missing values
- [ ] Per-country summary with 3 aggregates
- [ ] Writes a valid `country_summary.csv`
- [ ] Returns the summary DataFrame
- [ ] Function works if pointed at a different CSV with the same schema
