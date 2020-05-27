using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Dados.Configurações
{
    class VendedorConfiguracao :
        IEntityTypeConfiguration<Vendedor> 
    {
        public void Configure(EntityTypeBuilder<Vendedor> builder)
        {
            builder.ToTable("Vendedor","Inventory"); // Referenciando a Tabela Vendedor e o Schema Inventory

            builder.HasKey("idVendedor");       // Referenciando a Primary Key
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
