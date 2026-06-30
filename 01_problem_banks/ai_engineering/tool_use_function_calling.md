# AI Engineering — Tool Use / Function Calling Problem Bank

**Who this is for:** AI Engineer track, after Pydantic + structured outputs.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-6 (AI Agents — function calling is the atomic unit)
**Roadmap:** `09_roadmaps/ai_engineer.md` → step 3
**Setup required:** `OPENAI_API_KEY` in `.env`

> **Why this matters:** An agent is just an LLM with tools attached. Function calling is the mechanism that lets a model reach out of the chat box and *do* things — search, calculate, query a database. This is the atomic unit of agentic AI.

---

## 1. Define and Describe a Single Tool

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Tool schema definition
**Goal track relevance:** Before a model can call a tool, it needs a precise description of what the tool does and what arguments it takes. Getting this schema right is half the battle.
**Dataset:** none

### Goal
Write a Python function `get_weather(city: str) -> str` (it can return a hardcoded fake response) and define the JSON tool schema that describes it to the model — name, description, and parameters.

### Constraints / I/O
- Input: the function + its schema
- Output: a tool schema dict the model can understand
- Edge cases to consider: What makes a good tool description vs. a vague one?

### Hints
<details><summary>Hint 1</summary>The schema needs `name`, `description`, and a `parameters` object using JSON Schema (type, properties, required).</details>
<details><summary>Hint 2</summary>The description is a prompt — be specific. "Get current weather for a city" beats "weather".</details>

### Acceptance criteria
- [ ] Function implemented
- [ ] Valid tool schema with name, description, typed parameters
- [ ] `city` marked as required

---

## 2. Let the Model Choose and Call the Tool

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Function calling round-trip
**Goal track relevance:** The full loop — model decides to call a tool, you execute it, you feed the result back. This round-trip is the heartbeat of every agent.
**Dataset:** none

### Goal
Send the user message `"What's the weather in Tokyo?"` to the model with the `get_weather` tool available. Detect the tool call, execute the real function, send the result back, and get the model's final natural-language answer.

### Constraints / I/O
- Input: a user question that requires the tool
- Output: a final answer that incorporates the tool result
- Edge cases to consider: What if the model answers directly without calling the tool? What if it calls the tool with a bad argument?

### Hints
<details><summary>Hint 1</summary>The response will contain `tool_calls`. Parse the function name and JSON arguments.</details>
<details><summary>Hint 2</summary>After executing, append a message with role `tool` (including the `tool_call_id`) and call the model again.</details>

### Acceptance criteria
- [ ] Model's tool call is detected and parsed
- [ ] Real function executed with the model's arguments
- [ ] Result fed back; model produces a final answer
- [ ] Handles the case where no tool is called

---

## 3. Multiple Tools + Tool Router

**Difficulty:** Advanced
**Stage:** AI Engineering
**Pattern / topic:** Multi-tool dispatch, argument validation
**Goal track relevance:** Real agents have many tools. The model must pick the right one, and you must dispatch and validate robustly.
**Dataset:** none

### Goal
Give the model three tools: `get_weather(city)`, `calculate(expression)`, and `search_wiki(query)`. Build a dispatcher that routes the model's chosen tool to the right Python function, validates arguments with Pydantic, and loops until the model produces a final answer (no more tool calls). Test with a question that requires two tools in sequence.

### Constraints / I/O
- Input: a question requiring one or more tools
- Output: final answer after all needed tool calls
- Edge cases to consider: chained tool calls, invalid arguments, infinite loops (cap iterations)

### Hints
<details><summary>Hint 1</summary>Keep a `dict` mapping tool name → Python callable. Validate args with a Pydantic model per tool before executing.</details>
<details><summary>Hint 2</summary>Wrap the whole thing in a `while` loop with a max-iteration guard. Break when the response has no `tool_calls`.</details>

### Acceptance criteria
- [ ] Three tools defined with schemas
- [ ] Dispatcher routes to the correct function
- [ ] Arguments validated before execution
- [ ] Loop handles multiple sequential tool calls with an iteration cap
