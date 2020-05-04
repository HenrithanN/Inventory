using System;
using Inventory.Dominio;
using Microsoft.EntityFrameworkCore;
using Inventory.Dados.Configurações;

namespace Inventory.Dados
{
    public class Contexto : DbContext 
    {
        public DbSet<Produto> Produto { get; set; }        
        public DbSet<Estoque> Estoque { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<Fornecedor> Fornecedor { get; set; }
        public DbSet<Venda> Venda { get; set; }
        public DbSet<Vendedor> Vendedor { get; set; }
        //OnConfiguring é um metodo chamado sempre que uma instância contexto é criada
        protected override void OnConfiguring//Fornece informações de configuração do contexto através do OptionsBuilder
            (DbContextOptionsBuilder OptionsBuidler)//Simplifica a Configuração
        {
            OptionsBuidler.UseSqlServer//Usando Um Banco De Dados SQL Server
                ("server=201.62.57.93;database=dbLAB2_2020;user id=visualstudio;password=visualstudio;");
            //Fazendo Conexão com o Banco, Através do "Servidor;BaseDeDados;Usuario;Senha
                
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new ClienteConfiguracao());
            modelBuilder.ApplyConfiguration(new EstoqueConfiguracao());
            modelBuilder.ApplyConfiguration(new FornecedorConfiguracao());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguracao());
            modelBuilder.ApplyConfiguration(new VendaConfiguracao());
            modelBuilder.ApplyConfiguration(new VendedorConfiguracao());
        }
    }
}
