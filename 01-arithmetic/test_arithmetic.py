import unittest
import arithmetic

class TestCap(unittest.TestCase):
    def test_add(self):
        num1=10
        num2=24
        result=arithmetic.add(num1,num2)
        self.assertEqual(result, 34)

    def test_subtract(self):
        num1=100
        num2=91
        result=arithmetic.subtract(num1,num2)
        self.assertEqual(result, 9)
    
    def test_multiply(self):
        num1=7
        num2=70
        result=arithmetic.multiply(num1,num2)
        self.assertEqual(result, 490)
    
    def test_divide(self):
        num1=33
        num2=11
        result=arithmetic.divide(num1,num2)
        self.assertEqual(result, 3)

if __name__=='__main__':
    unittest.main()