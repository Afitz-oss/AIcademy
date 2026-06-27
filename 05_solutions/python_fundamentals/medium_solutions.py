def pattern_count(pattern: str, text: str):
    count = 0 

    for i in range(len(text) - len(pattern) + 1):
        if text[i:i+len(pattern)] == pattern:
            count += 1
    return count

print(pattern_count('ab', 'ababababab'))


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def times_two(numbers: list):
    for i in range(len(numbers)):
        numbers[i] *= 2
    return numbers

print(times_two(numbers))

float_and_nums = [1, 2.5, 3, 4.6, 5, 6.7, 7, 8.8, 9, 10.9]

def accept_floats(nums: list):
    for i in range(len(nums)):
        if type(nums[i]) == float:
            nums[i] = int(nums[i])
    return nums

print(accept_floats(float_and_nums))


dict_of_nums = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 11}

dict_of_nums2 = {'a': 5, 'b': 2, 'c': 7, 'd': 4, 'e': 5, 'f': 6}

def match_dict(dict1: dict, dict2: dict):
    result = dict1.copy()  # Create a copy to avoid modifying original
    for key in dict1:
        if key in dict2:
            result[key] = dict1[key] + dict2[key]
    return result

print(match_dict(dict_of_nums, dict_of_nums2))


