def title_case(string):

    string_list=string.split(' ')
    
    result=[]
    for word in string_list:
        first_letter=word[0].upper()
        rest_of_word=word[1:len(word)]

        result.append(first_letter+rest_of_word)

    return ' '.join(result)
        


print(title_case('the quick brown fox jumped over the lazy dog'))