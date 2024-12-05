using Microsoft.EntityFrameworkCore;
using SimpleBlogAPI._00016042.Data;
using SimpleBlogAPI._00016042.MappingProfiles;
using SimpleBlogAPI._00016042.Models;
using SimpleBlogAPI._00016042.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

builder.Services.AddAutoMapper(typeof(MappingProfile));

// Add DbContext and configure with SQL Server (same as previous example)
builder.Services.AddDbContext<SimpleBlogContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnection1")));

// Register repositories (same approach as the previous example)
builder.Services.AddTransient<IRepository<Category>, CategoryRepository>();
builder.Services.AddTransient<IRepository<Post>, PostRepository>();

// Swagger setup (same as before)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp");

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
