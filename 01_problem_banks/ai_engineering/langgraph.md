# AI Engineering — LangGraph Problem Bank

**Who this is for:** AI Engineer track, after LangChain.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-6 (AI Agents — the agent loop as a graph)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 10
**Setup required:** `pip install langgraph langchain-openai`; `OPENAI_API_KEY` in `.env`

> **Why this matters:** LangGraph is the modern way to build controllable, debuggable agents. Where a raw loop is implicit, LangGraph makes the agent's state and transitions explicit as a graph — which is exactly what you need when agents get complex. You built the loop by hand in `raw_agent_from_scratch.md`; now see it as a graph.

---

## 1. A Two-Node Graph

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Graph state, nodes, edges
**Goal track relevance:** The mental shift from "a loop" to "a state graph" is the core of LangGraph. Start small.
**Dataset:** none

### Goal
Build a LangGraph with a typed state, two nodes (one that calls the model, one that formats the output), connected by an edge from START → call_model → format → END. Run it on a simple prompt.

### Constraints / I/O
- Input: a prompt in the initial state
- Output: the final formatted state
- Edge cases to consider: what the state schema must contain

### Hints
<details><summary>Hint 1</summary>Define state as a `TypedDict`. Each node is a function `state -> partial state update`.</details>
<details><summary>Hint 2</summary>`StateGraph(State)`, `.add_node(...)`, `.add_edge(START, ...)`, `.compile()`, then `.invoke(...)`.</details>

### Acceptance criteria
- [ ] Typed state defined
- [ ] Two nodes wired with edges
- [ ] Graph compiles and runs end-to-end
- [ ] Learner can explain how state flows between nodes

---

## 2. Conditional Routing

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Conditional edges, branching
**Goal track relevance:** Real agents branch — "if the model wants a tool, go to the tool node; otherwise finish." Conditional edges are how LangGraph expresses control flow.
**Dataset:** none

### Goal
Build a graph that classifies a user message as either "question" or "command", then routes to a different node for each using a conditional edge. Each branch produces a different style of response.

### Constraints / I/O
- Input: a user message
- Output: a response from the correct branch
- Edge cases to consider: ambiguous input; a default route

### Hints
<details><summary>Hint 1</summary>`add_conditional_edges(node, router_fn, {"question": ..., "command": ...})` where `router_fn` returns the key.</details>
<details><summary>Hint 2</summary>The router function reads state and returns which branch to take.</details>

### Acceptance criteria
- [ ] Classifier node sets a route in state
- [ ] Conditional edge routes to the correct branch
- [ ] Both branches produce appropriate output
- [ ] A default/fallback path exists

---

## 3. A Tool-Calling Agent Graph with Cycles

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Cyclic graphs, agent loop as a graph
**Goal track relevance:** This is the LangGraph version of the raw agent you built earlier — a model node and a tool node with a cycle between them until the model is done. Seeing the same loop as a graph cements the abstraction.
**Dataset:** none

### Goal
Build an agent graph: a model node that may emit tool calls, a tool node that executes them, and a conditional edge that loops back to the model if there are tool calls or ends if there aren't. Give it the `calculate` and `get_weather` tools and a multi-step goal. Compare to your raw agent from `raw_agent_from_scratch.md`.

### Constraints / I/O
- Input: a goal needing multiple tools
- Output: a final answer after the graph cycles through tool calls
- Edge cases to consider: infinite cycles (recursion limit); tool errors

### Hints
<details><summary>Hint 1</summary>Use `ToolNode` (or a custom tool node) and a conditional edge that checks whether the last message has tool calls.</details>
<details><summary>Hint 2</summary>LangGraph has a recursion limit — the graph equivalent of your max-iterations cap.</details>

### Acceptance criteria
- [ ] Model and tool nodes with a cycle between them
- [ ] Loops until no more tool calls, then ends
- [ ] Solves the multi-step goal correctly
- [ ] Learner maps each graph piece to their raw agent loop
