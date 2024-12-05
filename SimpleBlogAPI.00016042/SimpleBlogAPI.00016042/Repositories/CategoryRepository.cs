using SimpleBlogAPI._00016042.Data;
using SimpleBlogAPI._00016042.Models;
using Microsoft.EntityFrameworkCore;

namespace SimpleBlogAPI._00016042.Repositories
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly SimpleBlogContext _context;

        public CategoryRepository(SimpleBlogContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Category entity)
        {
            await _context.Categories.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category != null)
            {
                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> GetByIdAsync(int id)
        {
            return await _context.Categories.FindAsync(id);
        }

        public async Task UpdateAsync(Category entity)
        {
            _context.Categories.Update(entity);
            await _context.SaveChangesAsync();
        }
    }
}
