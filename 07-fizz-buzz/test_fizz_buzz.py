import unittest
from fizz_buzz import fizzBuzz

class Test(unittest.TestCase):
    def test_fizz_buzz(self):
        numsList=[13, 14, 15, 16, 17, 18, 19, 20]
        result=fizzBuzz(numsList)
        self.assertEqual(result, [13, 14, 'Fizz Buzz', 16, 17, 'Fizz', 19, 'Buzz'])

if __name__=='__main__':
    unittest.main()