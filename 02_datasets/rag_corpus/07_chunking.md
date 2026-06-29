# Chunking

Chunking is the process of splitting a long document into smaller pieces before embedding them for retrieval. Chunking is necessary because documents are often too long to fit in a model's context window, and because retrieving a whole document when only one paragraph is relevant wastes tokens and dilutes the answer.

A chunk size that is too large reduces retrieval precision — the relevant sentence is buried among irrelevant text. A chunk size that is too small loses context — a chunk may not contain enough surrounding information to be meaningful on its own. Common chunk sizes range from 100 to 500 tokens.

Overlap is the practice of sharing some tokens between neighboring chunks. Without overlap, a chunk boundary might cut a sentence or idea in half, losing the connection. With an overlap of, say, 50 tokens, the end of one chunk repeats at the start of the next, preserving context across boundaries.

Good chunking strategies often respect natural boundaries like paragraphs or sentences rather than cutting blindly at a fixed token count.
