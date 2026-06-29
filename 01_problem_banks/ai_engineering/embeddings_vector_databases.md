# AI Engineering — Embeddings + Vector Databases Problem Bank

**Who this is for:** AI Engineer track, after building a raw agent.
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 6
**Setup required:** `pip install sentence-transformers numpy chromadb`; `OPENAI_API_KEY` only for problem 4

> **Why this matters:** Computers can't compare *meaning* — but they can compare numbers. Embeddings turn text into vectors where similar meaning = nearby vectors. A vector database is just an efficient way to store and search those vectors. This is the foundation of semantic search, RAG, and long-term memory. **Build it from scratch first so the library never feels like magic.**

---

## 1. Generate and Compare Embeddings

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Text embeddings, semantic similarity
**Goal track relevance:** First contact with the idea that meaning can be measured numerically. Uses a free local model — no API key.
**Dataset:** none

### Goal
Use `sentence-transformers` (model `all-MiniLM-L6-v2`) to embed these five sentences, then print the similarity of "machine learning" against each:
```
"I love machine learning"
"Deep learning is a subfield of AI"
"My favorite food is pizza"
"Neural networks power modern AI"
"The weather is sunny today"
```
Confirm the AI-related sentences score higher than pizza and weather.

### Constraints / I/O
- Input: five sentences
- Output: similarity scores ranking AI sentences above unrelated ones
- Edge cases to consider: how long is each embedding vector? (Note the dimension.)

### Hints
<details><summary>Hint 1</summary>`from sentence_transformers import SentenceTransformer; model = SentenceTransformer("all-MiniLM-L6-v2")` then `model.encode(sentences)`.</details>
<details><summary>Hint 2</summary>`util.cos_sim` gives similarities, or compute it yourself (you will in problem 2).</details>

### Acceptance criteria
- [ ] All five sentences embedded
- [ ] AI-related sentences score higher than unrelated ones
- [ ] Learner can state the embedding dimension (e.g. 384)

---

## 2. Cosine Similarity From Scratch

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Vector math, numpy
**Goal track relevance:** A vector database's core operation is cosine similarity. Implement it once and the whole field demystifies.
**Dataset:** none

### Goal
Implement `cosine_similarity(a, b)` using only numpy (dot product over the product of magnitudes). Verify it matches the library's result on the embeddings from problem 1.

### Constraints / I/O
- Input: two embedding vectors
- Output: a similarity score in roughly [-1, 1]
- Edge cases to consider: a zero vector (division by zero)

### Hints
<details><summary>Hint 1</summary>`np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))`</details>
<details><summary>Hint 2</summary>Guard against a zero-magnitude vector to avoid dividing by zero.</details>

### Acceptance criteria
- [ ] Implemented with numpy only
- [ ] Matches the library's similarity (within floating-point tolerance)
- [ ] Handles the zero-vector edge case

---

## 3. Build a Mini Vector Database in Pure Python

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Vector store, top-k search
**Goal track relevance:** Before using ChromaDB, build the concept yourself. You'll understand exactly what a vector DB does — and doesn't — do.
**Dataset:** none

### Goal
Build a `TinyVectorDB` class with `add(text, vector)` and `search(query_vector, top_k=3)`. Store the five sentences from problem 1, then search with a new query ("artificial intelligence") and return the most similar stored sentences.

### Constraints / I/O
- Input: stored (text, vector) pairs + a query vector
- Output: top-k most similar texts with scores
- Edge cases to consider: top_k larger than the number of stored items; empty DB

### Hints
<details><summary>Hint 1</summary>Store a list of `(text, vector)`. In `search`, compute similarity to every stored vector and sort descending.</details>
<details><summary>Hint 2</summary>Reuse your `cosine_similarity` from problem 2.</details>

### Acceptance criteria
- [ ] `add` and `search` implemented
- [ ] Returns top-k by similarity, sorted
- [ ] Handles top_k > stored count and empty DB
- [ ] Learner can explain how this maps to a real vector DB

---

## 4. Switch to the OpenAI Embeddings API

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Hosted embeddings, provider tradeoffs
**Goal track relevance:** Production systems often use hosted embeddings. Knowing the tradeoffs (cost, quality, latency, privacy) is part of the job.
**Dataset:** none

### Goal
Re-embed the five sentences using OpenAI's `text-embedding-3-small`, store them in your `TinyVectorDB`, and run the same query. Compare the ranking to the `sentence-transformers` result and note differences.

### Constraints / I/O
- Input: the five sentences + a query
- Output: rankings from both embedding providers, side by side
- Edge cases to consider: different vector dimensions between providers

### Hints
<details><summary>Hint 1</summary>`client.embeddings.create(model="text-embedding-3-small", input=texts)` returns embeddings in `.data[i].embedding`.</details>
<details><summary>Hint 2</summary>Note the dimension difference (1536 vs 384) — you can't mix vectors from different models in one DB.</details>

### Acceptance criteria
- [ ] Sentences embedded via OpenAI API
- [ ] Same query run through both providers
- [ ] Learner articulates at least two tradeoffs (e.g. cost vs. privacy)

---

## 5. ChromaDB — A Real Vector Database

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Production vector database, metadata filtering
**Goal track relevance:** ChromaDB is a real, local vector database. After building your own, you'll see exactly what it adds (persistence, indexing, metadata) and what stays the same (the core concept).
**Dataset:** `02_datasets/rag_corpus/` (or the five sentences)

### Goal
Load ~20 short text snippets into a ChromaDB collection (with metadata like a `topic` field), query it semantically, and use metadata filtering to restrict results to one topic. Compare the developer experience to your `TinyVectorDB`.

### Constraints / I/O
- Input: ~20 documents with metadata + a query
- Output: top-k semantic results, plus a metadata-filtered query
- Edge cases to consider: persistence across runs; what the embedding function defaults to

### Hints
<details><summary>Hint 1</summary>`chromadb.Client()` → `create_collection(...)` → `collection.add(documents=..., metadatas=..., ids=...)` → `collection.query(query_texts=..., n_results=...)`.</details>
<details><summary>Hint 2</summary>Pass `where={"topic": "..."}` to `query` for metadata filtering.</details>

### Acceptance criteria
- [ ] 20 documents stored with metadata
- [ ] Semantic query returns relevant results
- [ ] Metadata filter restricts results correctly
- [ ] Learner can name two things ChromaDB adds over `TinyVectorDB`
