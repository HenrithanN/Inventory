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
    public class ProdutoController : ControllerBase
    {
        private readonly ProdutoServico produtoServico;

        public ProdutoController() => produtoServico = new ProdutoServico();


        [HttpGet("listar-todos")]
        public IEnumerable<Produto> ListarProdutos() => produtoServico.ListarProdutos();

        [HttpGet("produtos-vencidos")]
        public IEnumerable<Produto> ProdutosVencidos() => produtoServico.ProdutosVencidos();

        [HttpGet("produtos-vencendo")]
        public IEnumerable<Produto> ProdutosVencendo() => produtoServico.ProdutosVencendo();
        [HttpGet("produtos-acabando")]
        public IEnumerable<Produto> ProdutosAcabando() => produtoServico.ProdutosAcabando();
        [HttpGet("estoque-zerado")]
        public IEnumerable<Produto> EstoqueZerado() => produtoServico.EstoqueZerado();

        [HttpGet("listar-um")]
        public Produto ListarUm(int idProduto) => produtoServico.ListarUm(idProduto);

        [HttpPost("salvar")]
        public NotificationResult Salvar(Produto entidade) => produtoServico.Salvar(entidade);

        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idProduto) => produtoServico.Excluir(idProduto);

        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Produto entidade) => produtoServico.Atualizar(entidade);

    }
}