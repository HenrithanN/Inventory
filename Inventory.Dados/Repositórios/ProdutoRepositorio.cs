using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using Inventory.Dominio;

namespace Inventory.Dados
{
    public class ProdutoRepositorio : RepositorioBase<Produto>
    {
        public IEnumerable<Produto> ListarProdutos()
        {
            return Contexto
                .Produto
                .Where(f => f.idProduto > 0);
        }
    }
}
