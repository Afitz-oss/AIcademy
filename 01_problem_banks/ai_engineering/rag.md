# AI Engineering — RAG (Retrieval-Augmented Generation) Problem Bank

**Who this is for:** AI Engineer track, after embeddings + vector databases.
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 7
**Setup required:** `pip install chromadb sentence-transformers tiktoken openai`; `OPENAI_API_KEY` in `.env`
**Corpus:** `02_datasets/rag_corpus/` — short markdown docs on AI engineering topics

> **Why this matters:** RAG is how you make an LLM answer questions about *your* data — documents it was never trained on — without hallucinating. Most real AI products either are RAG or use parts of it. You'll build your own searchable knowledgebase: ask it "what is an embedding?" and it retrieves the right doc and answers correctly.

---

## 1. Chunking With Overlap

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Document chunking
**Goal track relevance:** Documents are too big to send whole and too important to cut carelessly. Chunking with overlap is the first step of every RAG pipeline.
**Dataset:** any file in `02_datasets/rag_corpus/`

### Goal
Write `chunk_text(text, chunk_size=200, overlap=50)` that splits text into overlapping windows of roughly `chunk_size` tokens with `overlap` tokens shared between neighbors. Chunk one corpus document and inspect the boundaries.

### Constraints / I/O
- Input: a long string
- Output: a list of overlapping chunks
- Edge cases to consider: text shorter than chunk_size; the last chunk; why overlap matters

### Hints
<details><summary>Hint 1</summary>Use `tiktoken` to tokenize, slice the token list in windows, decode each window back to text.</details>
<details><summary>Hint 2</summary>Step forward by `chunk_size - overlap` each window so neighbors share `overlap` tokens.</details>

### Acceptance criteria
- [ ] Returns overlapping chunks of roughly the right size
- [ ] Neighboring chunks share `overlap` tokens
- [ ] Handles text shorter than one chunk
- [ ] Learner can explain why overlap prevents losing cross-boundary context

---

## 2. The Ingest Pipeline

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Indexing — read → chunk → embed → store
**Goal track relevance:** The "write" half of RAG. Everything you can retrieve must first be ingested.
**Dataset:** `02_datasets/rag_corpus/`

### Goal
Write `ingest(folder)` that reads every markdown file in the corpus, chunks each, embeds the chunks, and stores them in a ChromaDB collection with metadata (`source_file`, `chunk_index`).

### Constraints / I/O
- Input: a folder of documents
- Output: a populated ChromaDB collection
- Edge cases to consider: empty files; re-running ingest (duplicate IDs)

### Hints
<details><summary>Hint 1</summary>Use a stable, unique `id` per chunk (e.g. `f"{filename}_{i}"`) so re-ingesting overwrites rather than duplicates.</details>
<details><summary>Hint 2</summary>Store `source_file` in metadata so you can cite where an answer came from later.</details>

### Acceptance criteria
- [ ] All corpus files read and chunked
- [ ] Chunks embedded and stored with metadata
- [ ] Re-running ingest doesn't create duplicates
- [ ] Collection count matches expected chunk total

---

## 3. Retrieval — Semantic vs. Keyword

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Retrieval, comparison to keyword search
**Goal track relevance:** Retrieval quality determines answer quality. Seeing where keyword search fails proves why semantic retrieval matters.
**Dataset:** ingested corpus

### Goal
Write `retrieve(query, top_k=3)` that returns the most relevant chunks with scores and source files. Then run 5 queries through both keyword search (`str.contains`) and your semantic retrieval, and document at least 2 cases where keyword search fails but semantic search succeeds (synonyms, paraphrases).

### Constraints / I/O
- Input: a query string
- Output: top-k chunks with scores and sources; a comparison table
- Edge cases to consider: a query with no good matches; very short queries

### Hints
<details><summary>Hint 1</summary>For keyword search, just check substring membership across raw chunks — then watch it miss "car" when the doc says "vehicle".</details>
<details><summary>Hint 2</summary>Return the score so you can judge retrieval confidence, not just the text.</details>

### Acceptance criteria
- [ ] `retrieve` returns top-k chunks with scores + sources
- [ ] 5 queries compared across both methods
- [ ] At least 2 documented wins for semantic over keyword
- [ ] Learner can explain why

---

## 4. The Full RAG Pipeline

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** End-to-end RAG, grounding
**Goal track relevance:** Wiring retrieval + generation into one answer function is the core deliverable of the whole track.
**Dataset:** ingested corpus

### Goal
Build `answer(query)` that retrieves the top chunks, builds a prompt instructing the model to answer **only** from the provided context (and say "I don't know" if the context doesn't contain it), calls the LLM, and returns the answer plus its source files. Test with a question whose answer lives only in the corpus.

### Constraints / I/O
- Input: a user question
- Output: a grounded answer + cited source files
- Edge cases to consider: a question the corpus can't answer (must say "I don't know", not hallucinate)

### Hints
<details><summary>Hint 1</summary>Put retrieved chunks in the system/context portion of the prompt and the question separately. Be explicit: "Answer only from the context above."</details>
<details><summary>Hint 2</summary>Include the source filenames in the return value so answers are traceable.</details>

### Acceptance criteria
- [ ] Retrieves, builds a grounded prompt, calls the LLM
- [ ] Answers correctly from the corpus
- [ ] Says "I don't know" when the corpus lacks the answer (no hallucination)
- [ ] Returns source citations

---

## 5. RAG Evaluation

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Evals, measuring correctness
**Goal track relevance:** You can't ship what you can't measure. Evals are what separate hobby RAG from production RAG.
**Dataset:** ingested corpus + a small Q&A set you write

### Goal
Write 10 question/expected-answer pairs whose answers are in the corpus. Run each through your `answer()` function and score correctness — either with simple keyword matching or an LLM-as-judge that compares the answer to the expected one. Report an accuracy score and inspect the failures.

### Constraints / I/O
- Input: 10 Q&A pairs
- Output: an accuracy score + a list of failures with likely causes
- Edge cases to consider: partially-correct answers; judge disagreements

### Hints
<details><summary>Hint 1</summary>LLM-as-judge: ask a model "Does this answer match the expected answer? Reply YES or NO" with both texts.</details>
<details><summary>Hint 2</summary>For each failure, ask: was it retrieval (wrong chunks) or generation (right chunks, wrong answer)? That diagnosis is the real skill.</details>

### Acceptance criteria
- [ ] 10 Q&A pairs evaluated
- [ ] Accuracy score reported
- [ ] Failures categorized as retrieval vs. generation problems
- [ ] Learner proposes one concrete improvement based on the failures
