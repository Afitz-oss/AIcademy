# Algorithms Problem Bank — The Top 8 Patterns

LeetCode-style interview preparation organized around the 8 patterns that cover the large majority of coding interview problems. Each pattern has its own file with Beginner / Intermediate / Advanced problems.

**Hard rule:** every problem in this bank requires you to state the **time and space complexity (Big O)** of your solution as an acceptance criterion. Knowing the answer isn't enough — you must know its cost.

---

## The 8 Patterns

| # | Pattern | File | Why it's essential |
|---|---|---|---|
| 1 | Two Pointers | `two_pointers.md` | ~20% of array/string problems |
| 2 | Sliding Window | `sliding_window.md` | Subarray/substring optimization |
| 3 | Binary Search | `binary_search.md` | Anything sorted; O(log n) thinking |
| 4 | BFS / DFS | `bfs_dfs.md` | All tree and graph traversal |
| 5 | Dynamic Programming | `dynamic_programming.md` | Hardest + highest frequency |
| 6 | Backtracking | `backtracking.md` | Subsets, permutations, combinations |
| 7 | Hash Map / Set | `hash_map.md` | Trading space for O(1) lookups |
| 8 | Heap / Priority Queue | `heap.md` | Top-K, scheduling, streaming median |

---

## How to Use This Bank

1. Pick a pattern you haven't `🟢 mastered` in `08_learner_profile/competency_map.md`.
2. Start with the Beginner problem in that file even if you're advanced — build fluency in the pattern's shape.
3. Solve brute-force first, state its Big O, then optimize and state the improved Big O. The *delta* is the lesson.
4. Say "done" in chat for Socratic grading.

## Big O Reference (state one for every solution)

| Notation | Name | Example |
|---|---|---|
| O(1) | Constant | Hash map lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single pass |
| O(n log n) | Linearithmic | Efficient sorting |
| O(n²) | Quadratic | Nested loops over the same array |
| O(2ⁿ) | Exponential | Naive recursion (Fibonacci) |
| O(n!) | Factorial | Generating all permutations |
