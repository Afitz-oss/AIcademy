from typing import Any


from os import name
from numpy.ma import count
import pandas as pd



nums_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,9,9,9]
nums_list_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,9,9,9]
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3]]
long_time_no_even = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,102]
words_list = ['apple', 'banana', 'cherry', 'date', 'elderberry','apple', 'ice', 'ice', 'ice']
student_scores = {'Alice': 85, 'Bob': 90, 'Charlie': 78, 'David': 92, 'Eve': 88}
country_capitals = {'USA': 'Washington D.C.', 'France': 'Paris', 'Japan': 'Tokyo', 'Germany': 'Berlin', 'Italy': 'Rome'}
texts = "Hello, world!"
stock_prices = {'AAPL': 150.75, 'GOOG': 2820.46, 'MSFT': 235.77}
sold_products = ['AAPL', 'GOOG', 'MSFT', 'AAPL', 'GOOG', 'MSFT', 'AAPL', 'GOOG', 'MSFT']
grades = [
    ("Alice", 90),
    ("Bob", 85),
    ("Alice", 95),
    ("Charlie", 78),
    ("Bob", 82),
    ("Alice", 88)
]
list_hash = [100, 4, 200, 1, 3, 2]
list_of_cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']
sales = [
    ("apple", 5),
    ("banana", 3),
    ("apple", 2),
    ("orange", 4),
    ("banana", 1)
]
anagram_list = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

word_dict_key = {'Turtle': 'Turtle', 'Rab': 'Rabbit', 'Snake': 'Snake', 'Li': 'Lion', 'ger': 'Tiger'}
set_of_words = {'Turtle', 'Rabbit', 'Snake', 'Lion', 'Tiger'}
set_of_nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
set_of_nums_2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13,14,15,16,17,18,19,20}
tuple_of_words = ('Turtle', 'Rabbit', 'Snake', 'Lion', 'Tiger')
tuple_name_age = ('John', 25), ('Jane', 30), ('Jim', 35)


# ---- Beginner Questions

#1 list freq count

def freq_counter(words: list) -> dict:
    empt_dict = {}
    for word in words:
        if word not in empt_dict:
            empt_dict[word] = 1
        else:
            empt_dict[word] += 1

    return empt_dict


freq_result = freq_counter(words_list)

print(freq_result)

def flipper(word_dict: dict):
    return {key:val for val, key in word_dict.items()}

flipped_results = flipper(word_dict_key)

print(flipped_results)

def dict_grades(grades: list) -> dict:
    empt_dict = {}

    for flat_grades in grades:
        key = flat_grades[0]
        val = flat_grades[1]
        empt_dict[key] = val
    return empt_dict

grade_results = dict_grades(grades)
print(grade_results)


class BankAccount:
    def __init__(self, __balance: int):
        self.__balance = __balance

    def deposit(self, amount: int):
        added_money = self.__balance + amount
        return added_money

    def withdraw(self, amount: int):
        take_money = self.__balance - amount
        return take_money

class SavingsAccount(BankAccount):
    def __init__(self, __balance):
        super().__init__(__balance)

    def add_interest(self, interest = .03):
        interest = self.__balance * interest

class CheckingAccount(BankAccount):
    def __init__(self, __balance):
        super().__init__(__balance)

    def overdraft(self, amount):
        if self.__balance < amount:
            raise ValueError("Get your bread up dawg")

Akims_bank = BankAccount(1000)

print(Akims_bank.deposit(100000000))