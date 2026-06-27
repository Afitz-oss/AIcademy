| Category                            | Problem                                                                                                | Suggested Method                                 |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Aggregation with list comprehension | Compute the sum of all even numbers squared from a list.                                               | `sum(x**2 for x in numbers if x % 2 == 0)`       |
| Aggregation with list comprehension | Compute the product of all numbers cubed in a list.                                                    | Use a loop (`for x in numbers: product *= x**3`) |
| Aggregation with list comprehension | Create a list of numbers from another list where each element is squared only if it’s greater than 10. | `[x**2 for x in numbers if x > 10]`              |
| Aggregation with list comprehension | Find the sum of cubes of all odd numbers in a list.                                                    | `sum(x**3 for x in numbers if x % 2 != 0)`       |
| Aggregation with list comprehension | Create a list containing the cube of each number minus 1.                                              | `[x**3 - 1 for x in numbers]`                    |
