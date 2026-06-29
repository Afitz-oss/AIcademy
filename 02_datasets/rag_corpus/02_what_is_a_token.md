# What Is a Token?

A token is the basic unit of text that a language model reads and writes. Tokens are not exactly words — they are chunks of text produced by a tokenizer. A common word like "the" is usually one token, while a rarer word like "tokenization" might split into several tokens such as "token" and "ization".

As a rough rule of thumb in English, one token is about four characters, and 100 tokens is roughly 75 words. Models have a context window measured in tokens — the maximum number of tokens they can consider at once, including both your input and their output.

Tokens matter for two practical reasons: cost and limits. API providers charge per token, and every model has a maximum context length. Counting tokens (for example with the `tiktoken` library) lets you estimate cost and avoid exceeding the context window.
