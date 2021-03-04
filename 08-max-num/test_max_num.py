import unittest
from max_num import max_num

class Test(unittest.TestCase):
    def test_max_num(self):
        numList=[2, 3, -2, 99, 100, 2222, 321]
        result=max_num(numList)
        self.assertEqual(result,2222)

if __name__=='__main__':
    unittest.main()