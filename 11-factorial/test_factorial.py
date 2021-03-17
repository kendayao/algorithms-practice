import unittest

from factorial import factorial

class Test(unittest.TestCase):
    def test_factorial(self):
        num=6
        result=factorial(num)
        self.assertEqual(result, 720)

if __name__=='__main__':
    unittest.main()