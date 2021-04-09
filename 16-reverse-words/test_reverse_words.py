import unittest

from reverse_words import reverse_words

class Test(unittest.TestCase):
    def test_reverse_words(self):
        string='just keep swimming'
        result=reverse_words(string)
        self.assertEqual(result, 'swimming keep just')

if __name__=='__main__':
    unittest.main()