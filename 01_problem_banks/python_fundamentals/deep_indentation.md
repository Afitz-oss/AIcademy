# Python Fundamentals — Deep Indentation (Nested Logic)

**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 1 (conditionals — if/elif/else) and Stage 2 (loops). Drill in reading nested control flow line by line.
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).

---

## Nested Divisibility Checker
Iterate through numbers 1–50.

For each number, if it is divisible by 2, print a message.
Within that block:
If it is divisible by 3, print a secondary message.
Further, if it is divisible by 5, print a tertiary message.
Else: Print that the number is odd.
(Focus on nesting the if statements correctly.)
Even–Odd String Labeler
Create a list of numbers 1–20 as strings.

For each number, use a for loop with nested conditions:
Append "even" if the number is even, or "odd" if not.
If the number is divisible by 7, also append "lucky".
Finally, print each string with its labels.
Nested List Sum Filter
Given a nested list of integers (a list of lists),

Use nested for loops to iterate over each sublist and each integer.
If an integer is even and greater than 10, add it to a running total.
Print the final sum for each sublist and an overall sum.
Character Classification and Counting
Given a string input,

Iterate through each character with a for loop.
Use nested if conditions to classify each character as a vowel or a consonant, and as uppercase or lowercase.
Maintain counts in a dictionary (or two separate ones) and print the results.
Matrix Diagonal Evaluator
Given a square matrix (list of lists),

Use nested for loops to traverse the matrix.
If an element lies on the main diagonal, check whether it’s even.
Count and print how many even numbers are on the diagonal.
Conditional Multiplication Table
Generate a multiplication table for numbers 1–10 using nested loops.

For each product:
If the product is even, format it one way.
Else if it is odd, use another format.
If the product is divisible by 5, add an extra marker (like an asterisk).
Ensure proper indentation for each condition.
Nested Dictionary Iteration
Given a dictionary where each value is another dictionary (e.g., configuration settings),

Use a for loop to iterate over the outer dictionary.
Within that, iterate over each inner dictionary’s keys and values.
If a value exceeds a certain threshold (e.g., > 50), print the full key path.
Permutations with Conditions
Write a program to generate all permutations of a given string’s characters using nested for loops.

If a permutation starts with a vowel, print it; otherwise, skip it.
Focus on the nested loop structure and conditional checks.
Prime Number Finder
Find all prime numbers between 2 and 50 using nested loops.

For each candidate number, check divisibility by all numbers from 2 up to its square root.
Use nested loops with proper indentation to determine and print primes.
Enhanced FizzBuzz
Extend the classic FizzBuzz problem for numbers 1–100.

If a number is a multiple of 3, print “Fizz”.
If a multiple of 5, print “Buzz”.
If it’s a multiple of both, print “FizzBuzz”.
Additionally, if the number is prime and a multiple of 3, print “PrimeFizz” (nested within the multiple-of-3 check).
Multi-Criteria List Filtering
Given a list of integers,

Iterate with a for loop and use nested if conditions to filter numbers that are:
Greater than 10,
Even,
Not divisible by 4.
Append qualifying numbers to a new list and print it.
Word Length and Vowel Checker
Given a list of words,

For each word, use nested conditions to check:
If the word’s length is greater than 5,
If it contains at least 2 vowels,
If it starts with a consonant.
Print each word that meets all criteria along with its length.
Sorting Tuples with Multi-Level Conditions
Given a list of tuples in the form (name, age, score),

Write a sorting algorithm using nested for loops (like a selection sort) that orders the list by:
Age in ascending order, and then by score in descending order for matching ages.
Ensure your nested loops and if conditions are indented properly.
Pattern Generation with Nested Loops
Create a program that prints a pyramid pattern using nested loops.

If the current level is even, print numbers;
If it is odd, print stars.
Experiment with several layers of nesting to generate the desired pattern.
CSV Student Record Filter
Assume you have a CSV file containing student records (e.g., name, math, science, english scores).

Read the file and iterate over the rows with a for loop.
Use nested if statements to print details of students who:
Score above 80 in Math,
Score below 70 in Science,
Belong to a specific grade (e.g., “Grade 10”).
Focus on proper indentation for each condition.
Line Processing with Multiple Conditions
Write a program to process a text file line by line.

For each line, check with a for loop:
If the line contains keyword A,
Within that: if it also contains keyword B, count and print the line along with its number.
Ensure the nested if conditions are clearly indented.
Game Round Simulator
Simulate 10 rounds of a game using a for loop.

For each round:
If the round number is a multiple of 3, print a special event message.
If the round is even, adjust a score variable.
If the round is also prime, print an extra bonus message.
Use nested conditions to manage these checks.
Multi-Layered Data Validation
Given a list of dictionaries representing user data (e.g., name, age, email),

Iterate through each dictionary with a for loop.
If required keys exist, validate each one using nested if statements (for example:
Age must be between 18 and 65,
Email must contain “@”).
Print detailed error messages for any invalid entries.
Sales Data Aggregator
Imagine you have a nested list where each sublist represents sales data for a region.

Use nested loops to compute:
The total sales per region,
The overall average sales,
If a region’s total exceeds a threshold, print the individual sales figures contributing to that total.
Focus on maintaining clear nesting and indentation.
Dynamic Menu System
Create a text-based dynamic menu system using a for loop.

Display multiple options.
If a user selects an option, use nested if statements to check for valid sub-options and perform actions.
Provide clear feedback messages for each choice, ensuring each nested block is properly indented.
