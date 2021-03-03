import unittest
from log_nums import logNums

class Test(unittest.TestCase):
    def test_log_nums(self):
        num=5
        result=logNums(num)
        self.assertEqual(result, [1,2,3,4,5])

if __name__=='__main__':
    unittest.main()
