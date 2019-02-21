using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace demo.Models
{
    public class demoContext : DbContext
    {
        public demoContext (DbContextOptions<demoContext> options)
            : base(options)
        {
        }

        public DbSet<demo.Models.Message> Message { get; set; }
    }
}
