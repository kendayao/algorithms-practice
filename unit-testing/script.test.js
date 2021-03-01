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


