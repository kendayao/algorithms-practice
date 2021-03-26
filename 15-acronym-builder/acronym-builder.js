// Write code to create a function that accepts a string and returns an acronym for the given string

const acronymBuilder=(str)=>{

    const strArry=str.split(' ')
    const acronymResult=[]

    for(let i=0; i<strArry.length; i++){
        const firstLetter=strArry[i].charAt(0)
        acronymResult.push(firstLetter.toUpperCase())
    }

    return acronymResult.join('')
}

console.log(acronymBuilder('i love programming'))