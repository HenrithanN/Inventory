using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Inventory.Dominio
{
    public class Venda
    {
        [Key]

        public int idProduto { get; set; }
        public int idVenda { get; set; }
        public int idVendedor { get; set; }
        public int idCliente { get; set; }
        public int QtdVendida { get; set; }
        public float ValorTotal { get; set; }
        public DateTime DataVenda { get; set; }
        public string Descricao { get; set; }
    }
}
