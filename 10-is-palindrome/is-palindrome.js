const isPalindrome=(str)=>{

    const reverseString=[]

    for(var i=str.length-1; i>=0; i--){
        reverseString.push(str[i])
    }

    if(reverseString.join('')==str){
        return true
    }else{
        return false
    }

}

console.log(isPalindrome('engage'))