# Stage 2 — Collections and Repetition Problem Bank

**Who this is for:** Beginners who understand variables and conditionals.
**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 2

---

## 1. Shopping Cart Total

**Difficulty:** beginner
**Stage:** 2
**Pattern / topic:** Lists, for loops, accumulator pattern
**Goal track relevance:** Iterating over a list and accumulating results is how you process batches of API responses, rows of data, or user inputs.
**Dataset:** none

### Goal
Write a function `cart_total(prices)` that takes a list of prices (floats) and returns the total, rounded to 2 decimal places.

```python
cart_total([9.99, 4.50, 12.00, 0.99])  # → 27.48
cart_total([])  # → 0.0
```

### Constraints / I/O
- Input: A list of floats (prices)
- Output: A float rounded to 2 decimal places
- Edge cases to consider: Empty list, list with one item, list with negative values (discounts)

### Hints
<details><summary>Hint 1</summary>Start with a `total = 0` variable. Loop through the list and add each price to total.</details>
<details><summary>Hint 2</summary>An empty list should return 0.0, not cause an error. Your accumulator pattern handles this automatically — why?</details>

### Acceptance criteria
- [ ] Returns correct total for a normal list
- [ ] Returns `0.0` for empty list
- [ ] Returns value rounded to 2 decimal places
- [ ] Works with a single-item list

---

## 2. Word Frequency Counter

**Difficulty:** easy
**Stage:** 2
**Pattern / topic:** Dictionaries, for loops, counting pattern
**Goal track relevance:** Counting frequencies is how search engines rank results, how spam filters work, and how LLMs are evaluated. This exact pattern shows up everywhere in data science and NLP.
**Dataset:** none

### Goal
Write a function `word_count(sentence)` that takes a string and returns a dictionary mapping each word to how many times it appears. Ignore case (treat "Hello" and "hello" as the same word).

```python
word_count("the cat sat on the mat the cat")
# → {"the": 3, "cat": 2, "sat": 1, "on": 1, "mat": 1}
```

### Constraints / I/O
- Input: A string sentence
- Output: A dictionary `{word: count}`
- Edge cases to consider: Empty string, single word, words with mixed case ("Hello" vs "hello")

### Hints
<details><summary>Hint 1</summary>Use `.lower()` to normalize case. Use `.split()` to break the sentence into a list of words.</details>
<details><summary>Hint 2</summary>For counting in a dictionary: check if the word is already a key. If yes, increment. If no, set to 1. Or use `.get(word, 0) + 1`.</details>

### Acceptance criteria
- [ ] Returns correct counts for the example above
- [ ] Case-insensitive ("The" and "the" counted as same word)
- [ ] Returns empty dict `{}` for empty string
- [ ] Uses a dictionary, not a list

---

## 3. FizzBuzz — The Classic

**Difficulty:** easy
**Stage:** 2
**Pattern / topic:** for loops, range(), modulo, conditionals
**Goal track relevance:** FizzBuzz is a famous interview filter — not because it's hard, but because it tests whether you can translate requirements into code accurately. Interviewers use it to weed out people who've never actually coded.
**Dataset:** none

### Goal
Write a function `fizzbuzz(n)` that returns a list of strings from 1 to n (inclusive) where:
- Multiples of 3 → `"Fizz"`
- Multiples of 5 → `"Buzz"`
- Multiples of both 3 and 5 → `"FizzBuzz"`
- Everything else → the number as a string

```python
fizzbuzz(15)
# → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
#    "11", "Fizz", "13", "14", "FizzBuzz"]
```

### Constraints / I/O
- Input: An integer `n`
- Output: A list of strings, length n
- Edge cases to consider: n=1, n=0, the order of conditions matters

### Hints
<details><summary>Hint 1</summary>Check for FizzBuzz (divisible by BOTH) FIRST, before checking Fizz or Buzz separately. Order matters.</details>
<details><summary>Hint 2</summary>Use `range(1, n+1)` to include n. Use `str(i)` to convert the number to a string.</details>

### Acceptance criteria
- [ ] Returns a list (not prints)
- [ ] Correct output for n=15 (matches example)
- [ ] 15 returns `"FizzBuzz"`, not `"Fizz"` or `"Buzz"`
- [ ] Numbers returned as strings, not integers

---

## 4. Top 3 Salaries

**Difficulty:** easy
**Stage:** 2
**Pattern / topic:** Lists, sorting, slicing, dictionaries
**Goal track relevance:** Ranking and selecting top-N items is fundamental in data science (top customers, top models by performance) and in AI (top search results, highest-probability tokens).
**Dataset:** none

### Goal
Write a function `top_three_earners(employees)` that takes a list of dictionaries (each with `"name"` and `"salary"` keys) and returns a list of the top 3 names sorted by salary, highest first.

```python
employees = [
    {"name": "Alice", "salary": 95000},
    {"name": "Bob", "salary": 120000},
    {"name": "Carol", "salary": 87000},
    {"name": "David", "salary": 145000},
    {"name": "Eve", "salary": 102000}
]
top_three_earners(employees)  # → ["David", "Bob", "Eve"]
```

### Constraints / I/O
- Input: A list of dicts with "name" and "salary"
- Output: A list of names (strings), top 3 by salary
- Edge cases to consider: List with fewer than 3 employees, all same salary

### Hints
<details><summary>Hint 1</summary>Sort the list by salary using `sorted(employees, key=lambda e: e["salary"], reverse=True)`.</details>
<details><summary>Hint 2</summary>After sorting, slice `[:3]` to get the top 3, then extract just the names.</details>

### Acceptance criteria
- [ ] Returns only names, not the full dicts
- [ ] Sorted highest salary first
- [ ] Returns at most 3 items
- [ ] Works if list has fewer than 3 employees (returns all of them)
