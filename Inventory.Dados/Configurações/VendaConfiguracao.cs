using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Inventory.Dominio;

namespace Inventory.Dados.Configurações
{
    class VendaConfiguracao :
        IEntityTypeConfiguration<Venda>
    {
        public void Configure(EntityTypeBuilder<Venda> builder)
        {
            builder.ToTable("Venda","Inventory"); // Referenciando a Tabela Venda e o Schema Inventory

            builder.HasKey("idVenda");  // Referenciando a Primary Key, nessa tabela tem duas
            builder.Property(f => f.idVendedor)     //Propriedade Vendedor
                .IsRequired();
            builder.Property(f => f.idProduto)
                .IsRequired();
            builder.Property(f => f.idCliente)
                .IsRequired();
            builder.Property(f => f.QtdVendida)    
                .IsRequired(); ;                    
            builder.Property(f => f.DataVenda)      
                .IsRequired();                     
            builder.Property(f => f.Descricao)      
                .IsRequired()                      
                .HasMaxLength(150);                 //Tamanho Maximo 150 Caracteres
            builder.Property(f => f.ValorTotal)
                .IsRequired();

        }
       
       
    }
}
