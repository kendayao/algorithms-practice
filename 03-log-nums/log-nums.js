function logNums(num){

    var result=new Array()
    
    for(var i = 1; i<=num; i++){
        result.push(i)
    }
    return result
}

//5===>1,2,3,4,5

console.log(logNums(5))