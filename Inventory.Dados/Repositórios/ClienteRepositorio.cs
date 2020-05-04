using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using Inventory.Dominio;

namespace Inventory.Dados
{
    public class ClienteRepositorio : RepositorioBase<Cliente>
    {
        public IEnumerable<Cliente> ListarClientes()
        {
            return Contexto
                .Cliente
                .Where(f => f.idCliente > 0);
        }
    }
}
