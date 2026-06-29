# Algorithms — Sliding Window

**Pattern:** A moving window over a sequence that expands/contracts to maintain a constraint.
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** "longest/shortest/max/min subarray or substring such that..." — anything about contiguous runs.

---

## 1. Maximum Sum of a Fixed Window

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Fixed-size sliding window
**Goal track relevance:** The simplest window — slide a fixed size and reuse the previous sum instead of recomputing. The core efficiency idea of the whole pattern.
**Dataset:** none

### Goal
Given a list of integers and a window size `k`, return the maximum sum of any contiguous subarray of size `k`.

### Constraints / I/O
- Input: `list[int]`, `k: int`
- Output: `int` max window sum
- Edge cases to consider: `k` larger than the list, empty list, `k == 0`

### Hints
<details><summary>Hint 1</summary>Compute the first window's sum, then for each step add the new element and subtract the one leaving.</details>
<details><summary>Hint 2</summary>Don't recompute the whole window each time — that's the O(n·k) trap.</details>

### Acceptance criteria
- [ ] Correct max sum
- [ ] Reuses the running sum (no full recompute per window)
- [ ] Handles k > len and empty list
- [ ] **States time and space complexity** (target: O(n) time, O(1) space)

---

## 2. Longest Substring Without Repeating Characters

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Variable-size window + hash set
**Goal track relevance:** The most-asked sliding-window problem. Window grows and shrinks based on a uniqueness constraint.
**Dataset:** none

### Goal
Given a string, return the length of the longest substring with no repeating characters.

### Constraints / I/O
- Input: `str`
- Output: `int` length
- Edge cases to consider: empty string, all same char, all unique

### Hints
<details><summary>Hint 1</summary>Expand the right edge; when you hit a duplicate, shrink from the left until the duplicate is gone.</details>
<details><summary>Hint 2</summary>Track characters currently in the window with a set or last-seen-index map.</details>

### Acceptance criteria
- [ ] Correct length
- [ ] Window shrinks correctly on duplicates
- [ ] Handles empty/edge inputs
- [ ] **States time and space complexity** (target: O(n) time, O(min(n, charset)) space)

---

## 3. Minimum Window Substring

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Variable window with a need/have counter
**Goal track relevance:** The hardest classic window problem — shrink to the smallest window containing all required characters. Tests counter management precisely.
**Dataset:** none

### Goal
Given strings `s` and `t`, return the smallest substring of `s` that contains all characters of `t` (with multiplicity), or `""` if none exists.

### Constraints / I/O
- Input: `s: str`, `t: str`
- Output: `str` minimum window
- Edge cases to consider: `t` longer than `s`, no valid window, duplicate chars in `t`

### Hints
<details><summary>Hint 1</summary>Keep a count of needed characters and a "have" count. Expand right until all needs are met, then shrink left while still valid.</details>
<details><summary>Hint 2</summary>Track how many distinct character requirements are fully satisfied so you know when the window is valid.</details>

### Acceptance criteria
- [ ] Correct minimum window
- [ ] Handles no-valid-window and duplicate requirements
- [ ] Shrinks only while the window stays valid
- [ ] **States time and space complexity** (target: O(n) time)
