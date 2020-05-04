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
    public class VendaController : ControllerBase
    {
        private readonly VendaServico vendaServico;

        public VendaController() => vendaServico = new VendaServico();


        [HttpGet("listar-todos")]
        public IEnumerable<Venda> ListarVendas() => vendaServico.ListarVendas();//Erro

        [HttpGet("listar-um")]
        public Venda ListarUm(int idVenda) => vendaServico.ListarUm(idVenda);//Erro

        [HttpPost("salvar")]
        public NotificationResult Salvar(Venda entidade) => vendaServico.Salvar(entidade);

        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idVenda) => vendaServico.Excluir(idVenda);//Erro

        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Venda entidade) => vendaServico.Atualizar(entidade);
    }
}