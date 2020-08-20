using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory.Comum.NotificationPattern;
using Inventory.Dominio;
using Inventory.Servico;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Inventory.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {
        private readonly FornecedorServico fornecedorServico;

        public FornecedorController() => fornecedorServico = new FornecedorServico();


        [HttpGet("listar-todos")]
        public IEnumerable<Fornecedor> ListarFornecedores() => fornecedorServico.ListarFornecedores();

        [HttpGet("listar-um")]
        public Fornecedor ListarUm(int idFornecedor) => fornecedorServico.ListarUm(idFornecedor);

        [HttpPost("salvar")]
        public NotificationResult Salvar(Fornecedor entidade) => fornecedorServico.Salvar(entidade);

        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idFornecedor) => fornecedorServico.Excluir(idFornecedor);

        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Fornecedor entidade) => fornecedorServico.Atualizar(entidade);

    }
}