# AI Engineering — Pydantic + Structured Outputs Problem Bank

**Who this is for:** Learners on the AI Engineer track who have completed raw API calls (`api_basics.md`).
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-3 (prompt engineering — structured output section)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 2
**Setup required:** `pip install pydantic openai`; `OPENAI_API_KEY` in `.env`

> **Why this matters:** Unstructured LLM text is unusable inside software — you can't reliably `if response == ...` on a paragraph. Structured outputs turn an LLM into a dependable component that returns data your code can trust.

---

## 1. Your First Pydantic Model

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Pydantic models, validation
**Goal track relevance:** Every structured-output AI system defines its expected shape as a Pydantic model. This is the foundation.
**Dataset:** none

### Goal
Define a Pydantic model `Person` with fields `name` (str), `age` (int), and `email` (str). Create a valid instance, then try to create one with `age="thirty"` and observe the validation error.

### Constraints / I/O
- Input: field values (some valid, some invalid)
- Output: a validated `Person` object; a `ValidationError` for bad input
- Edge cases to consider: What happens with `age="30"` (string that looks like a number)? What about a missing field?

### Hints
<details><summary>Hint 1</summary>`from pydantic import BaseModel` then `class Person(BaseModel):` with typed fields.</details>
<details><summary>Hint 2</summary>Pydantic coerces `"30"` → `30` by default, but `"thirty"` raises. Wrap creation in try/except to see the error.</details>

### Acceptance criteria
- [ ] Model defined with three typed fields
- [ ] Valid instance created successfully
- [ ] `ValidationError` caught and printed for invalid input
- [ ] Can explain what type coercion Pydantic did automatically

---

## 2. Forcing an LLM to Return Valid JSON

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Structured outputs, schema-constrained generation
**Goal track relevance:** The single most useful trick in applied AI — guaranteeing the model returns data matching your schema instead of free text.
**Dataset:** none

### Goal
Write a function `extract_person(text)` that takes a sentence like `"Maria Lopez is 34 and works as a data scientist"` and returns a validated Pydantic `Person` object (`name`, `age`, `occupation`) using the OpenAI structured output API.

### Constraints / I/O
- Input: a free-text sentence
- Output: a validated `Person` Pydantic instance
- Edge cases to consider: What if the text is missing the age? What if the model returns malformed JSON?

### Hints
<details><summary>Hint 1</summary>Modern OpenAI SDKs accept a Pydantic model directly via the parse/structured-output API (e.g. `response_format=Person`). Check your SDK version.</details>
<details><summary>Hint 2</summary>If using an older SDK, instruct the model "respond with JSON matching this schema" and pass `Person.model_json_schema()`, then `Person.model_validate_json(response)`.</details>

### Acceptance criteria
- [ ] Function returns a validated `Person` object
- [ ] Works on at least 3 different input sentences
- [ ] Handles missing fields gracefully (Optional or a clear error)
- [ ] No raw string parsing — validation goes through Pydantic

---

## 3. Nested Models + Validators

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Nested Pydantic models, custom validators, constrained extraction
**Goal track relevance:** Real extraction tasks return nested, constrained data — invoices with line items, resumes with multiple jobs. This is production-shape work.
**Dataset:** none

### Goal
Build a model `Resume` containing `name` (str), `years_experience` (int, must be ≥ 0), and `jobs` (a list of `Job` models, each with `title`, `company`, `start_year`). Add a custom validator that rejects a resume where any `start_year` is in the future. Then extract a `Resume` from a paragraph of text via the LLM.

### Constraints / I/O
- Input: a paragraph describing someone's work history
- Output: a validated `Resume` with a nested list of `Job`s
- Edge cases to consider: future dates, negative experience, empty job list

### Hints
<details><summary>Hint 1</summary>Use `field_validator` (Pydantic v2) for the year check. Raise `ValueError` inside it.</details>
<details><summary>Hint 2</summary>`jobs: list[Job]` makes the nesting work. Pydantic validates each nested item automatically.</details>

### Acceptance criteria
- [ ] Nested `Job` model validated inside `Resume`
- [ ] Custom validator rejects future start years
- [ ] `years_experience` constrained to ≥ 0
- [ ] Successfully extracts a nested resume from text via the LLM
