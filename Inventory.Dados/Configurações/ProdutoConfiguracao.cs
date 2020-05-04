using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Dados.Configurações
{
    class ProdutoConfiguracao :
        IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {

            builder.ToTable("Produto","Inventory");         //Referenciando a Tabela Produto e o Schema Inventory

            builder.HasKey("idProduto");        //Referenciando Primary Key
            builder.Property(f => f.idFornecedor) //Propriedade idFornecedor
                .IsRequired();                  // Não é Um Campo Opcional, é Obrigatorio Preencher
            builder.Property(f => f.idEstoque) 
                .IsRequired();                  
            builder.Property(f => f.Valor)      
                .IsRequired();                 
            builder.Property(f => f.Nome)       
                .IsRequired()
                .HasMaxLength(150);
            builder.Property(f => f.Validade)
                .IsRequired();
            builder.Property(f => f.DataEntrada)
                .IsRequired();


        }
    }
}
