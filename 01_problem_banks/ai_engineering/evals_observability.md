# AI Engineering — Evals + Observability Problem Bank

**Who this is for:** AI Engineer track, after caching.
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 14
**Setup required:** `OPENAI_API_KEY` in `.env`; LangSmith key optional for problem 3

> **Why this matters:** You cannot improve or debug what you cannot measure. Evals tell you whether your AI system actually works; observability tells you *why* it did what it did. This is the discipline that separates production AI from demos.

---

## 1. Build an Eval Harness

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Test cases for AI, scoring
**Goal track relevance:** The foundation of AI quality — a repeatable set of test cases you can run after every change.
**Dataset:** none

### Goal
Create an eval set of 10 input/expected-output pairs for a task (e.g. sentiment classification). Write a harness that runs your AI function on each input and computes an accuracy score. Re-run it after changing the prompt to see if accuracy improves.

### Constraints / I/O
- Input: 10 labeled test cases
- Output: an accuracy score; a list of failures
- Edge cases to consider: exact-match vs. fuzzy scoring; ties

### Hints
<details><summary>Hint 1</summary>Store cases as a list of dicts `{"input":..., "expected":...}`. Loop, predict, compare, tally.</details>
<details><summary>Hint 2</summary>Print the failures, not just the score — that's where the learning is.</details>

### Acceptance criteria
- [ ] 10-case eval set
- [ ] Harness computes accuracy
- [ ] Failures listed
- [ ] Re-run after a prompt change shows a measurable difference

---

## 2. LLM-as-Judge

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Model-graded evaluation
**Goal track relevance:** Many AI outputs (summaries, answers) have no single correct string. LLM-as-judge scores open-ended quality at scale.
**Dataset:** none

### Goal
Build a judge function that, given a question, a generated answer, and a reference answer, asks a model to rate the answer's correctness and helpfulness on a 1–5 scale with a justification. Use it to evaluate your RAG pipeline's answers from `rag.md`.

### Constraints / I/O
- Input: (question, answer, reference) triples
- Output: numeric scores + justifications
- Edge cases to consider: judge inconsistency; gaming via verbosity; score parsing

### Hints
<details><summary>Hint 1</summary>Give the judge a strict rubric and ask for structured output (score + reason) via Pydantic.</details>
<details><summary>Hint 2</summary>Run the judge at temperature 0 for consistency, and average over a couple runs if needed.</details>

### Acceptance criteria
- [ ] Judge returns structured score + justification
- [ ] Applied to real RAG outputs
- [ ] Scores are reproducible (low temperature)
- [ ] Learner notes at least one limitation of LLM-as-judge

---

## 3. Tracing and Observability

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Tracing agent runs, structured logging
**Goal track relevance:** When a multi-agent system misbehaves, you need to see every step — each prompt, tool call, and result. Observability is what makes complex agents debuggable.
**Dataset:** none

### Goal
Add tracing to your agent from `raw_agent_from_scratch.md`: log every step (prompt, tool call, arguments, result, timing) in a structured format. Either roll your own structured logger or integrate LangSmith. Then deliberately introduce a bug and use the trace to find it.

### Constraints / I/O
- Input: an agent run
- Output: a complete structured trace; a diagnosed bug
- Edge cases to consider: log volume; sensitive data in logs

### Hints
<details><summary>Hint 1</summary>Log a structured record per step (JSON lines): step number, type, content, latency. If using LangSmith, set the env vars from `.env.example`.</details>
<details><summary>Hint 2</summary>Use the trace to answer "which step went wrong and why" — that's the whole point.</details>

### Acceptance criteria
- [ ] Every agent step traced with structured data
- [ ] Timing captured per step
- [ ] A deliberately introduced bug found via the trace
- [ ] Learner can explain why observability is essential for multi-agent systems
