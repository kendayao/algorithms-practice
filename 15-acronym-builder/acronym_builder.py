def acroynm_builder(string):

    stringList=string.split(' ')
    acronymResult=[]

    for word in stringList:
        firstLetter=word[0]
        acronymResult.append(firstLetter.upper())

    return ''.join(acronymResult)

print(acroynm_builder('i love programming'))
