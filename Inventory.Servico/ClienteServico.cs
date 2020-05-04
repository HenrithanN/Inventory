using Inventory.Comum;
using Inventory.Comum.NotificationPattern;
using Inventory.Dados;
using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Servico
{
    public class ClienteServico
    {
        private readonly ClienteRepositorio _clienteRepositorio;

        public ClienteServico()
        {
            _clienteRepositorio = new ClienteRepositorio();
        }

        public NotificationResult Salvar(Cliente entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));
                
                if (CPFUtil.ValidarCPF(entidade.CPF) == false)
                    notificationResult.Add(new NotificationError("CPF Do Cliente Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneCelular))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Endereco))
                    notificationResult.Add(new NotificationError("Endereço Informado Inválido", NotificationErrorType.USER));
                
                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Cliente Inválido", NotificationErrorType.USER));
                            
                if (string.IsNullOrEmpty(entidade.RG))
                    notificationResult.Add(new NotificationError("RG Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {

                    _clienteRepositorio.Adicionar(entidade);
                    
                    notificationResult.Add("Cliente cadastrado com sucesso.");
                }

                notificationResult.Result = entidade;
                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
        public Cliente ListarUm(int idCliente)
        {
            return _clienteRepositorio.ListarUm(idCliente);
        }

        public NotificationResult Excluir(int idCliente)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idCliente == 0)
                    return notificationResult.Add(new NotificationError("Código do Cliente Inválido!"));

                Cliente entidade = ListarUm(idCliente);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Cliente não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _clienteRepositorio.Remover(entidade);
                    notificationResult.Add("Cliente Removido com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Cliente> ListarClientes()
        {
            return _clienteRepositorio.ListarClientes();
        }

        public NotificationResult Atualizar(Cliente entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (entidade.idCliente <= 0)
                    return notificationResult.Add(new NotificationError("Código do Cliente Inválido!"));

                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));

                if (CPFUtil.ValidarCPF(entidade.CPF) == false)
                    notificationResult.Add(new NotificationError("CPF Do Cliente Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneCelular))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Endereco))
                    notificationResult.Add(new NotificationError("Endereço Informado Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Cliente Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.RG))
                    notificationResult.Add(new NotificationError("RG Inválido", NotificationErrorType.USER));


                if (notificationResult.IsValid)
                {
                    _clienteRepositorio.Atualizar(entidade);
                    notificationResult.Add("Cliente Atualizado com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
    }
}
