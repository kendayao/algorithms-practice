import unittest

from reverse_all import reverse_all

class Test(unittest.TestCase):
    def test_reverse_all(self):
        string='just keep swimming'
        result=reverse_all(string)
        self.assertEqual(result, 'gnimmiws peek tsuj')

if __name__=='__main__':
    unittest.main()