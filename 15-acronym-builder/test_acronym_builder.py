import unittest

from acronym_builder import acronym_builder

class Test(unittest.TestCase):
    def test_acronym_builder(self):
        string='i love programming'
        result=acronym_builder(string)
        self.assertEqual(result, 'ILP')

if __name__=='__main__':
    unittest.main()