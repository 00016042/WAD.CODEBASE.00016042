using SimpleBlogAPI._00016042.Data;
using SimpleBlogAPI._00016042.Models;
using Microsoft.EntityFrameworkCore;

namespace SimpleBlogAPI._00016042.Repositories
{
    public class PostRepository : IRepository<Post>
    {
        private readonly SimpleBlogContext _context;

        public PostRepository(SimpleBlogContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Post entity)
        {
            await _context.Posts.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var post = await _context.Posts.FindAsync(id);
            if (post != null)
            {
                _context.Posts.Remove(post);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Post>> GetAllAsync()
        {
            return await _context.Posts.Include(p => p.Category).ToListAsync();
        }

        public async Task<Post> GetByIdAsync(int id)
        {
            return await _context.Posts.Include(p => p.Category).FirstOrDefaultAsync(p => p.PostId == id);
        }

        public async Task UpdateAsync(Post entity)
        {
            _context.Posts.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
