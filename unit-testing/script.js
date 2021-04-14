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

const factorial=(num)=>{

    var count=1
    for(var i=1; i<=num; i++){
        count=count*i
    }

    return count
}

const titleCase=(str)=>{

    const strArry=str.split(' ')
    const result=[]
    for(var i=0; i<strArry.length; i++){
        const firstLetter=strArry[i][0].toUpperCase()
        const restOfWord=strArry[i].substring(1, strArry[i].length)
        result.push(firstLetter+restOfWord)
    }

    return result.join(' ')
}

const swapCase=(str)=>{
    result=[]
    for(var i=0; i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
            result.push(str[i].toLowerCase())
        }else{
            result.push(str[i].toUpperCase())
        }
    }
    return result.join('')
}

const longestWord=str=>{

    const strArry=str.split(' ')
    let result=''
    
    for(let i=0; i<strArry.length;i++){
        if(strArry[i].length>result.length){
            result=strArry[i]
        }
    }
    return result
}

const acronymBuilder=(str)=>{

    const strArry=str.split(' ')
    const acronymResult=[]

    for(let i=0; i<strArry.length; i++){
        const firstLetter=strArry[i].charAt(0)
        acronymResult.push(firstLetter.toUpperCase())
    }

    return acronymResult.join('')
}

const reverseWords=(str)=>{

    const strArray=str.split(' ')
    result=[]

    for(let i=strArray.length-1; i>=0; i--){
        result.push(strArray[i])
    }

    return result.join(' ')
}

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

    return result.join(' ')
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
    vowelCount: vowelCount,
    isPalindrome: isPalindrome,
    factorial: factorial,
    titleCase: titleCase,
    swapCase: swapCase,
    longestWord: longestWord,
    acronymBuilder: acronymBuilder,
    reverseWords: reverseWords,
    reverseAll: reverseAll
}