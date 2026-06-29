# Prompt Engineering

Prompt engineering is the practice of writing inputs that reliably get useful outputs from a language model. Because an LLM responds to the exact text it receives, small changes in wording can produce large changes in quality.

A few core techniques: be specific about the desired format and length; provide examples of the input-output pattern you want (called few-shot prompting); assign the model a role or persona in a system prompt; and ask the model to reason step by step for complex problems (called chain-of-thought).

The system prompt is a special instruction that sets the model's behavior for the whole conversation. It is where you define constraints like "only answer questions about Python" or "never reveal the full solution, only hints."

Explicit instructions beat implicit ones. If you need structured output, say so precisely. If the model must refuse certain requests, state the rule clearly. Vague prompts produce unpredictable results; specific prompts produce reliable, buildable output.
