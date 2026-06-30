# Algorithms — Two Pointers

**Pattern:** Two pointers moving through a sequence (from both ends, or fast/slow).
**Knowledgebase reference:** `00_knowledgebase/algorithms.ipynb` → A-3
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** a sorted array, a pair/triplet search, in-place array manipulation, or removing/partitioning elements without extra space.

---

## 1. Pair Sum in a Sorted Array

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Two pointers from both ends
**Goal track relevance:** The canonical two-pointer move — converging pointers on a sorted array turns an O(n²) brute force into O(n).
**Dataset:** none

### Goal
Given a sorted list of integers and a target, return the indices of two numbers that add up to the target (or `None`). Do it in a single pass without a hash map.

### Constraints / I/O
- Input: sorted `list[int]`, `target: int`
- Output: a tuple of two indices, or `None`
- Edge cases to consider: empty list, no valid pair, duplicates

### Hints
<details><summary>Hint 1</summary>Start one pointer at the left, one at the right. If the sum is too big, move right inward; too small, move left inward.</details>
<details><summary>Hint 2</summary>Because it's sorted, you never need to go back — each pointer only moves one direction.</details>

### Acceptance criteria
- [ ] Correct indices for the example
- [ ] Handles empty list and no-pair cases
- [ ] Single pass, no hash map
- [ ] **States time and space complexity** (target: O(n) time, O(1) space)

---

## 2. Valid Palindrome (alphanumeric only)

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Converging pointers with filtering
**Goal track relevance:** Two pointers plus character filtering — a very common interview variation.
**Dataset:** none

### Goal
Given a string, determine if it's a palindrome considering only alphanumeric characters and ignoring case. Do it in O(1) extra space (don't build a cleaned copy).

### Constraints / I/O
- Input: `str`
- Output: `bool`
- Edge cases to consider: empty string, all non-alphanumeric, mixed case

### Hints
<details><summary>Hint 1</summary>Move a left and right pointer inward, skipping non-alphanumeric chars on each side.</details>
<details><summary>Hint 2</summary>Compare lowercased characters; return False on first mismatch.</details>

### Acceptance criteria
- [ ] Ignores case and non-alphanumeric chars
- [ ] O(1) extra space (no cleaned-string copy)
- [ ] Handles empty/edge inputs
- [ ] **States time and space complexity**

---

## 3. Container With Most Water

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Greedy two pointers
**Goal track relevance:** Requires the insight that you always move the shorter wall inward — a classic "why does this greedy choice work?" problem.
**Dataset:** none

### Goal
Given a list of heights, find two lines that together with the x-axis form a container holding the most water. Return the max area.

### Constraints / I/O
- Input: `list[int]` heights
- Output: `int` max area
- Edge cases to consider: fewer than 2 lines, all equal heights, zeros

### Hints
<details><summary>Hint 1</summary>Area = min(height[l], height[r]) * (r - l). Start wide, move inward.</details>
<details><summary>Hint 2</summary>Always move the pointer at the shorter line — moving the taller one can never increase the area.</details>

### Acceptance criteria
- [ ] Correct max area
- [ ] O(n) single pass (not O(n²) brute force)
- [ ] Can explain *why* moving the shorter line is correct
- [ ] **States time and space complexity** (target: O(n) time, O(1) space)
