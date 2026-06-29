# Hallucination

A hallucination is when a language model produces text that is fluent and confident but factually wrong or unsupported. Because LLMs generate plausible continuations rather than retrieving verified facts, they can invent citations, statistics, function names, or events that do not exist.

Hallucinations happen because the model is optimized to produce likely-sounding text, not to know the boundary of its own knowledge. When asked about something outside its training or beyond what it actually learned, it may fill the gap with a confident guess.

Several techniques reduce hallucination. Retrieval-augmented generation grounds answers in real retrieved documents. Instructing the model to say "I don't know" when the context lacks the answer helps. Asking for citations makes claims checkable. Lowering the temperature makes output more conservative. And evaluation harnesses catch hallucinations before they reach users.

It is important to understand that no technique eliminates hallucination entirely. Production AI systems must assume the model can be wrong and design guardrails, validation, and human review accordingly.
