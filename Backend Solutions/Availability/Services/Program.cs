using BusinessLogic;
using DataEntities;
using DataEntities.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var trainer_config = builder.Configuration.GetConnectionString("ConnectionString");
builder.Services.AddDbContext<DoctorDbContext>(options => options.UseSqlServer(trainer_config));
builder.Services.AddScoped<IDoctorLogic, Logic>();
builder.Services.AddScoped<IPhysicianAvailabilityStatus, Logic>();
builder.Services.AddScoped<IDoctorRepo, DoctorRepo>();
builder.Services.AddScoped<IPhysicianRepo, PhysicianRepo>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
