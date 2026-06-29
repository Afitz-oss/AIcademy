# Algorithms — Hash Map / Set

**Pattern:** Trade space for time — use a dict/set for O(1) lookups instead of repeated scans.
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** "have I seen this before?", counting frequencies, grouping, or turning an O(n²) search into O(n).

---

## 1. Two Sum

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Hash map lookup
**Goal track relevance:** The most famous interview problem. The hash-map insight — store complements as you go — converts O(n²) to O(n).
**Dataset:** none

### Goal
Given a list of integers and a target, return the indices of the two numbers that add to the target. Assume exactly one solution. (Unlike the two-pointers version, the input is **not** sorted.)

### Constraints / I/O
- Input: `list[int]` (unsorted), `target: int`
- Output: tuple of two indices
- Edge cases to consider: negatives, duplicates, the same element not reused

### Hints
<details><summary>Hint 1</summary>As you iterate, check if `target - num` is already in your map. If yes, you found the pair.</details>
<details><summary>Hint 2</summary>Store value → index as you go, so the complement check is O(1).</details>

### Acceptance criteria
- [ ] Correct indices
- [ ] Single pass with a hash map
- [ ] Handles negatives and duplicates
- [ ] **States time and space complexity** (target: O(n) time, O(n) space)

---

## 2. Group Anagrams

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Hash map with computed keys
**Goal track relevance:** Grouping by a canonical key is a workhorse pattern — the key design is the lesson.
**Dataset:** none

### Goal
Given a list of strings, group the anagrams together. Return a list of groups.

### Constraints / I/O
- Input: `list[str]`
- Output: `list[list[str]]` grouped anagrams
- Edge cases to consider: empty strings, single string, no anagrams

### Hints
<details><summary>Hint 1</summary>Two words are anagrams iff their sorted letters match — use the sorted string as a dict key.</details>
<details><summary>Hint 2</summary>A character-count tuple also works as a key and avoids the sort.</details>

### Acceptance criteria
- [ ] Anagrams correctly grouped
- [ ] Handles empty/single inputs
- [ ] Uses a hash map keyed by a canonical form
- [ ] **States time and space complexity** (note the tradeoff between sort-key O(n·k log k) and count-key O(n·k))

---

## 3. Longest Consecutive Sequence

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Hash set with O(n) sequence detection
**Goal track relevance:** Achieving O(n) here (instead of sorting to O(n log n)) requires a clever set insight — a classic "can you beat the sort?" problem.
**Dataset:** none

### Goal
Given an unsorted list of integers, return the length of the longest run of consecutive integers. Must run in O(n) — no sorting.

### Constraints / I/O
- Input: `list[int]`
- Output: `int` longest consecutive run length
- Edge cases to consider: empty list, duplicates, negatives

### Hints
<details><summary>Hint 1</summary>Put everything in a set. Only start counting a run from a number whose predecessor (n-1) is NOT in the set.</details>
<details><summary>Hint 2</summary>That "only start at run beginnings" rule is what keeps it O(n) total.</details>

### Acceptance criteria
- [ ] Correct longest run
- [ ] O(n) — no sorting
- [ ] Handles duplicates, negatives, empty
- [ ] Can explain why it's O(n) despite the inner while loop
- [ ] **States time and space complexity** (target: O(n) time, O(n) space)
