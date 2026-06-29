# Vector Databases

A vector database stores embeddings and lets you search them by similarity. Instead of querying with exact keywords, you query with a vector and ask for the most similar stored vectors.

At its core, a vector database does what a few lines of Python can do: store a list of (text, vector) pairs and compute cosine similarity against a query vector. What a real vector database adds is scale and convenience — fast approximate nearest-neighbor indexing, persistence to disk, metadata filtering, and the ability to handle millions of vectors efficiently.

ChromaDB is a popular choice for learning and small projects because it runs locally with no server and no account. Other options include FAISS (a library, not a full database), Pinecone and Weaviate (hosted services), and pgvector (a PostgreSQL extension).

Metadata filtering is an important feature: you can attach fields like a source filename or category to each vector and restrict a search to only matching items.
