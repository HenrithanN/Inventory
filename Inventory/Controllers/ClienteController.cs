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
    //Liberado Cors
    [Route("[controller]")]Attribute
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ClienteServico clienteServico;

        public ClienteController() => clienteServico = new ClienteServico();
        

        [HttpGet("listar-todos")]
        public IEnumerable<Cliente> ListarClientes() => clienteServico.ListarClientes();

        [HttpGet("listar-um")]
        public Cliente ListarUm(int idCliente) => clienteServico.ListarUm(idCliente);
        
        [HttpPost("salvar")]
        public NotificationResult Salvar(Cliente entidade) => clienteServico.Salvar(entidade);
        
        [HttpDelete("excluir")]
        public NotificationResult Excluir(int idCliente) => clienteServico.Excluir(idCliente);
        
        [HttpPut("atualizar")]
        public NotificationResult Atualizar(Cliente entidade) => clienteServico.Atualizar(entidade);
        
    }
}