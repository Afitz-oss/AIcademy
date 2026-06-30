# Algorithms — BFS / DFS (Trees & Graphs)

**Pattern:** Systematic traversal — breadth-first (queue, level by level) or depth-first (stack/recursion, branch by branch).
**Knowledgebase reference:** `00_knowledgebase/algorithms.ipynb` → A-6
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** trees, graphs, grids, connected components, shortest path in unweighted graphs, level-order processing.

---

## 1. Binary Tree Level-Order Traversal (BFS)

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** BFS with a queue
**Goal track relevance:** The canonical BFS — process a tree level by level using a queue. The template generalizes to grids and graphs.
**Dataset:** none

### Goal
Given a binary tree, return its node values grouped by level (a list of lists).

### Constraints / I/O
- Input: a binary tree root (define a simple `Node` class)
- Output: `list[list[int]]` by level
- Edge cases to consider: empty tree, single node, skewed tree

### Hints
<details><summary>Hint 1</summary>Use a `collections.deque`. Process one full level at a time by recording the queue length before the inner loop.</details>
<details><summary>Hint 2</summary>For each node popped, enqueue its children.</details>

### Acceptance criteria
- [ ] Correct level grouping
- [ ] Handles empty/single-node trees
- [ ] Uses a queue (deque), not recursion
- [ ] **States time and space complexity** (target: O(n) time, O(n) space)

---

## 2. Number of Islands (DFS on a grid)

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** DFS / flood fill, connected components
**Goal track relevance:** Grid DFS is one of the most common interview shapes — counting connected regions.
**Dataset:** none

### Goal
Given a 2D grid of `"1"` (land) and `"0"` (water), count the number of islands (land cells connected horizontally/vertically).

### Constraints / I/O
- Input: `list[list[str]]`
- Output: `int` island count
- Edge cases to consider: empty grid, all water, all land, single cell

### Hints
<details><summary>Hint 1</summary>Scan every cell. When you hit unvisited land, increment the count and DFS to sink the whole island.</details>
<details><summary>Hint 2</summary>Mark visited cells (flip to "0" or use a visited set) to avoid recounting.</details>

### Acceptance criteria
- [ ] Correct island count
- [ ] Marks visited cells (no double counting)
- [ ] Handles empty/all-water/all-land
- [ ] **States time and space complexity** (target: O(rows·cols) time)

---

## 3. Course Schedule (cycle detection in a graph)

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** Topological sort / cycle detection
**Goal track relevance:** Dependency resolution (build systems, package managers, task scheduling) is graph cycle detection. A very practical advanced pattern.
**Dataset:** none

### Goal
Given a number of courses and a list of prerequisite pairs `[a, b]` (take b before a), determine whether it's possible to finish all courses (i.e., the dependency graph has no cycle).

### Constraints / I/O
- Input: `num_courses: int`, `prereqs: list[list[int]]`
- Output: `bool`
- Edge cases to consider: no prerequisites, self-dependency, disconnected components

### Hints
<details><summary>Hint 1</summary>Build an adjacency list. Use DFS with three states (unvisited/visiting/done) — finding a "visiting" node again means a cycle. Or use Kahn's algorithm (BFS on in-degrees).</details>
<details><summary>Hint 2</summary>A cycle anywhere means it's impossible.</details>

### Acceptance criteria
- [ ] Correctly detects cycles
- [ ] Handles disconnected graphs and self-loops
- [ ] Uses topological ordering or 3-state DFS
- [ ] **States time and space complexity** (target: O(V + E))
