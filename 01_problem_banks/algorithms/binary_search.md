# Algorithms — Binary Search

**Pattern:** Repeatedly halving a search space to find a target or boundary in O(log n).
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** sorted data, or any problem where you can ask a yes/no question that's monotonic ("is this value feasible?").

---

## 1. Classic Binary Search

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Standard binary search
**Goal track relevance:** The foundation. Getting the loop bounds and midpoint right without off-by-one bugs is the real skill.
**Dataset:** none

### Goal
Given a sorted list and a target, return the index of the target or `-1` if absent. Iterative, no recursion.

### Constraints / I/O
- Input: sorted `list[int]`, `target: int`
- Output: index or `-1`
- Edge cases to consider: empty list, target smaller/larger than all, single element

### Hints
<details><summary>Hint 1</summary>`low, high = 0, len(arr) - 1`; loop while `low <= high`; `mid = (low + high) // 2`.</details>
<details><summary>Hint 2</summary>Decide carefully whether to use `high = mid - 1` vs `high = mid` — consistency prevents infinite loops.</details>

### Acceptance criteria
- [ ] Correct index or -1
- [ ] Handles empty and single-element lists
- [ ] No off-by-one / infinite loop
- [ ] **States time and space complexity** (target: O(log n) time, O(1) space)

---

## 2. Find First and Last Position

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Boundary binary search (leftmost/rightmost)
**Goal track relevance:** Real binary search is usually about *boundaries*, not exact hits. This teaches the lower/upper-bound variants.
**Dataset:** none

### Goal
Given a sorted list with possible duplicates and a target, return the first and last indices of the target as a tuple, or `(-1, -1)`.

### Constraints / I/O
- Input: sorted `list[int]` with duplicates, `target: int`
- Output: `(first, last)` or `(-1, -1)`
- Edge cases to consider: target appears once, fills the whole array, absent

### Hints
<details><summary>Hint 1</summary>Run binary search twice — once biased left to find the first, once biased right for the last.</details>
<details><summary>Hint 2</summary>When you find the target, don't stop — keep searching the side you want the boundary on.</details>

### Acceptance criteria
- [ ] Correct first and last indices
- [ ] Handles duplicates and absence
- [ ] Two O(log n) searches (not a linear scan after finding one)
- [ ] **States time and space complexity** (target: O(log n) time)

---

## 3. Binary Search on the Answer — Koko Eating Bananas

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Binary search over a value range (not an index)
**Goal track relevance:** The advanced mental leap — binary searching over *possible answers* using a feasibility check. Appears constantly in hard problems.
**Dataset:** none

### Goal
Given piles of bananas and `h` hours, find the minimum integer eating speed `k` such that all bananas can be eaten within `h` hours (each hour Koko eats up to `k` from one pile).

### Constraints / I/O
- Input: `piles: list[int]`, `h: int`
- Output: minimum feasible `k`
- Edge cases to consider: `h` equals number of piles, one giant pile, `h` very large

### Hints
<details><summary>Hint 1</summary>The answer lives between 1 and max(piles). Binary search that range.</details>
<details><summary>Hint 2</summary>Write a `hours_needed(k)` feasibility function; it's monotonic in k, which is what makes binary search valid.</details>

### Acceptance criteria
- [ ] Correct minimum speed
- [ ] Uses a feasibility check inside binary search
- [ ] Can explain why the feasibility function is monotonic
- [ ] **States time and space complexity** (target: O(n log(max pile)))
