def fizzBuzz(numsList):
    for num in numsList:
        if num%3==0 and num%5==0:
            print('Fizz Buzz')
        elif num%3==0:
            print('Fizz')
        elif num%5==0:
            print('Buzz')
        else: 
            print(num)

fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20])