# Python First Principles — Beginner to Intermediate Curriculum

This is the canonical curriculum map for AIcademy. Every problem generated, every concept explained, and every competency tracked maps back to a Stage here. The AI uses this file to sequence learning for each learner based on their profile.

The key insight: most beginners fail not because the problems are too hard, but because **they never built the right mental models**. This curriculum is organized around mental models first, syntax second.

---

## Stage 0 — The Mental Model Layer

> **Why this exists:** Most tutorials start with syntax ("here's how to write a variable"). We start with *why* — what is the computer actually doing? Without this foundation, syntax is just memorization. With it, everything else clicks.

**Concepts:**
- What is a computer? (hardware executes instructions; RAM stores data temporarily; disk stores data permanently)
- What is a program? (a list of instructions the computer follows, top to bottom, unless told to branch or repeat)
- What is a variable? (a name that points to a value stored in memory — like a labeled box)
- What is a function? (a named, reusable block of instructions — like a recipe with a name)
- What is an error? (the computer telling you exactly what it expected vs. what it got — learn to read it, not fear it)
- Types of errors beginners hit most: `SyntaxError`, `NameError`, `TypeError`, `IndexError`, `KeyError`

**Goal track anchors:**
- AI Engineer: "Variables in AI systems hold user inputs, model outputs, and configuration — they're everywhere"
- Data Scientist: "Every column in a dataset is a variable; every row is a record"
- Software Engineer: "Programs are just instructions — you write them once, the computer runs them billions of times"

**Problem bank:** `01_problem_banks/python_basics/stage0_mental_models.md`

---

## Stage 1 — Core Building Blocks

> **Why this exists:** These are the atoms of every Python program. You cannot build anything without them.

**Concepts:**
- **Data types** — `int` (whole numbers), `float` (decimals), `str` (text), `bool` (True/False)
  - Why they're different: a computer stores `1` and `"1"` completely differently in memory
  - `type()` — asking Python what something is
- **Variables and assignment** — `x = 5` means "create a box named x and put 5 in it"
- **`print()` and `input()`** — your first feedback loops with the computer
- **Arithmetic operators** — `+`, `-`, `*`, `/`, `//` (floor divide), `%` (remainder), `**` (power)
- **Comparison operators** — `==`, `!=`, `<`, `>`, `<=`, `>=` — always return `True` or `False`
- **Conditional logic** — `if / elif / else` — the computer making decisions based on conditions
  - Nesting conditions
  - Combining conditions with `and`, `or`, `not`

**Common beginner mistakes:**
- `=` vs `==` (assignment vs. comparison)
- Forgetting that `"5" + 5` raises a `TypeError`
- Off-by-one thinking in comparisons (`>` vs `>=`)

**Problem bank:** `01_problem_banks/python_basics/stage1_building_blocks.md`

---

## Stage 2 — Collections and Repetition

> **Why this exists:** Real programs don't work with one value at a time — they work with groups of values. And they do things repeatedly. These two ideas unlock 80% of practical programming.

**Concepts:**
- **Lists** — ordered, mutable, indexed from 0
  - Creating: `my_list = [1, 2, 3]`
  - Indexing: `my_list[0]`, negative indexing `my_list[-1]`
  - Slicing: `my_list[1:3]`
  - Mutating: `.append()`, `.remove()`, `.pop()`, `.sort()`
  - Length: `len()`
- **Dictionaries** — key/value pairs, unordered, mutable
  - Creating: `person = {"name": "Alex", "age": 25}`
  - Accessing: `person["name"]`, `.get()` (safe access)
  - Adding/updating: `person["city"] = "NYC"`
  - Iterating: `.keys()`, `.values()`, `.items()`
- **`for` loops** — doing something to every item in a collection
  - Loop over a list, a dictionary, a string, a range
  - `enumerate()` — getting index + value at the same time
- **`while` loops** — doing something until a condition becomes False
  - When to use `while` vs `for`
  - `break` and `continue`
- **`range()`** — generating sequences of numbers: `range(5)`, `range(1, 10)`, `range(0, 10, 2)`

**Common beginner mistakes:**
- Mutating a list while iterating over it
- Forgetting that `dict["key"]` raises `KeyError` if the key doesn't exist (use `.get()`)
- Infinite `while` loops (forgetting to update the condition variable)

**Problem bank:** `01_problem_banks/python_basics/stage2_collections_loops.md`

---

## Stage 3 — Functions and Reusability

> **Why this exists:** Copy-pasting code is the beginner's first instinct. Functions are the solution. This is where programs stop being scripts and start being software.

**Concepts:**
- **Defining functions** — `def my_function():` and the indentation rule
- **Parameters vs. arguments** — parameters are the placeholders in the definition; arguments are the actual values you pass
- **`return` vs. `print()`** — the most commonly misunderstood distinction
  - `print()` shows something to you; `return` sends a value back to whoever called the function
  - A function without `return` returns `None`
- **Scope** — why a variable defined inside a function doesn't exist outside it (and why this is a feature, not a bug)
  - Local scope vs. global scope
  - Why global variables are usually a bad idea
- **Default parameters** — `def greet(name, greeting="Hello"):`
- **Calling functions inside functions** — composing behavior

**Common beginner mistakes:**
- Printing instead of returning (then being confused why the result is `None`)
- Assuming a variable from inside a function is accessible outside
- Not understanding that functions don't run until called

**Problem bank:** `01_problem_banks/python_basics/stage3_functions.md`

---

## Stage 4 — Working with Real Data

> **Why this exists:** All three goal tracks (AI Engineer, Data Scientist, Software Engineer) work with real data constantly. This stage bridges pure Python with practical, professional work.

**Concepts:**
- **String methods** — the most useful ones:
  - `.split()` — break a string into a list by a delimiter
  - `.strip()` — remove whitespace from both ends
  - `.join()` — combine a list of strings into one
  - `.lower()`, `.upper()`, `.title()`
  - `.replace()`, `.startswith()`, `.endswith()`, `.contains()`
  - **f-strings** — `f"Hello, {name}! You are {age} years old."`
- **File I/O**
  - `open()`, `read()`, `write()`, `close()`
  - The `with` statement (context manager) — the right way to open files
  - Reading line by line
- **`import` and the standard library**
  - `import os` — working with files and directories
  - `import json` — reading and writing JSON data
  - `import datetime` — working with dates and times
  - `import random` — generating random values
- **Intro to pandas**
  - What pandas is and why it exists
  - Loading a CSV: `pd.read_csv()`
  - Exploring: `.head()`, `.info()`, `.describe()`, `.shape`
  - Filtering rows: `df[df["column"] > value]`
  - Selecting columns: `df["column"]`, `df[["col1", "col2"]]`

**Problem bank:** `01_problem_banks/python_basics/stage4_real_data.md`
**Knowledgebase reference:** `00_knowledgebase/pandas_python_reference.ipynb` (sections 1.1–1.3)

---

## Stage 5 — Intermediate Python

> **Why this exists:** This is where Python stops feeling like homework and starts feeling like a superpower. These patterns are in every professional Python codebase.

**Concepts:**
- **List comprehensions** — `[x * 2 for x in my_list if x > 0]`
  - When to use them vs. a regular loop (readability threshold)
- **Dictionary comprehensions** — `{k: v for k, v in pairs.items()}`
- **`*args` and `**kwargs`** — writing functions that accept any number of arguments
- **Error handling**
  - `try / except / finally` — catching and handling exceptions gracefully
  - Raising your own exceptions with `raise`
  - Specific exception types vs. bare `except`
- **Classes and OOP**
  - Why objects exist: grouping related data + behavior
  - `class MyClass:`, `__init__()`, `self`
  - Instance methods vs. class methods
  - Inheritance: `class Dog(Animal):`
- **Modules**
  - Writing your own module (a `.py` file you import)
  - `if __name__ == "__main__":` — and why it matters
  - `requirements.txt` and `pip install`

**Common intermediate mistakes:**
- List comprehensions that are too complex to read
- Catching `Exception` instead of specific error types
- Treating `self` as magic instead of understanding it's just the first argument

**Problem bank:** `01_problem_banks/python_fundamentals/` (existing) + new files

---

## Stage 6 — Leveling Up (Beginner → Intermediate Crossover)

> **Why this exists:** These are the patterns that separate someone who "knows Python" from someone who writes Python like a professional. Each one unlocks a new category of programs you can build.

**Concepts:**
- **Generators and `yield`**
  - What a generator is: a function that produces values lazily, one at a time
  - Why this matters: memory efficiency for large data (critical in data science and AI)
  - `yield` vs `return`
  - Generator expressions: `(x * 2 for x in range(1000000))`
- **Decorators**
  - Functions that wrap other functions
  - The `@` syntax
  - Common real-world decorators: `@staticmethod`, `@classmethod`, `@property`, timing decorators, logging decorators
- **Lambda, `map()`, `filter()`**
  - Anonymous functions: `lambda x: x * 2`
  - `map()`: apply a function to every item
  - `filter()`: keep only items that pass a test
  - When to prefer these vs. list comprehensions
- **Recursion**
  - A function that calls itself
  - Base case (the stop condition) — always required
  - Classic examples: factorial, Fibonacci, tree traversal
  - The call stack: what's actually happening in memory
- **Working with APIs via `requests`**
  - What an API is: a door into someone else's software
  - `requests.get()`, `requests.post()`
  - Reading JSON responses
  - Headers, authentication, error codes (200, 400, 401, 404, 500)
- **Testing with `pytest`**
  - Why tests exist: confidence that your code works, forever
  - Writing a test function: `def test_my_function():`
  - `assert` statements
  - Running: `pytest` in the terminal

**Problem bank:** `01_problem_banks/python_fundamentals/generators.md` (existing) + `decorators.md` (existing)

---

## Roadmap Branching Points

After Stage 6, learners branch into their goal track:

### → AI Engineer Track
See `09_roadmaps/ai_engineer.md`
- LLMs and how they work
- Calling OpenAI / Anthropic APIs
- Prompt engineering
- Embeddings and vector search
- Retrieval-Augmented Generation (RAG)
- Building AI agents

### → Data Scientist Track
See `09_roadmaps/data_scientist.md` *(coming soon)*
- Statistics and probability
- Advanced pandas: groupby, merge, window functions
- Visualization: matplotlib, seaborn
- Scikit-learn: train/test split, model evaluation
- Feature engineering

### → Software Engineer Track
See `09_roadmaps/software_engineer.md` *(coming soon)*
- Git workflows: branching, pull requests, merging
- REST APIs with FastAPI
- Databases: SQL and SQLAlchemy
- Docker basics
- System design fundamentals

---

## Time Estimates Per Stage

| Stage | 30 min/day | 1 hr/day | 2 hr/day |
|---|---|---|---|
| Stage 0 | 3 days | 2 days | 1 day |
| Stage 1 | 1 week | 4 days | 2 days |
| Stage 2 | 2 weeks | 1 week | 4 days |
| Stage 3 | 1 week | 4 days | 2 days |
| Stage 4 | 2 weeks | 1 week | 5 days |
| Stage 5 | 3 weeks | 2 weeks | 1 week |
| Stage 6 | 3 weeks | 2 weeks | 1 week |
| **Total** | **~3 months** | **~6 weeks** | **~3 weeks** |

These are estimates. Everyone moves at their own pace — the competency map, not the calendar, determines when you're ready to advance.
