const functions=require('./script.js')

describe('Arithmetic (add, subtract, multiply, divide)', ()=>{
    test('Adds 10 and 24 to equal 34', ()=>{
        expect(functions.add(10,24)).toBe(34)
    })
    test('Subtracts 100 and 91 to equal 9', ()=>{
        expect(functions.subtract(100,91)).toBe(9)
    })
    test('Mulitplies 7 and 70 to equal 490', ()=>{
        expect(functions.multiply(7,70)).toBe(490)
    })
    test('Divides 33 and 11 to equal 3', ()=>{
        expect(functions.divide(33,11)).toBe(3)
    })
})

describe('Odd or Even',()=>{
    test('should return the string even if the num is divisible by 2',()=>(
        expect(functions.oddOrEven(1002)).toBe('EVEN')
    ))
    test('should return the string odd if the num is not divisible by 2',()=>(
        expect(functions.oddOrEven(777)).toBe('ODD')
    ))
})

describe('Log Numbers',()=>{
    test('returns an array with numbers 1 to num',()=>(
        expect(functions.logNums(10)).toEqual([1,2,3,4,5,6,7,8,9,10])
    ))
})

describe('Sum Array',()=>{
    test('return the sum of all the numbers in the array', ()=>{
        expect(functions.sumArray([4, 8, 15, 16, 23, 42])).toBe(108)
    })
})

describe('Fizz Buzz',()=>{
    test('returns an array with numbers divisible by 3 and 5 display FizzBuzz, numbers divisible by 3 display Fizz, and numbers divisible by 5 display Buzz',()=>{
        expect(functions.fizzBuzz([13, 14, 15, 16, 17, 18, 19, 20])).toEqual([13,14,'Fizz Buzz', 16, 17, 'Fizz', 19, 'Buzz'])
    })
})

describe('Max Number',()=>{
    test('returns the largest number in the array',()=>{
        expect(functions.maxNum([2, 3, -2, 99, 100, 2222, 321])).toBe(2222)
    })
})

describe('Vowel Count', ()=>{
    test('should return the number 3 when given the string programmer',()=>{
        expect(functions.vowelCount('programmer')).toBe(3)
    })
    test('should return the number 8 when given the string I think, therefore I am.',()=>{
        expect(functions.vowelCount('I think, therefore I am.')).toBe(8)
    })
    test('should return the number 3 when given the string ""',()=>{
        expect(functions.vowelCount('')).toBe(0)
    })
})

describe('Is Palindrome', ()=>{
    test('should return false when given the string engage',()=>{
        expect(functions.isPalindrome('engage')).toBe(false)
    })
    test('should return false when given the string radar',()=>{
        expect(functions.isPalindrome('radar')).toBe(true)
    })
})

describe('Factorial', ()=>{
    test('should return the factorial of 6 which is 720',()=>{
        expect(functions.factorial(6)).toBe(720)
    })
    test('should return the factorial of 3 which is 6',()=>{
        expect(functions.factorial(3)).toBe(6)
    })
    test('should return the factorial of 0 which is 1',()=>{
        expect(functions.factorial(1)).toBe(1)
    })
})

describe('Title Case',()=>{
    test('should return a string with the first letter of each word capiltalized',()=>{
        expect(functions.titleCase('a lannister always pays its debts')).toEqual('A Lannister Always Pays Its Debts')
    })
})

describe('Swap Case', ()=>{
    test('should return the same strung but capital letters are reveresd',()=>{
        expect(functions.swapCase('Luke, I Am Your Father')).toEqual('lUKE, i aM yOUR fATHER')
    })
})

describe('Longest Word', ()=>{
    test('given the string "i love programming" should return the longest word "programming"',()=>{
        expect(functions.longestWord('i love programming')).toBe('programming')
    })
})

describe('Acronym Builder', ()=>{
    test('given the string "i love programming" should return the acronym "ILP"',()=>{
        expect(functions.acronymBuilder('i love programming')).toBe('ILP')
    })
})


