def reverseAll(string):
    stringList=string.split(' ')
    reverseArray=[]

    for word in stringList: 
        reverseArray.append(word)

    result=[]
    for word in reverseArray:
        reverseWord=word[::-1]
        result.append(reverseWord)

    return ' '.join(result)

    
print(reverseAll('just keep swimming'))