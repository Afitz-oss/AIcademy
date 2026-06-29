# What Is an Embedding?

An embedding is a list of numbers (a vector) that represents the meaning of a piece of text. Text with similar meaning produces vectors that are close together in space, while unrelated text produces vectors that are far apart.

Embeddings let computers measure semantic similarity. The word "car" and the word "vehicle" never share letters, so keyword search treats them as unrelated — but their embeddings are close, so semantic search recognizes them as similar.

Embeddings are produced by embedding models, which can be hosted (like OpenAI's text-embedding-3-small) or run locally (like sentence-transformers models). Different models produce vectors of different sizes, called dimensions — for example 384 or 1536. You cannot directly compare vectors produced by two different models.

Embeddings power semantic search, recommendation systems, clustering, and retrieval-augmented generation.
