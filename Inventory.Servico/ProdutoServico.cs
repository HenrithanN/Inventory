using System;
using Inventory.Dominio;
using Inventory.Dados;
using Inventory.Comum.NotificationPattern;
using System.Collections.Generic;

namespace Inventory.Servico
{
    public class ProdutoServico
    {
        private readonly ProdutoRepositorio _produtoRepositorio;

        public ProdutoServico()
        {
            _produtoRepositorio = new ProdutoRepositorio();
        }

        public NotificationResult Salvar(Produto entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                entidade.DataEntrada = DateTime.Now;

                if (entidade.Valor <= 0)
                    notificationResult.Add(new NotificationError("Valor Do Produto Inválido!", NotificationErrorType.USER));
                
                if (entidade.Validade < DateTime.Today)
                    notificationResult.Add(new NotificationError("Produto Está Vencido!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Produto Inválido", NotificationErrorType.USER));

                if (entidade.Quantidade <= 0)
                    notificationResult.Add(new NotificationError("Quantidade Inválida de Produtos!", NotificationErrorType.USER));
                     
                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("URL da Imagem Inválida ou Não Suportada!", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _produtoRepositorio.Adicionar(entidade);

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
        public Produto ListarUm(int idProduto)
        {
            return _produtoRepositorio.ListarUm(idProduto);
        }

        public NotificationResult Excluir(int idProduto)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idProduto == 0)
                    return notificationResult.Add(new NotificationError("Código do Produto Inválido!"));

                Produto entidade = ListarUm(idProduto);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Produto não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _produtoRepositorio.Remover(entidade);
                    notificationResult.Add("Produto Removido com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }
       
        public IEnumerable<Produto> ListarProdutos()
        {
            return _produtoRepositorio.ListarProdutos();
        }
        public IEnumerable<Produto> ProdutosVencidos()
        {
            return _produtoRepositorio.ProdutosVencidos();
        }
        public IEnumerable<Produto> ProdutosVencendo()
        {
            return _produtoRepositorio.ProdutosVencendo();
        }
        public IEnumerable<Produto> ProdutosAcabando()
        {
            return _produtoRepositorio.ProdutosAcabando();
        }
        public IEnumerable<Produto> EstoqueZerado()
        {
            return _produtoRepositorio.EstoqueZerado();
        }
        public NotificationResult Atualizar(Produto entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (entidade.Valor <= 0)
                    notificationResult.Add(new NotificationError("Valor Do Produto Inválido!", NotificationErrorType.USER));

                if (entidade.Validade < DateTime.Now)
                    notificationResult.Add(new NotificationError("Produto Está Vencido!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Produto Inválido", NotificationErrorType.USER));

                if (entidade.Quantidade <= 0)
                    notificationResult.Add(new NotificationError("Quantidade de Produtos Inválida!", NotificationErrorType.USER));

                if (entidade.idProduto <= 0)
                    return notificationResult.Add(new NotificationError("Código do Produto Inválido!"));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("URL da Imagem Inválida ou Não Suportada!", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _produtoRepositorio.Atualizar(entidade);
                    notificationResult.Add("Produto Atualizado com sucesso.");
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

