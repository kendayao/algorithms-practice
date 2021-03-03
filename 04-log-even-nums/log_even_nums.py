def logEvenNums(num):
    result=[]
    for x in range(0,num):
       if x%2==0:
           result.append(x)

    return result
       

print(logEvenNums(25))