namespace csharp.June
{
    public class EvenOrOdd
    {
        public static string IsEvenOrOdd(int number)
        {
            if (number % 2 == 0)
            {
                return ("Even");
            }
            else
            {
                return ("Odd");
            }
        }
    }
}