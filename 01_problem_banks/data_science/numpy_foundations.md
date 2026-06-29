# Data Science — NumPy Foundations

**Roadmap:** `09_roadmaps/data_scientist.md` → step 1
**Setup required:** `pip install numpy`

> **Why this matters:** pandas, scikit-learn, and PyTorch all sit on NumPy. Vectorized array math is the language of numerical computing — you can't go deep into ML without it.

---

## 1. Vectorized Operations vs. Loops

**Difficulty:** Beginner
**Stage:** Data Science
**Pattern / topic:** Array creation, vectorized arithmetic
**Goal track relevance:** The first big idea — operate on whole arrays at once instead of looping. This is faster and is how all numerical code is written.
**Dataset:** none

### Goal
Create a numpy array of the numbers 1–10. Without a Python loop, produce: each value squared, each value's distance from the mean, and the count of values above the mean.

### Constraints / I/O
- Input: an array 1–10
- Output: squared array, deviations, count above mean
- Edge cases to consider: integer vs. float division

### Hints
<details><summary>Hint 1</summary>`np.arange(1, 11)`. Arithmetic like `arr ** 2` and `arr - arr.mean()` is element-wise automatically.</details>
<details><summary>Hint 2</summary>`(arr > arr.mean()).sum()` — a boolean array sums as 1s and 0s.</details>

### Acceptance criteria
- [ ] No Python loops
- [ ] Squares, deviations, and count above mean all correct
- [ ] Uses vectorized operations throughout

---

## 2. Broadcasting

**Difficulty:** Intermediate
**Stage:** Data Science
**Pattern / topic:** Broadcasting, 2D arrays
**Goal track relevance:** Broadcasting is how numpy applies operations across different-shaped arrays — the mechanism behind normalizing features, applying weights, and more.
**Dataset:** none

### Goal
Create a 2D array (5 rows × 3 columns) of random numbers. Normalize each column to mean 0 and standard deviation 1 (subtract column mean, divide by column std) using broadcasting — no loops.

### Constraints / I/O
- Input: a 5×3 array
- Output: a column-normalized array
- Edge cases to consider: a column with zero variance (division by zero)

### Hints
<details><summary>Hint 1</summary>`arr.mean(axis=0)` gives per-column means with shape (3,), which broadcasts against (5, 3).</details>
<details><summary>Hint 2</summary>Verify: the normalized array's column means should be ~0 and column stds ~1.</details>

### Acceptance criteria
- [ ] Column-wise normalization via broadcasting
- [ ] No loops
- [ ] Verified column means ≈ 0, stds ≈ 1
- [ ] Notes the zero-variance edge case

---

## 3. From Pandas to NumPy and Back

**Difficulty:** Advanced
**Stage:** Data Science
**Pattern / topic:** Bridging pandas and numpy, boolean indexing
**Goal track relevance:** Real ML constantly converts between pandas (labeled) and numpy (raw arrays for models). This is the practical seam.
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv`

### Goal
Load the income dataset, extract the `Average Annual Income (USD)` and `Employment Rate (%)` columns as a numpy array, compute the correlation coefficient between them using numpy only, and use boolean indexing to return all income values where employment rate exceeds 90%.

### Constraints / I/O
- Input: the dataset
- Output: the numpy array, the correlation, the filtered incomes
- Edge cases to consider: missing values; column-to-array conversion

### Hints
<details><summary>Hint 1</summary>`df[[col1, col2]].to_numpy()` converts to a numpy array. `np.corrcoef` computes correlation.</details>
<details><summary>Hint 2</summary>Boolean index: `incomes[employment > 90]`.</details>

### Acceptance criteria
- [ ] Columns converted to a numpy array
- [ ] Correlation computed with numpy
- [ ] Boolean indexing returns the correct subset
- [ ] Handles any missing values explicitly
