import unittest
from countdown import countdown

class Test(unittest.TestCase):
    def test_countdown(self):
        num=25
        result=countdown(num)
        self.assertEqual(result, [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

if __name__=='__main__':
    unittest.main()