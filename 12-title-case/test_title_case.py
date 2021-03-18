import unittest

from title_case import title_case

class Test(unittest.TestCase):
    def test_title_case(self):
        string='the quick brown fox jumped over the lazy dog'
        result=title_case(string)
        self.assertEqual(result, 'The Quick Brown Fox Jumped Over The Lazy Dog')

if __name__=='__main__':
    unittest.main()