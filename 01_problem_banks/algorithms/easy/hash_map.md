# Algorithms — Hash Map (Easy)

**Pattern:** Hash Map / Dictionary counting
**When to use:** Frequency counting, existence checking, grouping, O(1) lookups
**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 2 (Dictionaries)

---

## 1. Two Sum

**Difficulty:** easy
**Pattern / topic:** Hash map — complement lookup
**Goal track relevance:** Hash map problems are the most common interview problem pattern. If you can explain *why* a hash map gives O(1) lookup, you sound like an engineer.
**Dataset:** none

### Goal
Given a list of integers `nums` and a target integer `target`, return the indices of the two numbers that add up to the target. You may assume exactly one solution exists.

```python
two_sum([2, 7, 11, 15], 9)   # → [0, 1]  (2 + 7 = 9)
two_sum([3, 2, 4], 6)        # → [1, 2]  (2 + 4 = 6)
two_sum([3, 3], 6)           # → [0, 1]
```

### Constraints / I/O
- Input: `nums` (list of int), `target` (int)
- Output: A list with 2 indices `[i, j]` where `nums[i] + nums[j] == target`
- Edge cases to consider: Can the same element be used twice? (No.) What if the two numbers are the same value at different indices?

### Hints
<details><summary>Hint 1</summary>Brute force: two nested loops, check every pair. This is O(n²) — correct but slow. Can you do it in one pass?</details>
<details><summary>Hint 2</summary>Hash map approach: as you iterate, for each number ask "have I already seen the number I need to pair with this?" Store each number and its index in a dict. The complement of `nums[i]` is `target - nums[i]`.</details>

### Acceptance criteria
- [ ] Returns correct indices for all 3 examples
- [ ] Does not use the same element twice
- [ ] Can explain the O(n) hash map approach (not just brute force)

---

## 2. Valid Anagram

**Difficulty:** easy
**Pattern / topic:** Hash map — character frequency comparison
**Goal track relevance:** String frequency analysis is used in NLP, tokenization, and log analysis. The pattern here (count → compare) is universally applicable.
**Dataset:** none

### Goal
Write `is_anagram(s, t)` that returns `True` if `t` is an anagram of `s` (same characters, same counts, different order), `False` otherwise.

```python
is_anagram("anagram", "nagaram")  # → True
is_anagram("rat", "car")          # → False
is_anagram("", "")                # → True
```

### Constraints / I/O
- Input: Two strings `s` and `t`
- Output: Boolean
- Edge cases to consider: Different lengths? Empty strings? Case sensitivity?

### Hints
<details><summary>Hint 1</summary>If two strings are anagrams, they have the same character frequencies. Build a frequency dict for each and compare them.</details>
<details><summary>Hint 2</summary>Shortcut: `sorted(s) == sorted(t)` works but is O(n log n). The hash map approach is O(n).</details>

### Acceptance criteria
- [ ] Returns correct result for all 3 examples
- [ ] Returns `False` for strings of different lengths
- [ ] Handles empty strings

---

## 3. First Unique Character

**Difficulty:** easy
**Pattern / topic:** Hash map — frequency then scan
**Goal track relevance:** Two-pass hash map patterns appear in stream processing and log parsing — scan once to count, scan again to find what you need.
**Dataset:** none

### Goal
Write `first_unique_char(s)` that returns the index of the first non-repeating character in a string. If none exists, return `-1`.

```python
first_unique_char("leetcode")  # → 0  ('l' appears once)
first_unique_char("loveleetcode")  # → 2  ('v' appears once)
first_unique_char("aabb")      # → -1
```

### Constraints / I/O
- Input: A string `s`
- Output: An integer index, or -1
- Edge cases to consider: Empty string, all characters repeat, single character

### Hints
<details><summary>Hint 1</summary>Two passes: first pass builds a frequency dict. Second pass finds the first character with count == 1.</details>
<details><summary>Hint 2</summary>Use `enumerate(s)` in the second pass to get both the index and character.</details>

### Acceptance criteria
- [ ] Correct result for all 3 examples
- [ ] Returns -1 when no unique character exists
- [ ] Returns -1 for empty string
- [ ] Uses a two-pass approach (or explains alternative)
