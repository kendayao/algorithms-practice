import unittest

from longest_word import longest_word

class Test(unittest.TestCase):
    def test_longest_word(self):
        string='i love programming'
        result=longest_word(string)
        self.assertEqual(result, 'programming')

if __name__=='__main__':
    unittest.main()