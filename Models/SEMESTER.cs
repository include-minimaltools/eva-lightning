namespace eva_lightning.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("SEMESTER")]
    public partial class SEMESTER
    {
        [Required]
        [StringLength(10)]
        public string ID_SEMESTER { get; set; }

        [Required]
        [StringLength(10)]
        public string N_SEMESTER { get; set; }

        [Key]
        [Column(Order = 0)]
        [StringLength(5)]
        public string ID_CAREER { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID_COURSE { get; set; }

        public virtual CAREER CAREER { get; set; }

        public virtual COURSE COURSE { get; set; }
    }
}
