def reverse_words(string):

    stringList=string.split(' ')
    reverseString=stringList[::-1]
    result=[]

    for word in reverseString:
        result.append(word)

    return ' '.join(result)


print(reverse_words('just keep swimming'))