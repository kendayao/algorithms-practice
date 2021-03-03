import unittest
from log_even_nums import logEvenNums

class Test(unittest.TestCase):
    def test_log_even_nums(self):
        num=25
        result=logEvenNums(num)
        self.assertEqual(result, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24])

if __name__=='__main__':
    unittest.main()