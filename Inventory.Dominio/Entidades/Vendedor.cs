using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Inventory.Dominio
{
    public class Vendedor
    {
        [Key]

        public int idVendedor { get; set; }
        public string TelefoneFixo { get; set; }
        public string Nome { get; set; }         
        public string Email { get; set; }
        public string CNPJ { get; set; }
    }
}
