namespace eva_lightning.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public partial class TASK_COMMENT
    {
        [Key]
        [StringLength(10)]
        public string ID_TASK_COMMENT { get; set; }

        [Required]
        [StringLength(10)]
        public string ID_STUDENT_TASK { get; set; }

        [Required]
        [StringLength(50)]
        public string EMAIL_USER { get; set; }

        [Required]
        [StringLength(10)]
        public string TYPE_TASK { get; set; }

        [StringLength(500)]
        public string DESCRIPTION { get; set; }

        [Required]
        [StringLength(20)]
        public string USER_CREATE { get; set; }

        public DateTime DATE_CREATE { get; set; }

        [StringLength(20)]
        public string USER_UPDATE { get; set; }

        public DateTime? DATE_UPDATE { get; set; }
    }
}
