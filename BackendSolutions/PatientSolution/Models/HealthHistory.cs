namespace Models
{
    public class HealthHistory
    {
        public Guid HhId { get; set; }

        public Guid? PatientId { get; set; }

        public string? Date { get; set; }

        public string? DoctorName { get; set; }

        public string? Diagnosis { get; set; }

        //public virtual Patient? Patient { get; set; }

    }
}