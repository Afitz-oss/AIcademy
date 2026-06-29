# AI Engineering — LangChain Problem Bank

**Who this is for:** AI Engineer track, after building everything raw (agent, RAG, streaming).
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 9
**Setup required:** `pip install langchain langchain-openai`; `OPENAI_API_KEY` in `.env`

> **Why this matters:** You've already built chains, prompts, and RAG by hand. Now you'll see how LangChain packages those patterns. Because you built them raw first, LangChain reads like English — and you'll know when it helps versus when raw code is cleaner.

---

## 1. Your First Chain

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Prompt templates, chains, LCEL
**Goal track relevance:** Chains are LangChain's core abstraction — composing a prompt, a model, and an output parser into a reusable unit.
**Dataset:** none

### Goal
Build a chain using a `PromptTemplate` with a variable, a chat model, and a string output parser, using the LangChain Expression Language (`prompt | model | parser`). Invoke it to translate a sentence into French.

### Constraints / I/O
- Input: a sentence (template variable)
- Output: the translated string
- Edge cases to consider: how does this compare to a raw API call you'd write yourself?

### Hints
<details><summary>Hint 1</summary>`ChatPromptTemplate.from_template("Translate to French: {text}")` then `chain = prompt | model | StrOutputParser()`.</details>
<details><summary>Hint 2</summary>`chain.invoke({"text": "..."})` runs the whole pipeline.</details>

### Acceptance criteria
- [ ] Chain built with the `|` (LCEL) syntax
- [ ] Template variable substituted correctly
- [ ] Returns a clean string via the output parser
- [ ] Learner can compare it to the equivalent raw API call

---

## 2. Structured Output Chain

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Pydantic output parsing in LangChain
**Goal track relevance:** Combining LangChain with the Pydantic structured-output skill from earlier — getting validated objects out of a chain.
**Dataset:** none

### Goal
Build a chain that extracts a `Person` (name, age, occupation) from a sentence and returns a validated Pydantic object using LangChain's structured output / `with_structured_output`.

### Constraints / I/O
- Input: a free-text sentence
- Output: a validated `Person` object
- Edge cases to consider: missing fields; comparing this to your raw structured-output code

### Hints
<details><summary>Hint 1</summary>`model.with_structured_output(Person)` makes the model return a `Person` directly.</details>
<details><summary>Hint 2</summary>You already solved this raw in `pydantic_structured_outputs.md` — note how much LangChain hides.</details>

### Acceptance criteria
- [ ] Chain returns a validated `Person`
- [ ] Works on multiple inputs
- [ ] Learner articulates what LangChain abstracted away

---

## 3. A RAG Chain in LangChain

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Retrieval chains, vector store integration
**Goal track relevance:** Rebuild your hand-made RAG pipeline using LangChain components and compare. Knowing both lets you debug framework RAG when it breaks.
**Dataset:** `02_datasets/rag_corpus/`

### Goal
Build a RAG chain using LangChain: load the corpus, split it with a text splitter, embed and store in a Chroma vector store, create a retriever, and compose a chain that retrieves context and answers a question. Compare its answers to your hand-built pipeline from `rag.md`.

### Constraints / I/O
- Input: a question
- Output: a grounded answer
- Edge cases to consider: where LangChain's defaults differ from your hand-built choices (chunk size, prompt)

### Hints
<details><summary>Hint 1</summary>`RecursiveCharacterTextSplitter`, `Chroma.from_documents`, `vectorstore.as_retriever()`, then compose retriever + prompt + model.</details>
<details><summary>Hint 2</summary>Inspect what prompt LangChain uses by default — compare it to the grounding prompt you wrote by hand.</details>

### Acceptance criteria
- [ ] Full RAG chain built with LangChain components
- [ ] Answers grounded in the corpus
- [ ] Compared against the hand-built pipeline
- [ ] Learner can explain the tradeoffs of using the framework here
