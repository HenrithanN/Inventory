﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Inventory.Dominio
{
    public class Produto
    {
        [Key]
        public int idProduto { get; set; }
        public float Valor { get; set; }
        public string Nome { get; set; }
        public DateTime Validade { get; set; }
        public DateTime DataEntrada { get; set; }
        public string EnderecoImagem { get; set; }
        public int Quantidade { get; set; }

    }
}
