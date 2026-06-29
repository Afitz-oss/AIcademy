# Retrieval-Augmented Generation (RAG)

Retrieval-augmented generation (RAG) is a technique that gives a language model access to external knowledge it was not trained on. Instead of relying only on what the model memorized during training, RAG retrieves relevant documents at query time and includes them in the prompt.

A RAG pipeline has two halves. The indexing half (done once, ahead of time) reads documents, splits them into chunks, embeds each chunk, and stores the chunks in a vector database. The retrieval-and-generation half (done per question) embeds the user's question, retrieves the most relevant chunks, inserts them into the prompt as context, and asks the model to answer using only that context.

RAG reduces hallucination because the model is grounded in real retrieved text rather than guessing from memory. It also lets you update knowledge by changing the documents instead of retraining the model.

The quality of a RAG system depends heavily on retrieval quality. If the wrong chunks are retrieved, even a perfect model will produce a wrong or unsupported answer.
