def reverse_all(string):
    stringList=string.split(' ')
    reverseString=stringList[::-1]
    reverseArray=[]

    for word in reverseString: 
        reverseArray.append(word)

    result=[]
    for word in reverseArray:
        reverseWord=word[::-1]
        result.append(reverseWord)

    return ' '.join(result)

    
print(reverse_all('just keep swimming'))