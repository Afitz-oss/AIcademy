# AI Engineering — Caching + Cost Optimization Problem Bank

**Who this is for:** AI Engineer track, after FastAPI.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-2 (API basics — caching applies to API responses)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 13
**Setup required:** `OPENAI_API_KEY` in `.env`; embeddings setup for problem 2

> **Why this matters:** AI is expensive at scale. A system that re-asks the model the same question a thousand times burns money and adds latency. Caching and smart model routing are the difference between a viable product and a bankrupt one.

---

## 1. Exact-Match Response Cache

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Caching, memoization
**Goal track relevance:** The simplest cost win — never pay twice for the identical prompt.
**Dataset:** none

### Goal
Wrap your LLM call in a cache (a dict or `functools.lru_cache`) keyed by the exact prompt. On a repeated identical prompt, return the cached response without calling the API. Measure the latency difference.

### Constraints / I/O
- Input: prompts, some repeated
- Output: responses, with repeats served from cache
- Edge cases to consider: prompts that differ only in whitespace; cache size limits

### Hints
<details><summary>Hint 1</summary>Key the cache on the normalized prompt (strip whitespace, maybe lowercase) so trivial differences still hit.</details>
<details><summary>Hint 2</summary>Time both calls — the cached one should be near-instant.</details>

### Acceptance criteria
- [ ] Identical prompts served from cache
- [ ] Measured latency improvement on cache hits
- [ ] Normalization so trivial differences still hit
- [ ] Cache size bounded

---

## 2. Semantic Cache

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Embedding-based caching
**Goal track relevance:** Users phrase the same question differently. A semantic cache reuses an answer when a new question *means* the same thing as a cached one — a major real-world cost saver.
**Dataset:** none

### Goal
Build a semantic cache: embed each incoming question, and if it's within a similarity threshold of a previously-asked question, return the cached answer instead of calling the model. Demonstrate a cache hit on a paraphrase ("How do I reset my password?" vs "I forgot my password, how do I change it?").

### Constraints / I/O
- Input: paraphrased questions
- Output: cache hits on semantically equivalent questions
- Edge cases to consider: threshold too loose (wrong answers) vs. too strict (no hits)

### Hints
<details><summary>Hint 1</summary>Reuse your embeddings + cosine similarity from `embeddings_vector_databases.md`. Store (question_embedding, answer) pairs.</details>
<details><summary>Hint 2</summary>Tune the threshold carefully — this is the key tradeoff. Too loose returns wrong cached answers.</details>

### Acceptance criteria
- [ ] Questions embedded and compared
- [ ] Paraphrases hit the cache
- [ ] Genuinely different questions miss the cache
- [ ] Learner can explain the threshold tradeoff

---

## 3. Model Routing + Token Budgeting

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Cost-aware routing, escalation
**Goal track relevance:** Not every query needs the most expensive model. Routing simple queries to cheap models and escalating only when needed is core production cost engineering.
**Dataset:** none

### Goal
Build a router that sends each query first to a cheap/fast model, evaluates whether the answer is adequate (length, confidence, or a self-check), and escalates to a stronger model only if needed. Track and report total estimated token cost vs. always using the expensive model.

### Constraints / I/O
- Input: a mix of simple and hard queries
- Output: answers + a cost comparison (routed vs. always-expensive)
- Edge cases to consider: cheap model confidently wrong; escalation loops

### Hints
<details><summary>Hint 1</summary>Define an "adequacy" check — e.g. ask the cheap model to rate its own confidence, or check the answer against simple criteria.</details>
<details><summary>Hint 2</summary>Use `tiktoken` to count tokens and multiply by each model's price to estimate cost.</details>

### Acceptance criteria
- [ ] Cheap model tried first
- [ ] Escalation only when the cheap answer is inadequate
- [ ] Token cost tracked for both strategies
- [ ] Demonstrated savings on a realistic query mix
