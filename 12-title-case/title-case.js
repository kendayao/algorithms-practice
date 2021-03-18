// create a function that capitalizes the first letter of every word in a given string.

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

console.log(titleCase('a lannister always pays his debts'))