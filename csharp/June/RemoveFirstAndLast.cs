namespace csharp.June
{
    public class RemoveFirstAndLast
    {
        public static string Remove_char(string s)
        {
            string output = "";
            char[] charArr = s.ToCharArray();
            for (int i = 0; i < charArr.Length; i++)
            {
                if (i == 0 || i == charArr.Length - 1)
                {

                }
                else
                {
                    output += charArr[i];
                }
            }
            return output;
        }
    }
}