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
    public class VendedorController : ControllerBase
    {
        private readonly VendedorServico vendedorServico;

        public VendedorController() => vendedorServico = new VendedorServico();


        [HttpGet("listar-todos")]
        public IEnumerable<Vendedor> ListarVendedores() => vendedorServico.ListarVendedores();

        [HttpGet("listar-um")]
        public Vendedor ListarUm(int idVendedor) => vendedorServico.ListarUm(idVendedor);

        [HttpPost("salvar")]
        public NotificationResult Salvar(Vendedor entidade) => vendedorServico.Salvar(entidade);

        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idVendedor) => vendedorServico.Excluir(idVendedor);

        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Vendedor entidade) => vendedorServico.Atualizar(entidade);

    }
}