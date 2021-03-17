const factorial=(num)=>{

    var count=1
    for(var i=1; i<=num; i++){
        count=count*i
    }

    return count
}

console.log(factorial(6))

