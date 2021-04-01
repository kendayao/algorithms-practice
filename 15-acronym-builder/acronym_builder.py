def acronym_builder(string):

    stringList=string.split(' ')
    acronymResult=[]

    for word in stringList:
        firstLetter=word[0]
        acronymResult.append(firstLetter.upper())

    return ''.join(acronymResult)

print(acronym_builder('i love programming'))
