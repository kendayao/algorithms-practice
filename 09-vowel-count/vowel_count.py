# // Write code to return the the number of vowels in `str`

def vowelCount(str):

    count=0
    
    for letter in str.lower():
        if letter in ['a','e','i','o','u']:
            count=count+1
        else:
            pass
       

    return count


print(vowelCount(''))