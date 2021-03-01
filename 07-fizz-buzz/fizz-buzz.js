// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

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

console.log(fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20]))