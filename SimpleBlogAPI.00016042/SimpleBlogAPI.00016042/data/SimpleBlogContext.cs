using Microsoft.EntityFrameworkCore;
using SimpleBlogAPI._00016042.Models;

namespace SimpleBlogAPI._00016042.Data
{
    public class SimpleBlogContext : DbContext
    {
        public SimpleBlogContext(DbContextOptions<SimpleBlogContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Post> Posts { get; set; }

    }
}
