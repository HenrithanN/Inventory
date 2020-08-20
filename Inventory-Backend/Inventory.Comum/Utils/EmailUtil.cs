using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Inventory.Comum
{
    public class EmailUtil
    {
        public static bool ValidarEmail(string email)
        {
            try
            {
                //Define a Expressão Regular Para Validar o Email
                string Email_Validar = email;
                Regex expressaoRegex = new Regex(@"\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}");

                // Testa o Email Inserido com a Expressão
                if (expressaoRegex.IsMatch(Email_Validar))
                    // Caso o Email Seja Válido Retorna True
                    return true;
                else
                    // Caso o Email Seja Invalido Retorna False
                    return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
