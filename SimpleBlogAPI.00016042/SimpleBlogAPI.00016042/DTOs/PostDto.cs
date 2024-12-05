namespace SimpleBlogAPI._00016042.DTOs
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        // Optional category information
        public int CategoryId { get; set; }
    }
}
