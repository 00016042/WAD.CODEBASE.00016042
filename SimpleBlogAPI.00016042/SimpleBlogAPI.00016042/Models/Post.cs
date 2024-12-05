namespace SimpleBlogAPI._00016042.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        // Foreign key for Category
        public int CategoryId { get; set; }

        // Navigation property for related category
        public Category Category { get; set; }
    }
}
