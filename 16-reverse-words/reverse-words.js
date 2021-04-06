// create a function that takes a string and returns a new string with the order of the words reversed.

const reverseWords=(str)=>{

    const strArray=str.split(' ')
    result=[]

    for(let i=strArray.length-1; i>=0; i--){
        result.push(strArray[i])
    }

    return result.join(' ')
}

console.log(reverseWords('just keep swimming'))

