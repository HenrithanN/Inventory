using Inventory.Comum.NotificationPattern;
using Inventory.Dados;
using Inventory.Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Inventory.Servico
{
    public class VendaServico
    {
        private readonly VendaRepositorio _vendaRepositorio;

        public VendaServico()
        {
            _vendaRepositorio = new VendaRepositorio();
        }

        public NotificationResult Salvar(Venda entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (entidade.idProduto <= 0)
                    notificationResult.Add(new NotificationError("Codigo do Produto Invalido!", NotificationErrorType.USER));
                                
                if (entidade.idCliente <= 0)
                    notificationResult.Add(new NotificationError("Código do Cliente Inválido!", NotificationErrorType.USER));

                if (entidade.QtdVendida <= 0)
                    notificationResult.Add(new NotificationError("Quantidade De Produtos Inválida!", NotificationErrorType.USER));

                if (entidade.idVendedor <= 0)
                    notificationResult.Add(new NotificationError("Código do Vendedor Inválido!", NotificationErrorType.USER));

                if (entidade.ValorTotal <= 00.00)
                    notificationResult.Add(new NotificationError("Valor Informado Inválido!", NotificationErrorType.USER));
                
                if (entidade.DataVenda < DateTime.Now)
                    notificationResult.Add(new NotificationError("Data de Venda Inválida!", NotificationErrorType.USER));
                
                if (string.IsNullOrEmpty(entidade.Descricao))
                    notificationResult.Add(new NotificationError("Descrição de Venda Inválida!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _vendaRepositorio.Adicionar(entidade);
                    notificationResult.Add("Venda Realizada com sucesso.");
                }

                notificationResult.Result = entidade;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Venda> ListarVendas()
        {
            return _vendaRepositorio.ListarVendas();
        }

        public NotificationResult Atualizar(Venda entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (entidade.idProduto <= 0)
                    notificationResult.Add(new NotificationError("Codigo do Produto Invalido!", NotificationErrorType.USER));

                if (entidade.idCliente <= 0)
                    notificationResult.Add(new NotificationError("Código do Cliente Inválido!", NotificationErrorType.USER));

                if (entidade.QtdVendida <= 0)
                    notificationResult.Add(new NotificationError("Quantidade De Produtos Inválida!", NotificationErrorType.USER));

                if (entidade.idVendedor <= 0)
                    notificationResult.Add(new NotificationError("Código do Vendedor Inválido!", NotificationErrorType.USER));

                if (entidade.ValorTotal <= 00.00)
                    notificationResult.Add(new NotificationError("Valor Informado Inválido!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Descricao))
                    notificationResult.Add(new NotificationError("Descrição de Venda Inválida!", NotificationErrorType.USER));

                if (entidade.idVenda <= 0)
                    return notificationResult.Add(new NotificationError("Código da Venda Inválido!"));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _vendaRepositorio.Atualizar(entidade);
                    notificationResult.Add("Venda Atualizada com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
        public Venda ListarUm(int idVenda)
        {
            return _vendaRepositorio.ListarUm(idVenda);
        }

        public NotificationResult Excluir(int idVenda)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idVenda <= 0)
                    return notificationResult.Add(new NotificationError("Código da Venda Inválido!"));

                Venda entidade = ListarUm(idVenda);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Venda não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _vendaRepositorio.Remover(entidade);
                    notificationResult.Add("Venda Removida com sucesso.");
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
