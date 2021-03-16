import unittest

from is_palindrome import is_palindrome

class Test(unittest.TestCase):
    def test_is_palindrome(self):
        string='radar'
        result=is_palindrome(string)
        self.assertEqual(result, True)

if __name__=='__main__':
    unittest.main()