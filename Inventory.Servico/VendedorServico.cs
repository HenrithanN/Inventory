using Inventory.Comum;
using Inventory.Comum.NotificationPattern;
using Inventory.Dados;
using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Servico
{
    public class VendedorServico
    {
        private readonly VendedorRepositorio _vendedorRepositorio;

        public VendedorServico()
        {
            _vendedorRepositorio = new VendedorRepositorio();
        }

        public NotificationResult Salvar(Vendedor entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneFixo))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome do Vendedor Inválido!"));
                
                if (CNPJUtil.ValidarCNPJ(entidade.CNPJ) == false)
                    notificationResult.Add(new NotificationError("CNPJ Do Vendedor Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _vendedorRepositorio.Adicionar(entidade);
                    notificationResult.Add("Vendedor Cadastrado com sucesso.");
                }

                notificationResult.Result = entidade;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Vendedor> ListarVendedores()
        {
            return _vendedorRepositorio.ListarVendedores();
        }

        public NotificationResult Atualizar(Vendedor entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneFixo))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome do Vendedor Inválido!"));

                if (CNPJUtil.ValidarCNPJ(entidade.CNPJ) == false)
                    notificationResult.Add(new NotificationError("CNPJ Do Vendedor Inválido", NotificationErrorType.USER));

                if (entidade.idVendedor <= 0)
                    return notificationResult.Add(new NotificationError("Código do Vendedor Inválido!"));

                if (notificationResult.IsValid)
                {
                    _vendedorRepositorio.Atualizar(entidade);
                    notificationResult.Add("Cadastro do Vendedor Atualizado com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
        public Vendedor ListarUm(int idVendedor)
        {
            return _vendedorRepositorio.ListarUm(idVendedor);
        }

        public NotificationResult Excluir(int idVendedor)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idVendedor <= 0)
                    return notificationResult.Add(new NotificationError("Código do Vendedor Inválido!"));

                Vendedor entidade = ListarUm(idVendedor);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Vendedor não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _vendedorRepositorio.Remover(entidade);
                    notificationResult.Add("Vendedor Removido com sucesso.");
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