# AI Engineering — FastAPI AI Endpoints Problem Bank

**Who this is for:** AI Engineer track, after multi-agent orchestration.
**Knowledgebase reference:** `00_knowledgebase/software_engineering.ipynb` → SE-5 (REST APIs with FastAPI — cross-track)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 12
**Setup required:** `pip install fastapi uvicorn`; `OPENAI_API_KEY` in `.env`

> **Why this matters:** An AI system nobody can call is a script, not a product. FastAPI turns your agent or RAG pipeline into a real HTTP service that a frontend, a mobile app, or another service can use. This is where your AI work becomes deployable.

---

## 1. Your First AI Endpoint

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** FastAPI basics, Pydantic request/response models
**Goal track relevance:** The minimal viable AI service — accept a prompt, return a model response over HTTP.
**Dataset:** none

### Goal
Build a FastAPI app with a `POST /ask` endpoint that accepts a JSON body `{"question": "..."}` (validated by a Pydantic model), calls the LLM, and returns `{"answer": "..."}`. Run it with uvicorn and test via the auto-generated `/docs`.

### Constraints / I/O
- Input: a POST with a question
- Output: a JSON answer
- Edge cases to consider: empty question; validation errors

### Hints
<details><summary>Hint 1</summary>Define `class AskRequest(BaseModel): question: str` and type the endpoint parameter with it — FastAPI validates automatically.</details>
<details><summary>Hint 2</summary>Run with `uvicorn main:app --reload`, then open `http://localhost:8000/docs`.</details>

### Acceptance criteria
- [ ] `POST /ask` validates input with Pydantic
- [ ] Calls the LLM and returns a structured response
- [ ] Testable via `/docs`
- [ ] Empty/invalid input returns a clear 422 error

---

## 2. Wrap Your RAG Pipeline in an API

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Serving a real pipeline, dependency setup
**Goal track relevance:** Turning the RAG pipeline you built into a callable service — the realistic shape of an AI product backend.
**Dataset:** `02_datasets/rag_corpus/`

### Goal
Expose your RAG `answer()` function via `POST /rag`. Load/ingest the vector store once at startup (not per request), and return both the answer and its source citations in the response model.

### Constraints / I/O
- Input: a question
- Output: `{"answer": ..., "sources": [...]}`
- Edge cases to consider: startup ingestion cost; a question outside the corpus

### Hints
<details><summary>Hint 1</summary>Use FastAPI's lifespan/startup to ingest once and hold the collection in app state — re-ingesting per request would be slow.</details>
<details><summary>Hint 2</summary>Make a response model with `answer: str` and `sources: list[str]`.</details>

### Acceptance criteria
- [ ] Vector store initialized once at startup
- [ ] `/rag` returns answer + sources
- [ ] "I don't know" path preserved for out-of-corpus questions
- [ ] Response validated by a Pydantic model

---

## 3. Production Concerns — Errors, Async, Health

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Async endpoints, error handling, observability basics
**Goal track relevance:** The gap between a demo endpoint and a deployable one: proper error handling, async concurrency, and health checks.
**Dataset:** none

### Goal
Harden your AI API: make the endpoint `async`, add structured error handling that returns clean HTTP errors when the LLM call fails (with appropriate status codes), add a `/health` endpoint, and add basic request logging. Test the failure path by simulating an API error.

### Constraints / I/O
- Input: requests, including ones that trigger failures
- Output: clean error responses with correct status codes; healthy/unhealthy signals
- Edge cases to consider: upstream timeouts; rate-limit errors (429); concurrent requests

### Hints
<details><summary>Hint 1</summary>Catch provider errors and raise `HTTPException` with the right status (e.g. 502 for upstream failure, 429 passthrough).</details>
<details><summary>Hint 2</summary>Use `async def` endpoints and the async LLM client so concurrent requests don't block each other.</details>

### Acceptance criteria
- [ ] Endpoints are async
- [ ] LLM failures return clean HTTP errors with correct codes
- [ ] `/health` endpoint present
- [ ] Requests logged
- [ ] Concurrent requests handled without blocking
