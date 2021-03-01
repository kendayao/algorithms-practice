// Write code to add all the numbers in `arr` and return the total

const sumArray=(arry)=>{
    // for loop method
    var counter=0;
    for(var i=0; i<arry.length; i++){
        counter+=arry[i]
    }
    return counter

    // reduce method
    // return (arry.reduce((accumalator, currentValue)=>(
    //     accumalator+currentValue
    // )))
}

console.log(sumArray([4, 8, 15, 16, 23, 42]))