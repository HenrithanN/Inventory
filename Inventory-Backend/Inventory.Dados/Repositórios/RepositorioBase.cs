using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Inventory.Dados
{
    public abstract class RepositorioBase<T> where T : class
    {
        protected Contexto Contexto { get; }
        private DbSet<T> Entidade { get; }

        public RepositorioBase()
        {
            Contexto = new Contexto();
            Entidade = Contexto.Set<T>();
        }

        public T ListarUm(params object[] keys)
        {
            return Entidade.Find(keys);
        }

        public List<T> ListarTodos()
        {
            return Contexto
                .Set<T>()
                .ToList();
        }

        public void Adicionar(T entidade, bool saveChanges = true)
        {
            Entidade.Add(entidade);

            if (saveChanges)
                SaveChanges();
        }

        public void Remover(T entidade, bool saveChanges = true)
        {
            Entidade.Remove(entidade);

            if (saveChanges)
                SaveChanges();
        }

        public void Atualizar(T entidade, bool saveChanges = true)
        {
            Entidade.Update(entidade);

            if (saveChanges)
                SaveChanges();
        }

        public void SaveChanges()
        {
            Contexto.SaveChanges();
        }

    }
}
