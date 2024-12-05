// MappingProfiles/MappingProfile.cs
using AutoMapper;
using SimpleBlogAPI._00016042.DTOs;
using SimpleBlogAPI._00016042.Models;

namespace SimpleBlogAPI._00016042.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Post, PostDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.PostId)); 

            // Reverse mapping between PostDto and Post
            CreateMap<PostDto, Post>()
                .ForMember(dest => dest.Category, opt => opt.Ignore());

            // Mapping between Category model and CategoryDto
            CreateMap<Category, CategoryDto>().ReverseMap();
        }
    }
}

