const reverseAll=(str)=>{

    const strArray=str.split(' ')
    const reverseArray=[]
    
    for(let i=strArray.length-1; i>=0;i--){
        reverseArray.push(strArray[i])
    }

    const result=[]
    for(let i=0; i<reverseArray.length; i++){
        var word=reverseArray[i]
        result.push(word.split('').reverse().join(''))
    }

    return result

}

console.log(reverseAll('just keep swimming'))