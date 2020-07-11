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
        public IEnumerable<Produto> ProdutosVencidos()
        {
            return Contexto
                .Produto
                .Where(f => f.Validade < DateTime.Now);
        }
        public IEnumerable<Produto> ProdutosVencendo()
        {
            return Contexto
                .Produto
                .Where(f => f.Validade == (DateTime.Today.AddDays(20)));
        }
        public IEnumerable<Produto> ProdutosAcabando()
        {
            return Contexto
                .Produto
                .Where(f => f.Quantidade <= 15 && (f.Quantidade > 0));
        }
        public IEnumerable<Produto> EstoqueZerado()
        {
            return Contexto
                .Produto
                .Where(f => f.Quantidade == 0);

        }
        public IEnumerable<Produto> EmOrdem()
        {
            return Contexto
                .Produto
                .Where(f => f.Quantidade <= 15)
                .OrderBy(f => f.Nome);
        }
    }
}
