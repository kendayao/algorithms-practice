// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

const longestWord=str=>{

    const strArry=str.split(' ')
    let result=''
    
    for(let i=0; i<strArry.length;i++){
        if(strArry[i].length>longestWord.length){
            result=strArry[i]
        }
    }
    return result
}

console.log(longestWord('i love programming'))