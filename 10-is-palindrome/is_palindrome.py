
def is_palindrome(word):

    string_list=[letter for letter in word]
    reverse_list=string_list[::-1]
    reverse_word=''.join(reverse_list)
    
    if reverse_word==word:
        return True
    else:
        return False

print(is_palindrome('engage'))

