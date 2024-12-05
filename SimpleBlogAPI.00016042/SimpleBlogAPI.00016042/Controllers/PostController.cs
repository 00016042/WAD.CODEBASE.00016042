namespace SimpleBlogAPI._00016042.Controllers
{
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;
    using SimpleBlogAPI._00016042.DTOs;
    using SimpleBlogAPI._00016042.Models;
    using SimpleBlogAPI._00016042.Repositories;

    namespace Sem2Monday2.Controllers
    {
        [ApiController]
        [Route("api/[controller]")]
        public class PostController : ControllerBase
        {
            private readonly IRepository<Post> _postRepository;
            private readonly IRepository<Category> _categoryRepository;
            private readonly IMapper _mapper;

            public PostController(
                IRepository<Post> postRepository,
                IRepository<Category> categoryRepository,
                IMapper mapper)
            {
                _postRepository = postRepository;
                _categoryRepository = categoryRepository;
                _mapper = mapper;
            }

            [HttpGet]
            public async Task<IActionResult> GetAll()
            {
                var posts = await _postRepository.GetAllAsync();
                var postDtos = _mapper.Map<IEnumerable<PostDto>>(posts);
                return Ok(postDtos);
            }

            [HttpGet("{id}")]
            public async Task<IActionResult> GetById(int id)
            {
                var post = await _postRepository.GetByIdAsync(id);
                if (post == null)
                {
                    return NotFound();
                }

                var postDto = _mapper.Map<PostDto>(post);
                return Ok(postDto);
            }

            [HttpPost]
            public async Task<IActionResult> Create(PostDto postDto)
            {
                // Validate the provided CategoryId
                var categoryExists = await _categoryRepository.GetByIdAsync(postDto.CategoryId);
                if (categoryExists == null)
                {
                    return BadRequest($"Category with ID {postDto.CategoryId} does not exist.");
                }

                // Map PostDto to Post model
                var post = _mapper.Map<Post>(postDto);

                // Save the new Post
                await _postRepository.CreateAsync(post);

                // Retrieve the created Post including its related category for accurate response
                var createdPost = await _postRepository.GetByIdAsync(post.PostId);

                // Map the created Post to PostDto for the response
                var createdPostDto = _mapper.Map<PostDto>(createdPost);

                // Return 201 Created with location header and created entity
                return CreatedAtAction(nameof(GetById), new { id = createdPostDto.Id }, createdPostDto);
            }


            [HttpPut("{id}")]
            public async Task<IActionResult> Update(int id, PostDto postDto)
            {
                if (id != postDto.Id)
                {
                    return BadRequest();
                }

                // Fetch the existing post
                var existingPost = await _postRepository.GetByIdAsync(id);
                if (existingPost == null)
                {
                    return NotFound();
                }

                // Update fields manually to avoid overwriting navigation properties
                existingPost.Title = postDto.Title;
                existingPost.Content = postDto.Content;
                existingPost.CategoryId = postDto.CategoryId;

                await _postRepository.UpdateAsync(existingPost);

                return NoContent();
            }


            [HttpDelete("{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                var post = await _postRepository.GetByIdAsync(id);
                if (post == null)
                {
                    return NotFound();
                }

                await _postRepository.DeleteAsync(id);
                return NoContent();
            }
        }
    }

}
