import unittest
from sum_array import sumList

class Test(unittest.TestCase):
    def test_sum_array(self):
        numList=[4, 8, 15, 16, 23, 42]
        result=sumList(numList)
        self.assertEqual(result, 108)

if __name__=='__main__':
    unittest.main()