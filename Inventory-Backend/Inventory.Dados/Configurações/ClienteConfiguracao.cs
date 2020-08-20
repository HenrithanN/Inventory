using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Inventory.Dados.Configurações
{
    class ClienteConfiguracao :
        IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            
            builder.ToTable("Cliente","Inventory");//Referenciando a Tabela Cliente e o Schema Inventory

            builder.HasKey("idCliente");      //Referenciando a Primary Key
            builder.Property(f => f.Nome)     //Propriedade Nome
                .IsRequired()                 //Não é um Campo Opicional     
                .HasMaxLength(150);           //Tamanho Maximo 150 Caracteres
            builder.Property(f => f.CPF)      
                .IsRequired();                
            builder.Property(f => f.RG)       
                .IsRequired();                
            builder.Property(f => f.Endereco) 
                .IsRequired()                 
                .HasMaxLength(150);
            builder.Property(f => f.TelefoneCelular)
                .IsRequired();
            builder.Property(f => f.TelefoneFixo)
                .IsRequired();
            builder.Property(f => f.Email)
                .IsRequired();
            builder.Property(f => f.EnderecoImagem)
                .IsRequired();
            ;
        }
    }
}