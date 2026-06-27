# Stage 1 — Core Building Blocks Problem Bank

**Who this is for:** Beginners writing their first real code.
**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 1

---

## 1. Grade Calculator

**Difficulty:** beginner
**Stage:** 1
**Pattern / topic:** Variables, arithmetic, conditionals (if/elif/else)
**Goal track relevance:** Conditional logic is the backbone of every AI decision system — routing a user query, choosing a model, filtering results.
**Dataset:** none

### Goal
Write a function `letter_grade(score)` that takes a numerical score (0–100) and returns the letter grade as a string: `"A"` (90–100), `"B"` (80–89), `"C"` (70–79), `"D"` (60–69), `"F"` (below 60).

### Constraints / I/O
- Input: An integer or float between 0 and 100
- Output: A string — one of `"A"`, `"B"`, `"C"`, `"D"`, `"F"`
- Edge cases to consider: Score of exactly 90, 80, 70, 60. Score of 0. Score of 100.

### Hints
<details><summary>Hint 1</summary>Use `if / elif / elif / elif / else`. Start checking from the highest grade down.</details>
<details><summary>Hint 2</summary>A score of 90 should return "A". So your first condition should be `if score >= 90`.</details>

### Acceptance criteria
- [ ] Returns `"A"` for scores 90–100
- [ ] Returns `"B"` for scores 80–89
- [ ] Returns correct grade for boundary values (exactly 90, 80, 70, 60)
- [ ] Returns `"F"` for score of 0

---

## 2. Tip Calculator

**Difficulty:** beginner
**Stage:** 1
**Pattern / topic:** Variables, arithmetic, float operations, f-strings
**Goal track relevance:** You'll write arithmetic functions constantly — calculating token costs, model inference times, data processing rates.
**Dataset:** none

### Goal
Write a function `calculate_tip(bill_amount, tip_percent)` that returns a tuple of `(tip_amount, total)` rounded to 2 decimal places.

### Constraints / I/O
- Input: `bill_amount` (float), `tip_percent` (int or float, e.g. 20 for 20%)
- Output: A tuple `(tip_amount, total)` — both rounded to 2 decimal places
- Edge cases to consider: What if bill is 0? What if tip_percent is 0?

### Hints
<details><summary>Hint 1</summary>A 20% tip means multiply by 0.20. So tip_percent needs to be converted: `tip_percent / 100`.</details>
<details><summary>Hint 2</summary>Use `round(value, 2)` to round to 2 decimal places.</details>

### Acceptance criteria
- [ ] Returns a tuple, not just one value
- [ ] Tip amount is correctly calculated
- [ ] Both values rounded to 2 decimal places
- [ ] Handles 0% tip and $0 bill correctly

---

## 3. Odd or Even — With a Twist

**Difficulty:** beginner
**Stage:** 1
**Pattern / topic:** Modulo operator `%`, conditionals, boolean return
**Goal track relevance:** The modulo operator appears constantly — pagination, cycling through model options, rate limiting.
**Dataset:** none

### Goal
Write a function `classify_number(n)` that returns:
- `"even"` if `n` is divisible by 2
- `"odd"` if `n` is not divisible by 2
- `"zero"` if `n` is exactly 0

### Constraints / I/O
- Input: An integer `n`
- Output: One of the strings `"even"`, `"odd"`, or `"zero"`
- Edge cases to consider: `n = 0`, negative numbers (e.g. `-4`)

### Hints
<details><summary>Hint 1</summary>The `%` operator gives you the remainder. `10 % 2 == 0` means 10 is even.</details>
<details><summary>Hint 2</summary>Check for 0 first — before checking even/odd.</details>

### Acceptance criteria
- [ ] Returns `"zero"` for `n = 0`
- [ ] Returns `"even"` for `n = -4`, `n = 6`
- [ ] Returns `"odd"` for `n = 7`, `n = -3`
- [ ] Uses the modulo operator `%`
