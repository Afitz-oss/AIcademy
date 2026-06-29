# AI Engineering — Multi-Agent Orchestration Problem Bank

**Who this is for:** AI Engineer track, after LangGraph.
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 11
**Setup required:** `OPENAI_API_KEY` in `.env` (LangGraph optional but recommended)

> **Why this matters:** Complex problems decompose into specialists. The orchestrator/worker pattern — one agent that plans and delegates subtasks to focused worker agents, then combines their results — is how serious agentic systems scale. This is what "proxy agents" means here: an orchestrator standing in front of, and coordinating, worker agents.

---

## 1. Two Specialist Agents

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Agent specialization via system prompts
**Goal track relevance:** Before orchestrating, build the workers. Specialization comes from focused system prompts and tools.
**Dataset:** none

### Goal
Build two single-purpose agents as functions: `researcher(topic)` (gathers facts, returns bullet points) and `writer(notes)` (turns notes into a polished paragraph). Each has its own system prompt. Run them in sequence manually: research a topic, then write it up.

### Constraints / I/O
- Input: a topic
- Output: a polished paragraph built from researched notes
- Edge cases to consider: empty research output; keeping each agent in its lane

### Hints
<details><summary>Hint 1</summary>Each agent is just an LLM call with a distinct, focused system prompt.</details>
<details><summary>Hint 2</summary>The writer's input is the researcher's output — a simple handoff.</details>

### Acceptance criteria
- [ ] Two agents with distinct system prompts
- [ ] Researcher produces structured notes
- [ ] Writer produces prose from those notes
- [ ] Each agent stays within its specialty

---

## 2. The Orchestrator

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Orchestrator/worker delegation
**Goal track relevance:** The orchestrator is the brain — it decides which worker handles what and in what order. This is the heart of multi-agent systems.
**Dataset:** none

### Goal
Build an `orchestrator(goal)` that uses an LLM to break a goal into subtasks, routes each subtask to the right worker agent (researcher, writer, or a new `critic` that reviews drafts), and assembles the final result. Test with: "Write a short, accurate explainer on what embeddings are."

### Constraints / I/O
- Input: a high-level goal
- Output: a final result produced by coordinating workers
- Edge cases to consider: a subtask no worker can handle; ordering dependencies

### Hints
<details><summary>Hint 1</summary>Have the orchestrator output a plan (list of subtask + which worker), then execute it step by step.</details>
<details><summary>Hint 2</summary>Pass results forward — the critic reviews the writer's draft, which may loop back to the writer.</details>

### Acceptance criteria
- [ ] Orchestrator decomposes the goal into subtasks
- [ ] Each subtask routed to the correct worker
- [ ] Results assembled into a final output
- [ ] Handles at least one revision cycle (critic → writer)

---

## 3. Orchestrator as a LangGraph with Shared State

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Multi-agent graph, shared state, supervisor pattern
**Goal track relevance:** Production multi-agent systems are graphs with a supervisor node routing to worker nodes over shared state. This is the scalable, debuggable form.
**Dataset:** none

### Goal
Reimplement the orchestrator as a LangGraph: a supervisor node that decides which worker node to call next based on shared state, worker nodes (researcher, writer, critic), and a conditional edge that loops until the supervisor decides the work is done. Include a step cap.

### Constraints / I/O
- Input: a goal in initial state
- Output: final assembled result from the shared state
- Edge cases to consider: infinite supervisor loops; conflicting worker outputs

### Hints
<details><summary>Hint 1</summary>Shared state holds the goal, intermediate notes, current draft, and critic feedback. The supervisor reads state and returns the next worker's name.</details>
<details><summary>Hint 2</summary>This is the "supervisor" pattern — conditional edges from the supervisor to each worker, all looping back to the supervisor.</details>

### Acceptance criteria
- [ ] Supervisor node routes to workers based on state
- [ ] Worker nodes update shared state
- [ ] Loops until done, with a step cap
- [ ] Produces a coherent final result
- [ ] Learner can explain the supervisor pattern
