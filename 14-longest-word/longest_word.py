def longest_word(string):

    stringList=string.split(' ')
    result=''
    
    for word in stringList:
        if(len(word)>len(result)):
            result=word

    return result

print(longest_word('i love programming'))