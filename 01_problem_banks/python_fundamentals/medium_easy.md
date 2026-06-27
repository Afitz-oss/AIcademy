Problem 2: Common Elements Finder
Data Structure	Problem	Suggested Method
Lists	Loop through two lists and find elements that exist in both.	for-loop + in
Sets	Convert lists to sets and find the intersection.	set() + intersection()
Lists	Remove duplicates from the common elements.	set()
Lists	Sort the resulting list in ascending order.	sorted()
Problem 3: Even/Odd Sum Calculator
Data Structure	Problem	Suggested Method
Lists	Loop through a list and check if each number is even or odd.	for-loop + % 2
Lists	Loop through a list and sum all even numbers.	for-loop + if + accumulator
Lists	Loop through a list and sum all odd numbers.	for-loop + if + accumulator
Tuples	Return multiple values (even_sum, odd_sum, difference) as a tuple.	return (a, b, c)
Problem 4: Group Words by Length
Data Structure	Problem	Suggested Method
Lists	Loop through a list of words and get each word's length.	for-loop + len()
Dictionaries	Check if a key (length) exists in a dictionary before adding.	if key in dict
Dictionaries	Add a new key with an empty list as value if key doesn't exist.	dict[key] = []
Dictionaries	Append words to the list value for their corresponding length key.	dict[key].append()
Problem 5: Merge Dictionaries with Sum
Data Structure	Problem	Suggested Method
Dictionaries	Create a copy of the first dictionary to avoid modifying the original.	dict.copy()
Dictionaries	Loop through the second dictionary's key-value pairs.	for key, val in dict.items()
Dictionaries	Check if a key from dict2 exists in the result dictionary.	if key in dict
Dictionaries	Add values together if key exists, otherwise set the new key-value.	dict[key] += val or dict[key] = val
Quick Reference Summary
Problem	Primary Data Structures	Core Methods
2 - Common Elements	Lists, Sets	set(), intersection(), sorted()
3 - Even/Odd Sum	Lists, Tuples	% 2, for-loop, tuple return
4 - Group by Length	Lists, Dictionaries	len(), dict[key].append()
5 - Merge & Sum	Dictionaries	.copy(), .items(), if key in dict