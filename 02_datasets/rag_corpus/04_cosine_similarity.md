# Cosine Similarity

Cosine similarity measures how similar two vectors are by looking at the angle between them rather than their length. It is the most common way to compare embeddings.

The value ranges from -1 to 1. A score near 1 means the vectors point in nearly the same direction (very similar meaning), a score near 0 means they are unrelated (perpendicular), and a score near -1 means they point in opposite directions.

The formula is the dot product of the two vectors divided by the product of their magnitudes. In numpy: `np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))`.

Cosine similarity is preferred over raw distance for text embeddings because it ignores magnitude and focuses on direction — two documents about the same topic should be considered similar even if one is much longer than the other.
