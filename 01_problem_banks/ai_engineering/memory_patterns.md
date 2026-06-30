# AI Engineering — Memory Patterns Problem Bank

**Who this is for:** AI Engineer track, after tool use / function calling.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-6 (AI Agents — memory is what makes them useful across turns)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 4
**Setup required:** `OPENAI_API_KEY` in `.env`

> **Why this matters:** An LLM is stateless — it forgets everything between calls. Memory is the engineering you add on top to make an assistant feel continuous and an agent actually useful across turns.

---

## 1. Conversation History (Short-Term Memory)

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Message history management
**Goal track relevance:** The simplest, most essential memory — keeping the running conversation so the model remembers what was just said.
**Dataset:** none

### Goal
Build a `Conversation` class that stores a list of messages, has an `add(role, content)` method and a `send(user_message)` method that appends the message, calls the model with the full history, stores the reply, and returns it. Demonstrate the model remembering your name across 3 turns.

### Constraints / I/O
- Input: successive user messages
- Output: model replies that reference earlier turns
- Edge cases to consider: where does the system prompt live in the history?

### Hints
<details><summary>Hint 1</summary>Store messages as the list of `{"role", "content"}` dicts the API already uses.</details>
<details><summary>Hint 2</summary>Always send the *entire* history each call — that's how a stateless model "remembers".</details>

### Acceptance criteria
- [ ] `Conversation` class stores and sends full history
- [ ] Model recalls information from earlier turns
- [ ] System prompt preserved at the front of history

---

## 2. Token-Aware Context Window Trimming

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Context window management, token counting
**Goal track relevance:** Conversations grow past the context window. Trimming intelligently (without losing the system prompt or recent turns) is a core production concern.
**Dataset:** none

### Goal
Extend your `Conversation` class to count tokens with `tiktoken` and, when history exceeds a token budget, drop the oldest messages (but never the system prompt) until it fits.

### Constraints / I/O
- Input: a long conversation exceeding the budget
- Output: a trimmed history that always fits and always keeps the system prompt
- Edge cases to consider: a single message larger than the budget; keeping turn pairs together

### Hints
<details><summary>Hint 1</summary>`tiktoken.encoding_for_model(...)` then `len(enc.encode(text))` gives token counts.</details>
<details><summary>Hint 2</summary>Trim from index 1 (after the system prompt), oldest first, until under budget.</details>

### Acceptance criteria
- [ ] Accurate token counting per message
- [ ] History trimmed to fit a configurable budget
- [ ] System prompt never dropped
- [ ] Most recent turns always retained

---

## 3. Long-Term Semantic Memory

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Vector-based memory retrieval
**Goal track relevance:** True long-term memory isn't keeping everything in context — it's storing past interactions as embeddings and retrieving only the relevant ones. This is the bridge to RAG.
**Dataset:** none

### Goal
Build a `SemanticMemory` class that embeds and stores facts, and on each new user message retrieves the top-3 most relevant stored memories and injects them into the prompt. Demonstrate the assistant recalling a fact you told it 20 messages ago, even after that message was trimmed from short-term history.

### Constraints / I/O
- Input: a stream of messages, some containing facts to remember
- Output: responses that recall relevant old facts via retrieval, not full history
- Edge cases to consider: irrelevant retrievals, empty memory, duplicate facts

### Hints
<details><summary>Hint 1</summary>Reuse the embeddings/cosine-similarity work from `embeddings_vector_databases.md`. This is memory built on retrieval.</details>
<details><summary>Hint 2</summary>On each turn: embed the user message, retrieve top-k memories, prepend them as context before calling the model.</details>

### Acceptance criteria
- [ ] Facts stored as embeddings
- [ ] Top-k relevant memories retrieved per turn
- [ ] Assistant recalls a fact after it left the short-term window
- [ ] Retrieval is semantic (synonyms/paraphrases still match)
