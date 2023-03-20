using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DataEntities.Entities;

public partial class AllergyDContext : DbContext
{
    public AllergyDContext()
    {
    }

    public AllergyDContext(DbContextOptions<AllergyDContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Allergy> Allergies { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Allergy>(entity =>
        {
            entity.HasKey(e => e.AllergyId).HasName("PK__Allergy__5855FEB7877947C2");

            entity.ToTable("Allergy");

            entity.Property(e => e.AllergyId)
                .HasDefaultValueSql("(newid())")
                .HasColumnName("Allergy_Id");
            entity.Property(e => e.AllergyName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Allergy_Name");
            entity.Property(e => e.PatientId).HasColumnName("Patient_Id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
