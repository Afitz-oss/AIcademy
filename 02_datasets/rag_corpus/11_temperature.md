# Temperature and Sampling

Temperature is a setting that controls how random a language model's output is. It adjusts the probability distribution the model samples from when choosing each next token.

A low temperature (near 0) makes the model deterministic and focused — it almost always picks the most likely next token. This is best for tasks that need consistency and correctness, like extraction, classification, or code generation. A high temperature (near 1 or above) makes the model more random and creative, which is useful for brainstorming or varied writing but increases the risk of errors and incoherence.

Other sampling controls include top-p (nucleus sampling), which limits choices to the smallest set of tokens whose probabilities add up to a threshold, and max_tokens, which caps the length of the response.

A common mistake is leaving temperature high for tasks that need reliability. If you want the same structured answer every time, set temperature to 0 or close to it.
