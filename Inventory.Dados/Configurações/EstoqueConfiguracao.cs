using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Dados.Configurações
{
    class EstoqueConfiguracao :
        IEntityTypeConfiguration<Estoque>
    {
        public void Configure(EntityTypeBuilder<Estoque> builder)
        {
            builder.ToTable("Estoque","Inventory"); //Referenciando a Tabela Estoque e o Schema Inventory

            builder.HasKey("idEstoque");    //Referenciando a Primary Key da Tabela
            builder.Property(f => f.Quantidade)//Propriedade Quantidade
                . IsRequired();              // Não é Um Campo Opcional, é Obrigatorio Preencher                           
            builder.Property(f => f.Nome)
                .HasColumnName("NomeProduto")
                .IsRequired();
        }
    }
}
