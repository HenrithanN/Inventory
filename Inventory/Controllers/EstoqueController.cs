using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventory.Servico;
using Inventory.Comum.NotificationPattern;
using Inventory.Dominio;

namespace Inventory.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class EstoqueController : ControllerBase
    {
        private readonly EstoqueServico estoqueServico;

        public EstoqueController() => estoqueServico = new EstoqueServico();


        [HttpGet("sem-estoque")]
        public IEnumerable<Estoque> ListarTodosComEstoqueZerado()
        {
            return estoqueServico.ListarTodosComEstoqueZerado();
        }

        [HttpGet("listar-estoque")]
        public IEnumerable<Estoque> ListarEstoque() => estoqueServico.ListarEstoque();
       
        [HttpGet("listar-um")]
        public Estoque ListarUm(int idEstoque) => estoqueServico.ListarUm(idEstoque);

        [HttpPost("salvar")]
        public NotificationResult Salvar(Estoque entidade) => estoqueServico.Salvar(entidade);
        
        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idEstoque) => estoqueServico.Excluir(idEstoque);

        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Estoque entidade) => estoqueServico.Atualizar(entidade);
    }
}
