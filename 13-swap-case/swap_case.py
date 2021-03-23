def swap_case(string):

    result=[]

    for character in string:
        if character==character.lower():
            result.append(character.upper())
        else:
            result.append(character.lower())
    
    return ''.join(result)


print(swap_case('ImAgInE If i WrOtE LiKe tHiS'))