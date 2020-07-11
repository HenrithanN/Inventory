using Inventory.Dados;
using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;
using Inventory.Comum.NotificationPattern;
using Inventory.Comum;

namespace Inventory.Servico
{
    public class FornecedorServico
    {
        private readonly FornecedorRepositorio _fornecedorRepositorio;

        public FornecedorServico()
        {
            _fornecedorRepositorio = new FornecedorRepositorio();
        }

        public NotificationResult Salvar(Fornecedor entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));
                
                if (CNPJUtil.ValidarCNPJ(entidade.CNPJ) == false)
                    notificationResult.Add(new NotificationError("CNPJ Do Fornecedor Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneFixo))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("URL da Imagem Inválida ou Não Suportada!", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Fornecedor Inválido", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _fornecedorRepositorio.Adicionar(entidade);
                    notificationResult.Add("Fornecedor Cadastrado com sucesso.");
                }
                notificationResult.Result = entidade;

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public Fornecedor ListarUm(int idFornecedor)
        {
            return _fornecedorRepositorio.ListarUm(idFornecedor);
        }

        public NotificationResult Excluir(int idFornecedor)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (idFornecedor == 0)
                    return notificationResult.Add(new NotificationError("Código do Fornecedor Inválido!"));

                Fornecedor entidade = ListarUm(idFornecedor);

                if (entidade == null)
                    return notificationResult.Add(new NotificationError("Fornecedor não Encontrado!"));

                if (notificationResult.IsValid)
                {
                    _fornecedorRepositorio.Remover(entidade);
                    notificationResult.Add("Fornecedor Removido com sucesso.");
                }

                return notificationResult;
            }
            catch (Exception ex)
            {
                return notificationResult.Add(new NotificationError(ex.Message));
            }
        }

        public IEnumerable<Fornecedor> ListarFornecedores()
        {
            return _fornecedorRepositorio.ListarFornecedores();
        }
        public NotificationResult Atualizar(Fornecedor entidade)
        {
            var notificationResult = new NotificationResult();

            try
            {
                if (EmailUtil.ValidarEmail(entidade.Email) == false)
                    notificationResult.Add(new NotificationError("Email Inválido!", NotificationErrorType.USER));

                if (CNPJUtil.ValidarCNPJ(entidade.CNPJ) == false)
                    notificationResult.Add(new NotificationError("CNPJ Do Fornecedor Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.TelefoneFixo))
                    notificationResult.Add(new NotificationError("Telefone Inválido", NotificationErrorType.USER));

                if (string.IsNullOrEmpty(entidade.Nome))
                    notificationResult.Add(new NotificationError("Nome Do Fornecedor Inválido", NotificationErrorType.USER));

                if (entidade.idFornecedor <= 0)
                    return notificationResult.Add(new NotificationError("Código do Fornecedor Inválido!"));

                if (string.IsNullOrEmpty(entidade.EnderecoImagem))
                    notificationResult.Add(new NotificationError("URL da Imagem Inválida ou Não Suportada!", NotificationErrorType.USER));

                if (notificationResult.IsValid)
                {
                    _fornecedorRepositorio.Atualizar(entidade);
                    notificationResult.Add("Fornecedor Atualizado com sucesso.");
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
