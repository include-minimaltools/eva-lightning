namespace eva_lightning.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class TEACHER_COURSE
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(10)]
        public string ID_TEACHER { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID_COURSE { get; set; }

        [Required]
        [StringLength(20)]
        public string USER_CREATE { get; set; }

        public DateTime DATE_CREATE { get; set; }

        [StringLength(20)]
        public string USER_UPDATE { get; set; }

        public DateTime? DATE_UPDATE { get; set; }

        public virtual COURSE COURSE { get; set; }

        public virtual TEACHER TEACHER { get; set; }
    }
}
