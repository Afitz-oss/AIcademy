# AI Engineer Track — Roadmap

> **Prerequisite:** Complete Stages 0–6 of `python_first_principles.md` first. You need classes, error handling, generators, decorators, and `requests` before this track makes sense.

This track takes you from "I can write Python" to "I can build, deploy, and evaluate real AI systems." The north star: understand every layer well enough to build it from scratch, then use frameworks because you choose to — not because they're magic.

**Guiding principle:** build it raw first, then reach for the framework. You'll build an agent with plain Python before LangGraph, a vector store before ChromaDB, and a RAG loop by hand before any abstraction. That way frameworks read like English instead of mystery.

---

## The Sequence

Each numbered item maps to a problem bank in `01_problem_banks/ai_engineering/`.

### 1. Raw API Calls
**File:** `api_basics.md`
- Calling the OpenAI / Anthropic chat APIs directly
- Messages, roles (system/user/assistant), temperature, max_tokens
- Reading the response object, handling errors and rate limits
- **Why:** every AI system is, at bottom, an API call. Master the primitive first.

### 2. Pydantic + Structured Outputs
**File:** `pydantic_structured_outputs.md`
- Pydantic models, validation, types
- Forcing an LLM to return valid JSON that matches a schema
- `response_format` / structured output APIs
- **Why:** unstructured LLM text is unusable in software. Structured outputs are how you turn an LLM into a reliable component.

### 3. Tool Use / Function Calling
**File:** `tool_use_function_calling.md`
- Defining a tool schema, letting the model choose a tool
- Parsing tool calls, executing them, returning results
- **Why:** an agent is just an LLM with tools. This is the atomic unit of agentic AI.

### 4. Memory Patterns
**File:** `memory_patterns.md`
- Short-term: conversation history windows
- Long-term: storing and retrieving past context
- Semantic memory: embedding past interactions
- **Why:** agents without memory are toys. Memory is what makes them useful across turns.

### 5. Build a Raw Agent (no frameworks)
**File:** `raw_agent_from_scratch.md`
- The agent loop: observe → think → act → repeat
- Wiring tools + memory + an LLM into a working agent in pure Python
- Stopping conditions, max iterations, error recovery
- **Why:** if you build the loop by hand once, every framework afterward is obvious.

### 6. Embeddings + Vector Databases
**File:** `embeddings_vector_databases.md`
- What embeddings are; cosine similarity from scratch
- Building a mini vector DB in pure Python
- OpenAI embeddings vs. local `sentence-transformers`
- ChromaDB as a real vector database
- **Why:** the foundation of semantic search, RAG, and memory.

### 7. RAG (Retrieval-Augmented Generation)
**File:** `rag.md`
- Chunking with overlap, ingest pipelines
- Retrieval, grounding the LLM in retrieved context
- RAG evaluation (does it actually answer correctly?)
- Corpus: `02_datasets/rag_corpus/`
- **Why:** most real AI products are RAG or use parts of it.

### 8. Streaming
**File:** `streaming.md`
- Streaming LLM responses token-by-token
- Server-sent events, async generators
- **Why:** nobody waits 10 seconds for a wall of text. Streaming is table-stakes UX.

### 9. LangChain
**File:** `langchain.md`
- Chains, prompt templates, output parsers
- When LangChain helps vs. when raw is cleaner
- **Why:** the most common orchestration framework — you'll read it everywhere.

### 10. LangGraph
**File:** `langgraph.md`
- Stateful graphs, nodes, edges, conditional routing
- Multi-step workflows with cycles
- **Why:** the modern way to build controllable, debuggable agents.

### 11. Multi-Agent Orchestration
**File:** `multi_agent_orchestration.md`
- Orchestrator/worker architecture (this is what we mean by "proxy agents")
- One agent delegating subtasks to specialized agents
- Message passing, result aggregation
- **Why:** complex problems decompose into specialist agents coordinated by an orchestrator.

### 12. FastAPI — Deploy Your AI App
**File:** `fastapi_ai_endpoints.md`
- Wrapping your agent/RAG pipeline in a REST endpoint
- Request/response models with Pydantic, async endpoints, streaming responses
- **Why:** an AI system nobody can call is a script, not a product.

### 13. Caching + Cost Optimization
**File:** `caching_cost_optimization.md`
- Response caching, semantic caching (cache by meaning, not exact match)
- Token budgeting, model routing (cheap model first, escalate on failure)
- **Why:** AI is expensive at scale. Caching is the difference between viable and bankrupt.

### 14. Evals + Observability
**File:** `evals_observability.md`
- LLM-as-judge, RAG evaluation metrics
- Tracing agent runs (LangSmith), logging tool calls
- **Why:** you cannot improve or debug what you cannot measure.

### 15. Guardrails + Output Validation
**File:** `guardrails.md`
- Validating structured outputs, handling refusals, fallback strategies
- Content filtering, prompt-injection awareness
- **Why:** production AI must fail safely, not unpredictably.

---

## Capstone — Build a Transformer From Scratch

For learners whose north star is understanding LLMs at the deepest level:
- Attention mechanism from scratch (numpy, then PyTorch)
- Positional encoding
- Encoder/decoder blocks
- A tiny working transformer

This is optional and sits beyond the applied track — it's the "how does the engine actually work" capstone.

---

## Difficulty Spread

Every problem bank above contains Beginner / Intermediate / Advanced problems (see the Difficulty Standard in `AGENTS.md`). Start at Beginner for each new concept even if you're advanced overall — the goal is fluency, not speed.
