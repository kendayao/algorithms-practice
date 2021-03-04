def fizzBuzz(numsList):

    result=[]

    for num in numsList:
        if num%3==0 and num%5==0:
            result.append('Fizz Buzz')
        elif num%3==0:
            result.append('Fizz')
        elif num%5==0:
            result.append('Buzz')
        else: 
            result.append(num)
    
    return result

print(fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20]))