namespace Patient_Logic
{
    public class Mapper
    {
        public static Models.Patient Map(Data.Entities.Patient patient)
        {
            return new Models.Patient()
            {
                PatientId = patient.PatientId,
                FirstName= patient.FirstName,
                LastName= patient.LastName,
                Email= patient.Email,
                Password= patient.Password,
                Phone= patient.Phone,
                Gender= patient.Gender,
                DateOfBirth= patient.DateOfBirth,
                City= patient.City,
                State= patient.State,
                Zipcode= patient.Zipcode,
                BloodGroup= patient.BloodGroup
            };
        }

        public static Data.Entities.Patient Map(Models.Patient patient)
        {
            return new Data.Entities.Patient()
            {
                PatientId = patient.PatientId,
                FirstName= patient.FirstName,
                LastName= patient.LastName,
                Email= patient.Email,
                Password= patient.Password,
                Phone= patient.Phone,
                Gender= patient.Gender,
                DateOfBirth= patient.DateOfBirth,
                City= patient.City,
                State= patient.State,
                Zipcode= patient.Zipcode,
                BloodGroup= patient.BloodGroup
            };
        }

        public static IEnumerable<Models.Patient> Map(IEnumerable<Data.Entities.Patient> patients)
        {
            return patients.Select(Map);
        }

        public static Models.HealthHistory Map(Data.Entities.HealthHistory hh)
        {
            return new Models.HealthHistory()
            {
                HhId= hh.HhId,
                PatientId= hh.PatientId,
                Date= hh.Date,
                DoctorName= hh.DoctorName,
                Diagnosis= hh.Diagnosis
            };
        }

        public static Data.Entities.HealthHistory Map(Models.HealthHistory hh)
        {
            return new Data.Entities.HealthHistory()
            {
                HhId= hh.HhId,
                PatientId= hh.PatientId,
                Date= hh.Date,
                DoctorName= hh.DoctorName,
                Diagnosis= hh.Diagnosis
            };
        }

        public static IEnumerable<Models.HealthHistory> Map(IEnumerable<Data.Entities.HealthHistory> hh)
        {
            return hh.Select(Map);
        }

        public static Models.Prescriptions Map(Data.Entities.Prescription p)
        {
            return new Models.Prescriptions()
            {
                PrescriptionId=p.PrescriptionId,
                HhId= p.HhId,
                MedicineName= p.MedicineName,
                Dosage= p.Dosage,
                Note= p.Note
            };
        }

        public static Data.Entities.Prescription Map(Models.Prescriptions p)
        {
            return new Data.Entities.Prescription()
            {
                PrescriptionId=p.PrescriptionId,
                HhId= p.HhId,
                MedicineName= p.MedicineName,
                Dosage= p.Dosage,
                Note= p.Note
            };
        }

        public static IEnumerable<Models.Prescriptions> Map(IEnumerable<Data.Entities.Prescription> p)
        {
            return p.Select(Map);
        }
    }
}