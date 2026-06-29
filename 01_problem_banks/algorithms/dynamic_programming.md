# Algorithms — Dynamic Programming

**Pattern:** Break a problem into overlapping subproblems, solve each once, and store the result (memoization or tabulation).
**Big O rule:** state time + space complexity for every solution.

> **When to reach for it:** counting ways, optimizing (max/min) over choices, or any problem with overlapping subproblems and optimal substructure.

---

## 1. Climbing Stairs

**Difficulty:** Beginner
**Stage:** Algorithms
**Pattern / topic:** 1D DP, Fibonacci-shaped recurrence
**Goal track relevance:** The gateway DP problem. Shows how memoization turns exponential recursion into linear time.
**Dataset:** none

### Goal
You can climb 1 or 2 steps at a time. Given `n` stairs, return the number of distinct ways to reach the top. Solve it two ways: naive recursion, then with memoization or a bottom-up array. State the Big O of both.

### Constraints / I/O
- Input: `n: int`
- Output: `int` number of ways
- Edge cases to consider: n = 0, n = 1, large n (recursion depth)

### Hints
<details><summary>Hint 1</summary>ways(n) = ways(n-1) + ways(n-2). Recognize the Fibonacci recurrence.</details>
<details><summary>Hint 2</summary>Bottom-up: keep two running values instead of an array for O(1) space.</details>

### Acceptance criteria
- [ ] Correct count
- [ ] Both naive and optimized versions implemented
- [ ] **States Big O of BOTH** (naive O(2ⁿ) → optimized O(n) time, O(1) space possible)

---

## 2. Coin Change (minimum coins)

**Difficulty:** Intermediate
**Stage:** Algorithms
**Pattern / topic:** Unbounded knapsack-style DP
**Goal track relevance:** A true optimization DP — minimize coins for an amount. Teaches building a DP table over a value axis.
**Dataset:** none

### Goal
Given coin denominations and a target amount, return the minimum number of coins needed to make the amount, or `-1` if impossible.

### Constraints / I/O
- Input: `coins: list[int]`, `amount: int`
- Output: `int` min coins or `-1`
- Edge cases to consider: amount = 0, no solution, single coin

### Hints
<details><summary>Hint 1</summary>`dp[a]` = min coins to make amount `a`. Initialize to infinity, `dp[0] = 0`.</details>
<details><summary>Hint 2</summary>For each amount, try each coin: `dp[a] = min(dp[a], dp[a - coin] + 1)`.</details>

### Acceptance criteria
- [ ] Correct minimum (or -1)
- [ ] Handles amount = 0 and impossible cases
- [ ] Uses a DP table, not brute-force recursion
- [ ] **States time and space complexity** (target: O(amount · coins) time)

---

## 3. Longest Common Subsequence

**Difficulty:** Advanced
**Stage:** Algorithms
**Pattern / topic:** 2D DP over two sequences
**Goal track relevance:** The template for diffing, DNA alignment, and edit distance. 2D DP tables are a major interview skill.
**Dataset:** none

### Goal
Given two strings, return the length of their longest common subsequence (characters in order, not necessarily contiguous).

### Constraints / I/O
- Input: `text1: str`, `text2: str`
- Output: `int` LCS length
- Edge cases to consider: empty string, no common chars, identical strings

### Hints
<details><summary>Hint 1</summary>`dp[i][j]` = LCS of the first i chars of text1 and first j of text2.</details>
<details><summary>Hint 2</summary>If chars match: `dp[i][j] = dp[i-1][j-1] + 1`; else `max(dp[i-1][j], dp[i][j-1])`.</details>

### Acceptance criteria
- [ ] Correct LCS length
- [ ] Handles empty strings
- [ ] Uses a 2D DP table
- [ ] Can explain the recurrence
- [ ] **States time and space complexity** (target: O(m·n) time, O(m·n) space)
