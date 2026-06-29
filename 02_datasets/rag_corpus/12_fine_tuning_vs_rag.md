# Fine-Tuning vs. RAG

Fine-tuning and retrieval-augmented generation (RAG) are two different ways to make a language model useful for your specific needs, and they solve different problems.

Fine-tuning continues training a base model on your own examples so it learns a new style, format, or behavior. It changes the model's weights. Fine-tuning is good for teaching a consistent tone, a specialized output format, or a narrow task, but it is expensive, slow to update, and does not reliably add new factual knowledge.

RAG leaves the model unchanged and instead supplies relevant information at query time by retrieving documents and putting them in the prompt. RAG is good for factual knowledge that changes often, because you update the documents instead of retraining. It also makes answers traceable to sources.

A practical rule: use RAG when the problem is knowledge ("the model needs to know facts from my documents") and fine-tuning when the problem is behavior ("the model needs to respond in a specific way"). The two can be combined — a fine-tuned model that also uses retrieval.
