var add = function(num1, num2){
    return num1+num2
}

var subtract = function(num1, num2){
    return num1-num2
}

var multiply = function(num1, num2){
    return num1*num2
}

var divide = function(num1, num2){
    return num1/num2
}

const oddOrEven=num=>{
    if(num%2===0){
        return ('EVEN')
    }else{
        return ('ODD')
    }
    
}

const logNums = (num)=>{
    var result=new Array()
    
    for(var i = 1; i<=num; i++){
        result.push(i)
    }
    return result
}

const sumArray=(arry)=>(
    arry.reduce((accumalator, currentValue)=>(
        accumalator+currentValue
    ))
)


module.exports={
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    oddOrEven:oddOrEven,
    logNums: logNums,
    sumArray: sumArray
}