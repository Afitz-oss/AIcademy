# Software Engineer Track — Roadmap

> **Prerequisite:** Complete Stages 0–6 of `python_first_principles.md`. You need classes, error handling, and modules before this track makes sense.

This track takes you from "my code works" to "my code is clean, tested, typed, and maintainable by a team." The emphasis is on the craft and the patterns that separate scripts from software.

**Guiding principle:** working code is the floor, not the ceiling. This track is about everything that happens after the code runs: is it readable, testable, efficient, and designed to change?

---

## The Sequence

Each numbered item maps to a problem bank in `01_problem_banks/software_engineering/`.

### 1. Big O Notation + Complexity Analysis
**File:** `big_o_complexity.md`
- Time and space complexity, common classes (O(1) → O(n!))
- Analyzing your own code; choosing data structures by complexity
- **Why:** the universal language for reasoning about whether code will scale.
- **Note:** every Algorithms-track problem also requires stating Big O. This bank goes deeper on *analysis and design* — API latency, query complexity, system-level cost.

### 2. Type Hints + Mypy
**File:** `type_hints_mypy.md`
- `Optional`, `Union`, `list[T]`, `dict[K, V]`, `TypedDict`, `Protocol`
- Running `mypy`, fixing type errors
- **Why:** types make code self-documenting and catch bugs before runtime. Required for Pydantic/FastAPI/LangGraph.

### 3. Testing with pytest
**File:** `testing_pytest.md`
- Test functions, `assert`, fixtures, parametrization
- Mocking, integration vs. unit tests
- Tests live in `06_tests/`, mirroring `05_solutions/`
- **Why:** tested code is code you can change without fear.

### 4. Clean Code + Design Patterns
**File:** `design_patterns_solid.md`
- SOLID principles
- Common patterns: Factory, Strategy, Observer, Adapter, Singleton
- Refactoring smells into patterns
- **Why:** patterns are shared vocabulary for designing code that's easy to change.

### 5. API Design
**File:** `api_design.md`
- REST conventions, resource modeling, versioning
- Status codes, authentication patterns, pagination
- Designing request/response contracts
- **Why:** almost every backend job is, at its core, designing and building APIs.

### 6. Async Programming
**File:** `async_programming.md`
- `asyncio`, `async`/`await`, concurrent I/O
- Background tasks, gathering concurrent calls
- **Why:** FastAPI and most modern Python I/O is async. Required to use them well.

### 7. Logging + Error Handling Patterns
**File:** `logging_error_handling.md`
- The `logging` module, log levels, structured logging
- Custom exception hierarchies, retry decorators
- **Why:** production code that fails silently is worse than code that crashes loudly.

### 8. Database Basics
**File:** `database_basics.md`
- SQL queries (read-focused), schema design
- SQLAlchemy ORM patterns
- **Why:** nearly every backend system has a database behind it.

---

## On "Design" Problems

This track covers two flavors of design:
- **API design** (item 5) — how to structure endpoints, contracts, and conventions
- **Code/pattern design** (item 4) — SOLID and design patterns at the code level

System design (designing Twitter, a URL shortener) is reserved for **Advanced** problems only, since it requires significant background. The tutor introduces it once the items above are demonstrated.

---

## Difficulty Spread

Every problem bank contains Beginner / Intermediate / Advanced problems (see the Difficulty Standard in `AGENTS.md`).
