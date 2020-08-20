using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Inventory.Dados
{
    public class FornecedorRepositorio :RepositorioBase<Fornecedor>
    {
        public IEnumerable<Fornecedor> ListarFornecedores()
        {
            return Contexto
                .Fornecedor
                .Where(f => f.idFornecedor > 0);
        }
    }
}
