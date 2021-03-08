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


const fizzBuzz=(arry)=>{
    result=[]

    for(var i=0; i<arry.length; i++){
        if(arry[i]%3==0 && arry[i]%5==0){
            result.push('Fizz Buzz')
        }else if(arry[i]%3==0){
            result.push('Fizz')
        }else if(arry[i]%5==0){
            result.push('Buzz')
        }else{
            result.push(arry[i])
        }
    }
    return result
}

const maxNum=(arry)=>{
    var largestNum=0
    for(var i=0; i<arry.length; i++){
        if(arry[i]>largestNum){
            largestNum=arry[i]
        }
    }
    return largestNum
}

const vowelCount=(str)=>{
    var lower_case=str.toLowerCase()
  
    var count=0
    for (var i=0;i<lower_case.length;i++){
        if (lower_case[i]==='a' || lower_case[i]==='e'||lower_case[i]==='i'||lower_case[i]==='o'||lower_case[i]==='u'){
            count=count+1
        }
    }
    return count
}


module.exports={
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    oddOrEven:oddOrEven,
    logNums: logNums,
    sumArray: sumArray,
    fizzBuzz: fizzBuzz,
    maxNum: maxNum,
    vowelCount: vowelCount
}