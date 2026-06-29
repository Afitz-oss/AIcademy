# Software Engineering — Big O + Complexity Analysis

**Roadmap:** `09_roadmaps/software_engineer.md` → step 1

> **Why this matters:** Big O is the universal language for reasoning about whether code will scale. The Algorithms track makes you *state* complexity; this bank makes you *analyze and design for* it — including at the API and system level.

---

## 1. Analyze the Complexity

**Difficulty:** Beginner
**Stage:** Software Engineering
**Pattern / topic:** Reading time/space complexity from code
**Goal track relevance:** Before you can optimize, you must accurately read the cost of existing code. This is a daily engineering skill in code review.
**Dataset:** none

### Goal
For each of 5 given code snippets (provided by the tutor — single loop, nested loop, halving loop, two sequential loops, nested loop over two different inputs), state the time and space complexity and justify it in one sentence each.

### Constraints / I/O
- Input: 5 code snippets
- Output: Big O + justification for each
- Edge cases to consider: sequential vs. nested loops; loops over different-sized inputs (n vs m)

### Hints
<details><summary>Hint 1</summary>Sequential loops add (O(n) + O(n) = O(n)); nested loops multiply (O(n) · O(n) = O(n²)).</details>
<details><summary>Hint 2</summary>A loop that halves the input each step is O(log n). Two different inputs are O(n·m), not O(n²).</details>

### Acceptance criteria
- [ ] Correct complexity for all 5 snippets
- [ ] Correct justification for each
- [ ] Distinguishes sequential from nested
- [ ] Distinguishes n from m for different inputs

---

## 2. Optimize a Slow Function

**Difficulty:** Intermediate
**Stage:** Software Engineering
**Pattern / topic:** Reducing complexity, space/time tradeoffs
**Goal track relevance:** The core optimization move — recognizing an O(n²) approach and trading space for time to reach O(n).
**Dataset:** none

### Goal
Given a function that finds duplicates in a list using a nested loop (O(n²)), rewrite it to O(n) using a set. State both complexities and the tradeoff you made.

### Constraints / I/O
- Input: a list possibly containing duplicates
- Output: the duplicates, found in O(n)
- Edge cases to consider: no duplicates, all duplicates, empty list

### Hints
<details><summary>Hint 1</summary>A set gives O(1) membership checks — track what you've seen as you go.</details>
<details><summary>Hint 2</summary>The tradeoff: you use O(n) extra space to save time. Name it explicitly.</details>

### Acceptance criteria
- [ ] Correct duplicates
- [ ] O(n) time using a set
- [ ] Both before/after complexities stated
- [ ] The space/time tradeoff articulated

---

## 3. Complexity at the System Level

**Difficulty:** Advanced
**Stage:** Software Engineering
**Pattern / topic:** Applying Big O to real systems (queries, APIs)
**Goal track relevance:** Big O isn't just for algorithms — an O(n) database call inside an O(n) loop is an O(n²) API endpoint (the "N+1 query" problem). This is where complexity thinking pays off in production.
**Dataset:** none

### Goal
Given pseudocode for an API endpoint that loops over N users and makes one database query per user to fetch their orders, identify the complexity, name the anti-pattern, and rewrite it to reduce the number of queries. Then estimate how response time grows as N goes from 10 to 10,000.

### Constraints / I/O
- Input: endpoint pseudocode with a per-item query
- Output: complexity analysis, the anti-pattern name, an optimized rewrite, a scaling estimate
- Edge cases to consider: very large N; query latency dominating

### Hints
<details><summary>Hint 1</summary>This is the "N+1 query" problem. The fix is a single batched query (e.g. `WHERE user_id IN (...)`) or a join.</details>
<details><summary>Hint 2</summary>Per-item network/DB calls dominate cost — reducing query *count*, not just CPU work, is the real win.</details>

### Acceptance criteria
- [ ] Correct complexity of the naive version
- [ ] Names the N+1 query anti-pattern
- [ ] Rewrite reduces query count to O(1) round-trips
- [ ] Reasoned estimate of how latency scales with N
