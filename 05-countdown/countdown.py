def countdown(num):
    numList=list(range(1,num+1))
    
    numListReversed=numList[::-1]

    for x in numListReversed:
        print(x)

countdown(25)