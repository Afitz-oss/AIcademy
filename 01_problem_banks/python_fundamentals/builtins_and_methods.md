# Python Fundamentals — Built-ins and Methods

**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 1 (data types) and Stage 2 (collections — list/dict/set methods)
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).

---

Category	Problem	Suggested Method
Core Built-in Functions	Given a list of integers, return the sum of all even numbers.	sum()
Core Built-in Functions	Return the maximum word length from a list of words.	max()
Core Built-in Functions	Count how many strings in a list are longer than 5 characters.	len()
Core Built-in Functions	Round all floats in a list to 2 decimal places.	round()
Core Built-in Functions	Return the average of a list of numbers, rounded to 2 decimals.	sum()/len()
List Methods	Append a new element to a list and return the updated list.	append()
List Methods	Insert a given number at the 3rd index of a list.	insert()
List Methods	Extend a list with another list of elements.	extend()
List Methods	Remove all instances of a given element from a list.	remove()
List Methods	Reverse a list and return it.	reverse()
String Methods	Capitalize the first letter of each word in a sentence.	title()
String Methods	Count how many times a word appears in a paragraph.	count()
String Methods	Replace all spaces in a string with underscores.	replace()
String Methods	Return only the digits from a given string.	isdigit()
String Methods	Split a sentence into words and sort them alphabetically.	split()/sorted()
Set Methods	Return the unique elements from a list.	set()
Set Methods	Find the intersection of two sets of numbers.	intersection()
Set Methods	Return all items in set A not in set B.	difference()
Set Methods	Add all elements from a list into an existing set.	update()
Set Methods	Check if two sets have any common elements.	isdisjoint()
Dictionary Methods	Create a dictionary from two lists: keys and values.	zip()/dict()
Dictionary Methods	Return the keys of a dictionary sorted alphabetically.	keys()
Dictionary Methods	Count the frequency of words in a sentence using a dictionary.	dict + for-loop
Dictionary Methods	Safely get a value from a dictionary using a key.	get()
Dictionary Methods	Update a dictionary with another dictionaryâ€™s contents.	update()
Comprehensions	Return a list of squares of all even numbers from 0 to 20.	list comprehension
Comprehensions	Create a dictionary mapping each word in a list to its length.	dict comprehension
Comprehensions	Return a set of vowels found in a sentence.	set comprehension
Comprehensions	Return a list of capitalized words from a list of lowercase words.	list comprehension
Comprehensions	Filter and return only numbers divisible by 3 and 5 from 1 to 100.	list comprehension + filter
Loop Helpers & Functional Tools	Use `enumerate` to print the index and value of each item in a list.	enumerate()
Loop Helpers & Functional Tools	Use `zip` to combine two lists into a dictionary.	zip()
Loop Helpers & Functional Tools	Use `map` to convert a list of temperatures from Celsius to Fahrenheit.	map()
Loop Helpers & Functional Tools	Use `filter` to return only positive numbers from a list.	filter()
Loop Helpers & Functional Tools	Use `reduce` to compute the factorial of a given number.	reduce()
Advanced Utility (collections, itertools, functools)	Use `Counter` to find the most common element in a list.	collections.Counter
Advanced Utility (collections, itertools, functools)	Use `defaultdict` to group words by their first letter.	collections.defaultdict
Advanced Utility (collections, itertools, functools)	Use `combinations` to generate all 2-element pairs from a list.	itertools.combinations
Advanced Utility (collections, itertools, functools)	Use `lru_cache` to optimize a recursive Fibonacci function.	functools.lru_cache
Advanced Utility (collections, itertools, functools)	Use `partial` to create a function that multiplies input by 3.	functools.partial
Category	Problem	Suggested Method
Loops	Print numbers from 1 to 10 using a range loop	range()
Loops	Print even numbers between 1 and 100	range() + if %
Loops	Calculate the sum of odd numbers from 1 to 99	range() + % + sum()
Loops	Find the factorial of a number using a while loop	while
Loops	Print numbers from 10 to 1 in reverse order using a while loop	while
Loops	Keep asking for input until the user types "exit"	while True
Loops	Print the multiplication table of a number from 1 to 10	for + range()
Core Built-in Functions	Return the mean of a list of numbers	sum()/len()
Core Built-in Functions	Find how many numbers in a list are divisible by 7	% + len()
Core Built-in Functions	Return the first number in a list that is a multiple of 3 and 5	for + if %
Core Built-in Functions	Count how many numbers in a list are divisible by either 3 or 4	% + count
Lambda Functions	Given a list of strings, return a new list sorted by the last character of each string.	sorted(list, key=lambda x: x[-1])
Lambda Functions	Given a list of numbers, return a new list where each element is multiplied by its index.	list(map(lambda x: x[0] * x[1], enumerate(list)))
