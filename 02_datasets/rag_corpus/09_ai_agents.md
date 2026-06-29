# AI Agents

An AI agent is a system that uses a language model to decide which actions to take to accomplish a goal, rather than just producing a single response. At its core, an agent is an LLM placed inside a loop with access to tools.

The basic agent loop is: observe the current state, ask the model what to do next, execute the action (often a tool call), observe the result, and repeat until the goal is reached or a stopping condition is hit. Always cap the number of iterations so a confused agent cannot loop forever.

Tools are functions the agent can call — searching the web, running a calculation, querying a database, or calling another API. The model is given a description of each tool and decides when to use them. This is implemented through function calling.

The ReAct pattern (Reason + Act) has the agent state its reasoning before each action, which makes its behavior easier to debug. More advanced systems use multiple agents: an orchestrator agent delegates subtasks to specialized worker agents and combines their results.

Agents become genuinely useful when combined with memory (to remember context across steps) and error recovery (to retry when a tool fails instead of crashing).
