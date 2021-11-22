using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace eva_lightning.Models
{
    public partial class UniModel : DbContext
    {
        public UniModel(DbContextOptions<UniModel> options)
            : base(options)
        {
        }

        public virtual DbSet<CAMPUS> CAMPUS { get; set; }
        public virtual DbSet<CAREER> CAREER { get; set; }
        public virtual DbSet<COURSE> COURSE { get; set; }
        public virtual DbSet<FACULTY> FACULTY { get; set; }
        public virtual DbSet<GROUPS> GROUPS { get; set; }
        public virtual DbSet<PERMISSION> PERMISSION { get; set; }
        public virtual DbSet<ROLE> ROLE { get; set; }
        public virtual DbSet<ROLE_PERMISSION> ROLE_PERMISSION { get; set; }
        public virtual DbSet<SEMESTER> SEMESTER { get; set; }
        public virtual DbSet<STUDENT> STUDENT { get; set; }
        public virtual DbSet<STUDENT_COURSE> STUDENT_COURSE { get; set; }
        public virtual DbSet<STUDENT_TASK> STUDENT_TASK { get; set; }
        public virtual DbSet<TASK> TASK { get; set; }
        public virtual DbSet<TASK_COMMENT> TASK_COMMENT { get; set; }
        public virtual DbSet<TEACHER> TEACHER { get; set; }
        public virtual DbSet<TEACHER_COURSE> TEACHER_COURSE { get; set; }
        public virtual DbSet<TEACHER_GROUPS> TEACHER_GROUPS { get; set; }
        public virtual DbSet<TYPE_TASK> TYPE_TASK { get; set; }
        public virtual DbSet<USERS> USERS { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CAMPUS>()
                .HasMany(e => e.CAREER)
                .WithOne(e => e.CAMPUS1)
                .HasForeignKey(e => e.CAMPUS)
                .OnDelete(DeleteBehavior.Cascade);
                // .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CAREER>()
                .Property(e => e.ID_CAREER)
                .IsUnicode(false);

            modelBuilder.Entity<CAREER>()
                .HasMany(e => e.COURSE)
                .WithOne(e => e.CAREER)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CAREER>()
                .HasMany(e => e.SEMESTER)
                .WithOne(e => e.CAREER)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CAREER>()
                .HasMany(e => e.STUDENT)
                .WithOne(e => e.CAREER)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<COURSE>()
                .Property(e => e.NAME)
                .IsFixedLength();

            modelBuilder.Entity<COURSE>()
                .Property(e => e.OBJECTS)
                .IsFixedLength();

            modelBuilder.Entity<COURSE>()
                .Property(e => e.ID_CAREER)
                .IsUnicode(false);

            modelBuilder.Entity<COURSE>()
                .HasMany(e => e.SEMESTER)
                .WithOne(e => e.COURSE)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<COURSE>()
                .HasMany(e => e.STUDENT_COURSE)
                .WithOne(e => e.COURSE)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<COURSE>()
                .HasMany(e => e.TASK)
                .WithOne(e => e.COURSE)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<COURSE>()
                .HasMany(e => e.TEACHER_COURSE)
                .WithOne(e => e.COURSE)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FACULTY>()
                .HasMany(e => e.CAREER)
                .WithOne(e => e.FACULTY1)
                .HasForeignKey(e => e.FACULTY)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FACULTY>()
                .HasMany(e => e.TEACHER)
                .WithOne(e => e.FACULTY)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<GROUPS>()
                .Property(e => e.ID_GROUPS)
                .IsUnicode(false);

            modelBuilder.Entity<GROUPS>()
                .Property(e => e.NAME)
                .IsFixedLength();

            modelBuilder.Entity<GROUPS>()
                .HasMany(e => e.STUDENT)
                .WithOne(e => e.GROUPS)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<GROUPS>()
                .HasMany(e => e.TEACHER_GROUPS)
                .WithOne(e => e.GROUPS)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<PERMISSION>()
                .HasMany(e => e.ROLE_PERMISSION)
                .WithOne(e => e.PERMISSION)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ROLE>()
                .HasMany(e => e.ROLE_PERMISSION)
                .WithOne(e => e.ROLE)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ROLE>()
                .HasMany(e => e.USERS)
                .WithOne(e => e.ROLE1)
                .HasForeignKey(e => e.ROLE);

            modelBuilder.Entity<SEMESTER>()
                .HasKey(e => e.ID_SEMESTER);
                // .Property(e => e.ID_SEMESTER)
                // .IsFixedLength();

            modelBuilder.Entity<SEMESTER>()
                .Property(e => e.N_SEMESTER)
                .IsFixedLength();

            modelBuilder.Entity<SEMESTER>()
                .Property(e => e.ID_CAREER)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT>()
                .Property(e => e.CARNET)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT>()
                .Property(e => e.ID_CAREER)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT>()
                .Property(e => e.ID_GROUPS)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT>()
                .HasMany(e => e.STUDENT_COURSE)
                .WithOne(e => e.STUDENT)
                .HasForeignKey(e => e.ID_STUDENT)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<STUDENT>()
                .HasMany(e => e.STUDENT_TASK)
                .WithOne(e => e.STUDENT)
                .HasForeignKey(e => e.ID_STUDENT)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<STUDENT_COURSE>()
                .HasKey(e => new { e.ID_STUDENT, e.ID_COURSE });

            modelBuilder.Entity<STUDENT_COURSE>()
                .Property(e => e.ID_STUDENT)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT_TASK>()
                .HasKey(e => new { e.ID_STUDENT, e.ID_TASK });

            modelBuilder.Entity<STUDENT_TASK>()
                .Property(e => e.ID_STUDENT)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT_TASK>()
                .Property(e => e.ID_TASK)
                .IsUnicode(false);

            modelBuilder.Entity<STUDENT_TASK>()
                .Property(e => e.QUALIFICATION)
                .IsFixedLength();

            modelBuilder.Entity<STUDENT_TASK>()
                .Property(e => e.TASK_FILE)
                .IsFixedLength();

            modelBuilder.Entity<TASK>()
                .Property(e => e.ID_TASK)
                .IsUnicode(false);

            modelBuilder.Entity<TASK>()
                .Property(e => e.ID_TYPE_TASK)
                .IsFixedLength();

            modelBuilder.Entity<TASK>()
                .HasMany(e => e.STUDENT_TASK)
                .WithOne(e => e.TASK)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TASK_COMMENT>()
                .Property(e => e.TYPE_TASK)
                .IsFixedLength();

            modelBuilder.Entity<TASK_COMMENT>()
                .Property(e => e.DESCRIPTION)
                .IsUnicode(false);

            modelBuilder.Entity<TEACHER>()
                .Property(e => e.NAME)
                .IsFixedLength();

            modelBuilder.Entity<TEACHER>()
                .Property(e => e.LASTNAME)
                .IsFixedLength();

            modelBuilder.Entity<TEACHER>()
                .HasMany(e => e.TEACHER_COURSE)
                .WithOne(e => e.TEACHER)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TEACHER_COURSE>()
                .HasKey(e => new { e.ID_TEACHER, e.ID_COURSE });

            modelBuilder.Entity<TEACHER>()
                .HasMany(e => e.TEACHER_GROUPS)
                .WithOne(e => e.TEACHER)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TEACHER_GROUPS>()
                .HasKey(e => new { e.ID_TEACHER, e.ID_GROUPS });

            modelBuilder.Entity<TEACHER_GROUPS>()
                .Property(e => e.ID_GROUPS)
                .IsUnicode(false);

            modelBuilder.Entity<TYPE_TASK>()
                .Property(e => e.ID_TYPE_TASK)
                .IsFixedLength();

            modelBuilder.Entity<TYPE_TASK>()
                .Property(e => e.DESCRIPTION)
                .IsFixedLength();

            modelBuilder.Entity<TYPE_TASK>()
                .HasMany(e => e.TASK)
                .WithOne(e => e.TYPE_TASK)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<USERS>()
                .HasMany(e => e.STUDENT)
                .WithOne(e => e.USERS)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<USERS>()
                .HasMany(e => e.TEACHER)
                .WithOne(e => e.USERS)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<ROLE_PERMISSION>()
                .HasKey(rp => new { rp.ID_ROLE, rp.ID_PERMISSION });
        }
    }
}
