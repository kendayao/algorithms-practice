// Write code to return the the number of vowels in `str`

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

console.log(vowelCount('I think, therefore I am'))