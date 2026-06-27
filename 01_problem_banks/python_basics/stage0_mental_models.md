# Stage 0 — Mental Models Problem Bank

**Who this is for:** Complete beginners. No prior coding experience needed.
**Goal:** Build the right mental model before writing a single line of code.
**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 0

---

## 1. The Labeled Box

**Difficulty:** beginner
**Stage:** 0
**Pattern / topic:** Variables and memory mental model
**Goal track relevance:** In AI systems, every piece of data — a user's message, a model's response, a temperature setting — is stored in a variable. Understanding this is foundational to all programming.
**Dataset:** none

### Goal
Without writing any code, explain in your own words: what happens in the computer's memory when Python runs the line `name = "Jordan"`?

### Constraints / I/O
- Input: The line of code `name = "Jordan"`
- Output: A plain-English explanation (2–3 sentences) describing what the computer does
- Consider: Where does `"Jordan"` live? What does `name` refer to?

### Hints
<details><summary>Hint 1</summary>Think of RAM as a giant whiteboard with millions of labeled boxes. Assignment (`=`) does two things at once.</details>
<details><summary>Hint 2</summary>The variable name and the value are two separate things. One is a label; the other is what's inside the box.</details>

### Acceptance criteria
- [ ] Mentions that the value is stored somewhere in memory (RAM)
- [ ] Explains that `name` is a label or reference pointing to that location
- [ ] Recognizes that `=` is assignment, not equality

---

## 2. What Type Is It?

**Difficulty:** beginner
**Stage:** 0
**Pattern / topic:** Data types — identifying int, float, str, bool
**Goal track relevance:** Every AI API call returns typed data (strings, numbers, booleans). Mishandling types is one of the most common bugs in production AI systems.
**Dataset:** none

### Goal
For each of the following values, identify the data type (`int`, `float`, `str`, or `bool`) and explain why:

```
42
3.14
"hello"
True
"42"
0
False
"True"
```

### Constraints / I/O
- Input: The 8 values above
- Output: A list pairing each value with its type and a one-sentence explanation
- Edge cases to consider: `"42"` vs `42` — are they the same type? What about `0` and `False`?

### Hints
<details><summary>Hint 1</summary>Quotes always make something a string — even if the content looks like a number.</details>
<details><summary>Hint 2</summary>`0` is an integer. `False` is a boolean. But they behave the same in some contexts — this is called "truthiness."</details>

### Acceptance criteria
- [ ] Correctly identifies all 8 types
- [ ] Distinguishes `"42"` (str) from `42` (int)
- [ ] Distinguishes `"True"` (str) from `True` (bool)

---

## 3. Reading the Error

**Difficulty:** beginner
**Stage:** 0
**Pattern / topic:** Reading and interpreting error messages
**Goal track relevance:** Professional engineers spend as much time debugging as building. The faster you can read an error, the faster you can fix it — in any language or framework.
**Dataset:** none

### Goal
Read each error message below and answer: (a) What type of error is it? (b) What caused it? (c) How would you fix it?

**Error 1:**
```
NameError: name 'username' is not defined
```

**Error 2:**
```
TypeError: can only concatenate str (not "int") to str
```

**Error 3:**
```
  File "script.py", line 4
    print("hello"
                 ^
SyntaxError: '(' was never closed
```

### Constraints / I/O
- Input: The 3 error messages above
- Output: For each: error type, cause, fix
- Edge cases to consider: What's the difference between a NameError and a TypeError?

### Hints
<details><summary>Hint 1</summary>The error type name almost always describes the problem. "Name" error = something about a name. "Type" error = something about types.</details>
<details><summary>Hint 2</summary>For Error 2: You can't add a string and a number directly. One of them needs to be converted.</details>

### Acceptance criteria
- [ ] Correctly identifies all 3 error types
- [ ] Provides a plausible cause for each
- [ ] Proposes a correct fix for each
