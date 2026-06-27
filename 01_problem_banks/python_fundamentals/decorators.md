def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()    # adds shouting behavior
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

greet("alice")  # returns "HELLO ALICE"