import unittest
from odd_or_even import oddOrEven

class Test(unittest.TestCase):
    
    def test_even(self):
        num = 1002
        result = oddOrEven(num)
        self.assertEqual(result, 'even' )
        
    def test_odd(self):
        num = 33
        result = oddOrEven(num)
        self.assertEqual(result, 'odd' )

if __name__=='__main__':
    unittest.main()