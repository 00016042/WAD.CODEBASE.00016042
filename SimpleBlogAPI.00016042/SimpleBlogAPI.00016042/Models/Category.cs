namespace SimpleBlogAPI._00016042.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Navigation property for related posts
        public ICollection<Post> Posts { get; set; }
    }
}
