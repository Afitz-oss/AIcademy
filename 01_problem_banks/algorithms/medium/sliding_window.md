# Algorithms — Sliding Window (Medium)

**Pattern:** Sliding Window
**When to use:** Contiguous subarray/substring problems. When brute force is O(n²) and you need O(n).
**Core idea:** Maintain a window with two pointers (left, right). Expand right; shrink left when a condition is violated.
**Knowledgebase reference:** `07_planning/strength_schedule.md` → Appendix A → Sliding Window

---

## 1. Longest Substring Without Repeating Characters

**Difficulty:** medium
**Pattern / topic:** Sliding window + hash set
**Goal track relevance:** String processing at scale (processing millions of log entries, tokenizing text for ML) requires O(n) solutions. Brute force won't cut it.
**Dataset:** none

### Goal
Write `length_of_longest_substring(s)` that returns the length of the longest substring without repeating characters.

```python
length_of_longest_substring("abcabcbb")  # → 3  ("abc")
length_of_longest_substring("bbbbb")     # → 1  ("b")
length_of_longest_substring("pwwkew")    # → 3  ("wke")
length_of_longest_substring("")          # → 0
```

### Constraints / I/O
- Input: A string `s`
- Output: An integer — the length of the longest valid substring
- Edge cases to consider: Empty string, all same character, all unique characters

### Hints
<details><summary>Hint 1</summary>Brute force: check every substring. O(n²) or worse. Instead: use two pointers (left, right) that define a window. Move right forward; when you hit a repeat, move left forward to shrink the window until the repeat is gone.</details>
<details><summary>Hint 2</summary>Use a set to track characters in the current window. When `s[right]` is already in the set, remove `s[left]` from the set and advance left. Update `max_length = max(max_length, right - left + 1)`.</details>

### Acceptance criteria
- [ ] Returns correct result for all 4 examples
- [ ] O(n) time complexity (not brute force)
- [ ] Uses a set or dict for O(1) character lookup
- [ ] Can explain the window expansion and shrinking logic

---

## 2. Maximum Average Subarray

**Difficulty:** medium
**Pattern / topic:** Fixed-size sliding window
**Goal track relevance:** Fixed-window metrics (rolling average income per 7 days, average model latency per 100 requests) are the bread and butter of data monitoring dashboards.
**Dataset:** none

### Goal
Write `max_average_subarray(nums, k)` that finds the contiguous subarray of length exactly `k` with the maximum average. Return the maximum average as a float.

```python
max_average_subarray([1, 12, -5, -6, 50, 3], 4)  # → 12.75  ([-5, -6, 50, 3] / 4)
max_average_subarray([5], 1)  # → 5.0
```

### Constraints / I/O
- Input: `nums` (list of int/float), `k` (int, 1 ≤ k ≤ len(nums))
- Output: A float — the maximum average
- Edge cases to consider: k equals len(nums), k = 1, negative numbers

### Hints
<details><summary>Hint 1</summary>Don't recalculate the sum from scratch each time. Compute the sum of the first window, then slide: add the new element, subtract the old one.</details>
<details><summary>Hint 2</summary>After sliding, track `max_sum`. Return `max_sum / k` at the end.</details>

### Acceptance criteria
- [ ] Correct result for both examples
- [ ] O(n) time — uses sliding, not recomputing
- [ ] Returns a float

---

## 3. Minimum Window Substring

**Difficulty:** hard
**Pattern / topic:** Variable sliding window + frequency map
**Goal track relevance:** This exact pattern (find the smallest window satisfying a constraint) appears in search and information retrieval. It's also a classic hard interview question.
**Dataset:** none

### Goal
Write `min_window(s, t)` that returns the minimum window substring of `s` that contains all characters in `t`. If no such window exists, return `""`.

```python
min_window("ADOBECODEBANC", "ABC")  # → "BANC"
min_window("a", "a")               # → "a"
min_window("a", "aa")              # → ""
```

### Constraints / I/O
- Input: Strings `s` and `t`
- Output: The minimum window string, or `""`
- Edge cases to consider: `t` longer than `s`, characters not in `s`, duplicate chars in `t`

### Hints
<details><summary>Hint 1</summary>Keep two frequency dicts: one for what `t` needs, one for what your current window has. Track a `need` counter — how many distinct characters still need to be satisfied.</details>
<details><summary>Hint 2</summary>Expand right until `need == 0` (window is valid). Then shrink left as far as possible while still valid. Record the window size. Repeat.</details>

### Acceptance criteria
- [ ] Returns correct result for all 3 examples
- [ ] Returns `""` when no valid window exists
- [ ] O(n) time using the two-pointer approach
- [ ] Handles duplicate characters in `t`
