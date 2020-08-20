using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inventory.Dados
{
    public class VendedorRepositorio : RepositorioBase<Vendedor>
    {
        public IEnumerable<Vendedor> ListarVendedores()
        {
            return Contexto
                .Vendedor
                .Where(f => f.idVendedor > 0);
        }
    }
}
