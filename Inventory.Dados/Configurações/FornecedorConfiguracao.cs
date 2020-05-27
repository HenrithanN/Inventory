using System;
using System.Collections.Generic;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Inventory.Dados.Configurações
{
    class FornecedorConfiguracao :
        IEntityTypeConfiguration<Fornecedor>
    {
        public void Configure(EntityTypeBuilder<Fornecedor> builder)
        {
            builder.ToTable("Fornecedor","Inventory"); // Referenciando a Tabela Fornecedor e o Schema Inventory

            builder.HasKey("idFornecedor");     // Referenciando a Primary Key
            builder.Property(f => f.Nome)       // Propriedade Nome
                .IsRequired()                   // Não é Um Campo Opcional, é Obrigatorio Preencher
                .HasMaxLength(150);             //Tamanho Maximo de 150 Caracteres
            builder.Property(f => f.TelefoneFixo)
                .IsRequired();
            builder.Property(f => f.Email)
                .IsRequired();
            builder.Property(f => f.CNPJ)
                .IsRequired()
                .HasMaxLength(14);
            builder.Property(f => f.EnderecoImagem)
                .IsRequired();
        }
    }
}