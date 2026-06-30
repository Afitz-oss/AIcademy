# Algorithms — Heap / Priority Queue

**Pattern:** A heap keeps the min (or max) element instantly accessible, with O(log n) insert/remove.
**Knowledgebase reference:** `00_knowledgebase/algorithms.ipynb` → A-7
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** "top K", "K smallest/largest", merging sorted streams, running median, or any repeated "give me the current best" query. In Python, use `heapq` (a min-heap).

---

## 1. K Largest Elements

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Min-heap of size K
**Goal track relevance:** The core top-K technique — maintain a size-K heap instead of sorting everything.
**Dataset:** none

### Goal
Given a list of integers and `k`, return the `k` largest elements. Use a heap of size `k`, not a full sort.

### Constraints / I/O
- Input: `list[int]`, `k: int`
- Output: `list[int]` of the k largest
- Edge cases to consider: k > len, k = 0, duplicates

### Hints
<details><summary>Hint 1</summary>Maintain a min-heap of size k. Push each element; if the heap exceeds k, pop the smallest.</details>
<details><summary>Hint 2</summary>`heapq.heappush` / `heapq.heappop`, or `heapq.nlargest` to compare your result.</details>

### Acceptance criteria
- [ ] Correct k largest
- [ ] Uses a size-k heap (not a full sort)
- [ ] Handles k > len and k = 0
- [ ] **States time and space complexity** (target: O(n log k) time, O(k) space)

---

## 2. Merge K Sorted Lists

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Heap for merging sorted streams
**Goal track relevance:** Merging sorted sources efficiently (log files, database results) is a real systems task. The heap holds one candidate per list.
**Dataset:** none

### Goal
Given `k` sorted lists, merge them into one sorted list using a heap.

### Constraints / I/O
- Input: `list[list[int]]` (each inner list sorted)
- Output: a single sorted `list[int]`
- Edge cases to consider: some empty lists, all empty, a single list

### Hints
<details><summary>Hint 1</summary>Push the first element of each list (with its list index + position) into the heap. Pop the smallest, then push the next element from that same list.</details>
<details><summary>Hint 2</summary>Store tuples `(value, list_index, element_index)` so you know where to pull the next element from.</details>

### Acceptance criteria
- [ ] Correctly merged and sorted
- [ ] Handles empty lists
- [ ] Heap never holds more than k items at once
- [ ] **States time and space complexity** (target: O(N log k), N = total elements)

---

## 3. Find Median from a Data Stream

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Two heaps (max-heap + min-heap)
**Goal track relevance:** The two-heap balancing trick is a famous hard problem — maintain a running median as numbers stream in.
**Dataset:** none

### Goal
Design a class supporting `add_num(n)` and `find_median()` that returns the median of all numbers seen so far, with `add_num` in O(log n) and `find_median` in O(1).

### Constraints / I/O
- Input: a stream of integers via `add_num`
- Output: the current median via `find_median`
- Edge cases to consider: even vs. odd count, negatives, single element

### Hints
<details><summary>Hint 1</summary>Keep a max-heap of the lower half and a min-heap of the upper half. Rebalance so their sizes differ by at most one.</details>
<details><summary>Hint 2</summary>Median is the top of the larger heap, or the average of both tops when sizes are equal. (Python's heapq is min-only — negate values for the max-heap.)</details>

### Acceptance criteria
- [ ] Correct median after each add
- [ ] Handles even and odd counts
- [ ] `add_num` is O(log n), `find_median` is O(1)
- [ ] Heaps stay balanced
- [ ] **States time and space complexity**
