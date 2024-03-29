namespace eva_lightning.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class TYPE_TASK
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TYPE_TASK()
        {
            TASK = new HashSet<TASK>();
        }

        [Key]
        [StringLength(10)]
        public string ID_TYPE_TASK { get; set; }

        [StringLength(500)]
        public string DESCRIPTION { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TASK> TASK { get; set; }
    }
}
