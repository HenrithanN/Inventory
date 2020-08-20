using Inventory.Comum.NotificationPattern;
using Inventory.Dados;
using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;

namespace Inventory.Servico
{
    public class EstoqueServico
    {
        private readonly EstoqueRepositorio _estoqueRepositorio;

        public EstoqueServico() => _estoqueRepositorio = new EstoqueRepositorio();

        public NotificationResult Salvar(Estoque entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                
                if (entidade.Quantidade < 0)
                    notificationResult.Add(new NotificationError("Qtde. de produtos no Estoque inválido.", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome do Produto Inválido"));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {

                    _estoqueRepositorio.Adicionar(entidade);

                    notificationResult.Add("Produto cadastrado com sucesso.");
                }

                notificationResult.Result = entidade;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
        public IEnumerable<Estoque> ListarEstoque()
        {
            return _estoqueRepositorio.ListarEstoque();
        }
        public IEnumerable<Estoque> ListarEstoqueAcabando()
        {
            return _estoqueRepositorio.ListarEstoqueAcabando();
        }
        public IEnumerable<Estoque> ListarTodosComEstoqueZerado()
        {
            return _estoqueRepositorio.ListarTodosComEstoqueZerado();
        }
        public IEnumerable<Estoque> EmOrdem()
        {
            return _estoqueRepositorio.EmOrdem();
        }

        public Estoque ListarUm(int idEstoque)
        {
            return _estoqueRepositorio.ListarUm(idEstoque);
        }
        public NotificationResult Excluir(int idEstoque)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idEstoque == 0)
                    return notificationResult.Add(new NotificationError("Código do Estoque Inválido!"));

                Estoque entidade = ListarUm(idEstoque);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Estoque não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _estoqueRepositorio.Remover(entidade);
                    notificationResult.Add("Estoque Removido com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }

        }
        public NotificationResult Atualizar(Estoque entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (entidade.Quantidade < 0)
                    notificationResult.Add(new NotificationError("Qtde. de produtos no Estoque inválido.", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome do Produto Inválido"));

                if (entidade.idEstoque <= 0)
                    return notificationResult.Add(new NotificationError("Código do Cliente Inválido!"));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _estoqueRepositorio.Atualizar(entidade);
                    notificationResult.Add("Estoque Atualizado com sucesso.");
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
