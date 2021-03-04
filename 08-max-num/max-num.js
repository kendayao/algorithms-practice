// Write code to return the largest number in the given array

const maxNum=(arry)=>{

    var largestNum=0

    for(var i=0; i<arry.length; i++){
        if(arry[i]>largestNum){
            largestNum=arry[i]
        }
    }
    return largestNum

}

console.log(maxNum([2, 3, -2, 99, 100, 2222, 321]))