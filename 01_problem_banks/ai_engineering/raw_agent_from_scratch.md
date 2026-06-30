# AI Engineering — Build a Raw Agent (No Frameworks) Problem Bank

**Who this is for:** AI Engineer track, after tool use and memory patterns.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-6 (AI Agents — the observe → think → act loop)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 5
**Setup required:** `OPENAI_API_KEY` in `.env`

> **Why this matters:** Build the agent loop by hand once and every framework afterward (LangChain, LangGraph) becomes obvious instead of magical. An agent is not a mystery — it's a loop: observe, think, act, repeat.

---

## 1. The Minimal Agent Loop

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** The observe-think-act loop
**Goal track relevance:** This loop is the skeleton of every AI agent ever built. Internalize it here.
**Dataset:** none

### Goal
Write an agent loop that takes a goal, calls the LLM, and if the LLM requests a tool (using your function-calling code from earlier), executes it, feeds the result back, and repeats — until the LLM returns a final answer. Use a single tool: `calculate(expression)`. Give it the goal `"What is 17% of 2,340, then add 91?"`.

### Constraints / I/O
- Input: a goal string
- Output: the final answer after the loop completes
- Edge cases to consider: max iterations to prevent infinite loops

### Hints
<details><summary>Hint 1</summary>`while iterations < MAX:` → call model → if tool_calls, execute and append; else return content.</details>
<details><summary>Hint 2</summary>Always cap iterations. An agent that never stops is a bug, not a feature.</details>

### Acceptance criteria
- [ ] Loop calls the model, executes tools, feeds results back
- [ ] Terminates with a final answer
- [ ] Iteration cap prevents infinite loops
- [ ] Correct answer to the multi-step math goal

---

## 2. A ReAct-Style Agent with Reasoning Traces

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** ReAct (Reason + Act), visible thought
**Goal track relevance:** Production agents log their reasoning so you can debug *why* they did something. ReAct is the canonical pattern.
**Dataset:** none

### Goal
Build an agent that, on each step, produces a visible "Thought" (its reasoning), then an "Action" (tool call), then observes the "Observation" (result). Print the full trace. Give it two tools (`calculate`, `get_weather`) and a goal that needs both.

### Constraints / I/O
- Input: a goal requiring multiple tools
- Output: a readable Thought → Action → Observation trace + final answer
- Edge cases to consider: the model skipping the thought; malformed actions

### Hints
<details><summary>Hint 1</summary>Instruct the model in the system prompt to always state its reasoning before acting.</details>
<details><summary>Hint 2</summary>Print each step as you loop so you can watch the agent think.</details>

### Acceptance criteria
- [ ] Each step shows reasoning before the action
- [ ] Full trace printed
- [ ] Uses both tools appropriately
- [ ] Produces a correct final answer

---

## 3. Agent with Memory + Self-Correction

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Stateful agent, error recovery
**Goal track relevance:** Real agents remember context across the run and recover when a tool errors instead of crashing. This is the difference between a demo and something usable.
**Dataset:** none

### Goal
Combine the agent loop with conversation memory (from `memory_patterns.md`) and add error recovery: if a tool raises an exception, feed the error message back to the model so it can retry with corrected arguments. Test by giving `calculate` a malformed expression the model must fix.

### Constraints / I/O
- Input: a goal where the first tool attempt will fail
- Output: the agent recovers, retries, and succeeds
- Edge cases to consider: repeated failures (cap retries), unrecoverable errors

### Hints
<details><summary>Hint 1</summary>Wrap tool execution in try/except; on failure, append a `tool` message containing the error text.</details>
<details><summary>Hint 2</summary>Track retry count per tool call so a permanently broken tool doesn't loop forever.</details>

### Acceptance criteria
- [ ] Agent retains memory across the run
- [ ] Tool errors are fed back, not fatal
- [ ] Agent self-corrects and completes the goal
- [ ] Retry cap prevents infinite failure loops
