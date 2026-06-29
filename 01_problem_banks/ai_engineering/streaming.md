# AI Engineering — Streaming Problem Bank

**Who this is for:** AI Engineer track, after RAG.
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 8
**Setup required:** `OPENAI_API_KEY` in `.env`

> **Why this matters:** Nobody waits ten seconds for a wall of text to appear at once. Streaming responses token-by-token is table-stakes UX for any real AI product — it's why ChatGPT feels alive.

---

## 1. Stream a Completion to the Terminal

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Streaming responses
**Goal track relevance:** The basic building block of responsive AI UX.
**Dataset:** none

### Goal
Call the chat API with `stream=True` and print each token as it arrives so the response appears progressively in your terminal, like a typewriter.

### Constraints / I/O
- Input: a prompt
- Output: progressively printed text
- Edge cases to consider: empty chunks; the final chunk

### Hints
<details><summary>Hint 1</summary>With `stream=True` you iterate the response; each chunk has a delta with optional `content`.</details>
<details><summary>Hint 2</summary>`print(token, end="", flush=True)` to render without newlines and without buffering.</details>

### Acceptance criteria
- [ ] Response streams progressively, not all at once
- [ ] Handles empty/None content chunks
- [ ] Full text assembled correctly at the end

---

## 2. Accumulate While Streaming

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Streaming + accumulation, generators
**Goal track relevance:** Real apps both show tokens live and keep the full text for storage/logging. Doing both cleanly is the pattern.
**Dataset:** none

### Goal
Write a generator function `stream_answer(prompt)` that yields each token as it arrives *and* returns the complete assembled string when done. The caller should be able to both display tokens live and save the final text.

### Constraints / I/O
- Input: a prompt
- Output: yielded tokens + a final complete string
- Edge cases to consider: stream interrupted mid-way; preserving partial output

### Hints
<details><summary>Hint 1</summary>Build up a list of tokens as you `yield` them; join at the end.</details>
<details><summary>Hint 2</summary>A generator can both `yield` items and store state in an enclosing object or return via a final yield.</details>

### Acceptance criteria
- [ ] Tokens yielded live
- [ ] Full text available after streaming completes
- [ ] Caller can both display and persist the result

---

## 3. Streaming Through FastAPI (SSE)

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Server-sent events, async streaming
**Goal track relevance:** Streaming from your own API endpoint is how production frontends get live tokens. This connects streaming to deployment.
**Dataset:** none

### Goal
Build a FastAPI endpoint `/chat` that accepts a prompt and streams the LLM response back to the client using a `StreamingResponse` (server-sent events). Test it with `curl` and confirm tokens arrive progressively.

### Constraints / I/O
- Input: a POST request with a prompt
- Output: a streamed HTTP response
- Edge cases to consider: client disconnects mid-stream; content-type headers

### Hints
<details><summary>Hint 1</summary>Use an `async def` generator and FastAPI's `StreamingResponse(generator, media_type="text/event-stream")`.</details>
<details><summary>Hint 2</summary>Format each chunk as an SSE line: `data: {token}\n\n`.</details>

### Acceptance criteria
- [ ] `/chat` endpoint streams tokens
- [ ] `curl` shows progressive arrival
- [ ] Uses async generator + StreamingResponse
- [ ] Correct SSE formatting and media type
