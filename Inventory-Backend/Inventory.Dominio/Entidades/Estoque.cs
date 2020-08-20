using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Inventory.Dominio
{
    public class Estoque
    {
        [Key]
        public int idEstoque { get; set; }
        public int Quantidade { get; set; }
        public string Nome { get; set; }

        public string EnderecoImagem { get; set; }
    }
}
