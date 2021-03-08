import unittest

from vowel_count import vowel_count

class Test(unittest.TestCase):
    def test_vowel_count(self):
        string='programmer'
        result=vowel_count(string)
        self.assertEqual(result, 3)

if __name__=='__main__':
    unittest.main()