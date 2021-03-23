import unittest

from swap_case import swap_case

class Test(unittest.TestCase):
    def test_swap_case(self):
        string='ImAgInE If i WrOtE LiKe tHiS'
        result=swap_case(string)
        self.assertEqual(result, 'iMaGiNe iF I wRoTe lIkE ThIs')

if __name__=='__main__':
    unittest.main()