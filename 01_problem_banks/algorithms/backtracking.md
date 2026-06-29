# Algorithms — Backtracking

**Pattern:** Build candidates incrementally, abandon ("backtrack") a path as soon as it can't lead to a valid solution.
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** generate all subsets/permutations/combinations, or constraint-satisfaction problems (N-Queens, Sudoku, word search).

---

## 1. Subsets (Power Set)

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** Include/exclude recursion
**Goal track relevance:** The simplest backtracking shape — at each element, choose to include it or not. The template for all subset problems.
**Dataset:** none

### Goal
Given a list of distinct integers, return all possible subsets (the power set).

### Constraints / I/O
- Input: `list[int]` (distinct)
- Output: `list[list[int]]` of all subsets
- Edge cases to consider: empty list (returns `[[]]`), single element

### Hints
<details><summary>Hint 1</summary>Recurse with an index and a current path. At each index, branch: include the element, then exclude it.</details>
<details><summary>Hint 2</summary>When the index reaches the end, append a copy of the current path.</details>

### Acceptance criteria
- [ ] All 2ⁿ subsets generated
- [ ] Includes the empty subset
- [ ] Appends copies (not references) of the path
- [ ] **States time and space complexity** (target: O(n · 2ⁿ))

---

## 2. Permutations

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Backtracking with a used-set
**Goal track relevance:** Generating orderings — teaches managing "what's already used" state and undoing choices.
**Dataset:** none

### Goal
Given a list of distinct integers, return all possible permutations.

### Constraints / I/O
- Input: `list[int]` (distinct)
- Output: `list[list[int]]` of all permutations
- Edge cases to consider: empty list, single element

### Hints
<details><summary>Hint 1</summary>Track which elements are used. Add an unused element, recurse, then remove it (the backtrack step).</details>
<details><summary>Hint 2</summary>The "undo" after recursing is what makes it backtracking — restore state before trying the next choice.</details>

### Acceptance criteria
- [ ] All n! permutations generated
- [ ] Correctly undoes choices on backtrack
- [ ] Handles empty/single input
- [ ] **States time and space complexity** (target: O(n · n!))

---

## 3. Word Search (grid backtracking)

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** DFS + backtracking with pruning
**Goal track relevance:** Combines grid DFS with backtracking and pruning — a hard, very common interview problem.
**Dataset:** none

### Goal
Given a 2D board of characters and a word, return whether the word exists in the grid by connecting horizontally/vertically adjacent cells, using each cell at most once.

### Constraints / I/O
- Input: `board: list[list[str]]`, `word: str`
- Output: `bool`
- Edge cases to consider: word longer than the board, single cell, repeated letters

### Hints
<details><summary>Hint 1</summary>From each cell, DFS matching the next character. Mark the cell used during the path, then unmark on backtrack.</details>
<details><summary>Hint 2</summary>Prune immediately when the current cell doesn't match the expected character.</details>

### Acceptance criteria
- [ ] Correct found/not-found result
- [ ] Each cell used at most once per path (marked and unmarked)
- [ ] Prunes mismatches early
- [ ] **States time and space complexity** (target: O(rows·cols·4^len(word)))
