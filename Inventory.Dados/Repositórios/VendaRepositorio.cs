using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inventory.Dados
{
    public class VendaRepositorio : RepositorioBase<Venda>
    {
        public IEnumerable<Venda> ListarVendas()
        {
            return Contexto
                .Venda
                .Where(f => f.idVenda > 0);
        }
    }
}
