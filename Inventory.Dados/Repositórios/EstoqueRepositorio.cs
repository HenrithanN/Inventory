using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inventory.Dados
{
    public class EstoqueRepositorio : RepositorioBase<Estoque>
    {
        public IEnumerable<Estoque> ListarTodosComEstoqueZerado()
        {
            return Contexto
                .Estoque
                .Where(f => f.Quantidade == 0);

        }
        public IEnumerable<Estoque> ListarEstoque()
        {
            return Contexto
                .Estoque
                .Where(f => f.idEstoque > 0);
        }
    }
}
