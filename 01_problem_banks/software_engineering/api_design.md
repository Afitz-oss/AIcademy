# Software Engineering — API Design

**Knowledgebase reference:** `00_knowledgebase/software_engineering.ipynb` → SE-5 (REST APIs with FastAPI)
**Roadmap:** `09_roadmaps/software_engineer.md` → step 5
**Setup required:** `pip install fastapi uvicorn` (for problems that build endpoints)

> **Why this matters:** Almost every backend job is, at its core, designing and building APIs. A well-designed API is predictable, consistent, and hard to misuse. A poorly designed one becomes a permanent source of bugs and confusion.

---

## 1. Design a REST Resource

**Difficulty:** Beginner
**Stage:** Software Engineering
**Pattern / topic:** REST conventions, resource modeling
**Goal track relevance:** REST conventions are a shared language. Getting nouns, verbs, and status codes right makes an API instantly understandable to other engineers.
**Dataset:** none

### Goal
Design (on paper / in markdown, no code required) the REST endpoints for a "tasks" resource supporting create, read-one, read-all, update, and delete. Specify the HTTP method, path, and success status code for each, plus the JSON shape of a task.

### Constraints / I/O
- Input: the "tasks" domain
- Output: a table of method + path + status code + request/response shape
- Edge cases to consider: what status code for "not found"? for "created"?

### Hints
<details><summary>Hint 1</summary>Use nouns for paths (`/tasks`, `/tasks/{id}`), HTTP verbs for actions. Don't put verbs in the path (`/getTasks` is wrong).</details>
<details><summary>Hint 2</summary>201 for created, 200 for OK, 204 for deleted-no-content, 404 for not found.</details>

### Acceptance criteria
- [ ] All 5 operations mapped to correct method + path
- [ ] Correct status codes (incl. 201 for create, 404 for missing)
- [ ] Consistent resource naming (plural nouns, no verbs in paths)
- [ ] Task JSON shape defined

---

## 2. Build It with FastAPI + Validation

**Difficulty:** Intermediate
**Stage:** Software Engineering
**Pattern / topic:** Implementing a REST API, input validation
**Goal track relevance:** Turning a design into a working, validated API — the everyday job of a backend engineer.
**Dataset:** none

### Goal
Implement the tasks API from problem 1 in FastAPI with in-memory storage. Use Pydantic models for request/response, return correct status codes, and return 404 when a task ID doesn't exist.

### Constraints / I/O
- Input: HTTP requests
- Output: correct responses + status codes
- Edge cases to consider: updating/deleting a missing ID; invalid request body

### Hints
<details><summary>Hint 1</summary>A dict keyed by task id works as in-memory storage. Raise `HTTPException(status_code=404)` when missing.</details>
<details><summary>Hint 2</summary>Separate the create-model (no id) from the response-model (with id).</details>

### Acceptance criteria
- [ ] All 5 endpoints implemented
- [ ] Pydantic validation on input
- [ ] Correct status codes incl. 404
- [ ] Invalid bodies rejected with 422

---

## 3. Versioning, Pagination, and Auth Design

**Difficulty:** Advanced
**Stage:** Software Engineering
**Pattern / topic:** API evolution and scale concerns
**Goal track relevance:** Real APIs must evolve without breaking clients, handle large collections, and authenticate requests. These are the concerns that separate a toy API from a production one.
**Dataset:** none

### Goal
Extend your tasks API design with: (a) a versioning strategy (e.g. `/v1/`), (b) pagination for the list endpoint (with a clear query-param contract and response metadata), and (c) an authentication approach (API key or bearer token) described with its tradeoffs. Implement pagination in FastAPI; design the rest in markdown.

### Constraints / I/O
- Input: the existing tasks API
- Output: versioning + pagination (implemented) + auth design (written)
- Edge cases to consider: page beyond the end; invalid page size; missing/invalid token

### Hints
<details><summary>Hint 1</summary>Pagination contract: `?limit=20&offset=40`, and return `total`, `limit`, `offset` alongside the items.</details>
<details><summary>Hint 2</summary>For auth, compare API keys (simple, long-lived) vs. bearer tokens/JWct (expiring, richer) — name when each fits.</details>

### Acceptance criteria
- [ ] Versioning strategy defined
- [ ] Pagination implemented with a clear contract + metadata
- [ ] Auth approach described with tradeoffs
- [ ] Edge cases (out-of-range page, bad token) handled or specified
