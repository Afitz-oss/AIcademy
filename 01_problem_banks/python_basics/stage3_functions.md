# Stage 3 — Functions and Reusability Problem Bank

**Who this is for:** Beginners who can write loops and use collections.
**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 3

---

## 1. The Return vs. Print Trap

**Difficulty:** beginner
**Stage:** 3
**Pattern / topic:** return vs. print(), debugging mental model
**Goal track relevance:** This confusion causes real bugs in production — especially when calling functions that are supposed to return data to a pipeline or API handler.
**Dataset:** none

### Goal
The following function has a bug. Identify it, explain what's actually happening, and fix it.

```python
def double_it(x):
    print(x * 2)

result = double_it(5)
final = result + 10
print(final)
```

### Constraints / I/O
- Input: The buggy code above
- Output: Fixed code + a plain-English explanation of what was wrong
- Edge cases to consider: What does Python assign to `result` when a function has no `return`?

### Hints
<details><summary>Hint 1</summary>Run it in your head: `double_it(5)` prints `10`. What does it return? What happens when you try to add 10 to that?</details>
<details><summary>Hint 2</summary>A function with no `return` statement returns `None`. Adding `None + 10` raises a `TypeError`.</details>

### Acceptance criteria
- [ ] Identifies the missing `return` as the bug
- [ ] Explains the difference between `print()` and `return`
- [ ] Fixed version runs without error and `final` equals 20

---

## 2. Temperature Converter

**Difficulty:** beginner
**Stage:** 3
**Pattern / topic:** Functions, parameters, return values, arithmetic
**Goal track relevance:** Writing clean, single-purpose conversion functions is a core software engineering skill. You'll write dozens of these in real systems.
**Dataset:** none

### Goal
Write two functions:
1. `celsius_to_fahrenheit(c)` — converts Celsius to Fahrenheit: `F = (C × 9/5) + 32`
2. `fahrenheit_to_celsius(f)` — converts Fahrenheit to Celsius: `C = (F - 32) × 5/9`

Both should return the result rounded to 1 decimal place.

Then write a third function `convert_temperature(value, from_unit)` that calls one of the above based on `from_unit` being `"C"` or `"F"`.

```python
convert_temperature(100, "C")   # → 212.0
convert_temperature(32, "F")    # → 0.0
convert_temperature(37, "C")    # → 98.6
```

### Constraints / I/O
- Input: `value` (float), `from_unit` (str, "C" or "F")
- Output: Converted value as float, rounded to 1 decimal
- Edge cases to consider: What if `from_unit` is something unexpected like `"K"`?

### Hints
<details><summary>Hint 1</summary>Write the two conversion functions first, test them individually, then write the dispatcher function that calls them.</details>
<details><summary>Hint 2</summary>For the invalid unit case, you can raise a `ValueError`: `raise ValueError(f"Unknown unit: {from_unit}")`</details>

### Acceptance criteria
- [ ] `celsius_to_fahrenheit(100)` returns `212.0`
- [ ] `fahrenheit_to_celsius(32)` returns `0.0`
- [ ] `convert_temperature` correctly delegates to the right function
- [ ] Raises an error (or handles gracefully) for invalid unit

---

## 3. Scope Detective

**Difficulty:** easy
**Stage:** 3
**Pattern / topic:** Variable scope — local vs. global
**Goal track relevance:** Scope bugs are common in larger programs. Understanding scope is required before tackling classes, decorators, and closures.
**Dataset:** none

### Goal
Without running the code, predict the output of each snippet. Then explain why.

**Snippet A:**
```python
x = 10

def change_x():
    x = 99
    print(x)

change_x()
print(x)
```

**Snippet B:**
```python
def outer():
    value = "outer"
    def inner():
        print(value)
    inner()

outer()
```

**Snippet C:**
```python
total = 0

def add_to_total(n):
    total = total + n
    return total

add_to_total(5)
```

### Constraints / I/O
- Input: 3 code snippets
- Output: For each — predicted output AND explanation of why
- Edge cases to consider: Snippet C raises an error — what kind?

### Hints
<details><summary>Hint 1</summary>In Python, a variable assigned inside a function is local to that function unless you declare it `global`. The outer `x` is not changed by Snippet A.</details>
<details><summary>Hint 2</summary>Snippet C raises an `UnboundLocalError`. When Python sees `total = total + n`, it marks `total` as a local variable — but then tries to read it before it has a local value.</details>

### Acceptance criteria
- [ ] Correctly predicts Snippet A outputs `99` then `10`
- [ ] Correctly predicts Snippet B outputs `"outer"`
- [ ] Identifies that Snippet C raises an `UnboundLocalError`
- [ ] Explains the local scope concept for at least one snippet
