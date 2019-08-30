using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactBook.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Telephone> Telephones { get; set; }
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=WIN-ICFUSRAL64D;Database=contactDb;Trusted_Connection=True;");
        }
    }
}
