const swapCase=(str)=>{

    const result=[]

    for(var i=0; i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
            result.push(str[i].toLowerCase())
        }else{
            result.push(str[i].toUpperCase())
        }
    }

    return result.join('')
}

console.log(swapCase('Luke, I Am Your Father'))