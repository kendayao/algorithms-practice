def factorial(num):

    range_list=list(range(1,num+1))

    count=1

    for num in range_list:
        count=count*num
    
    return count

print(factorial(0))