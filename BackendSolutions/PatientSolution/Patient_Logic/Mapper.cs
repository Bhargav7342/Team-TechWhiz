using DataEntities;
using DataEntities.Entities;

namespace Patient_Logic
{
    public class Mapper
    {
        public static Models.Patient Map(Patient patient)
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

        public static Patient Map(Models.Patient patient)
        {
            return new Patient()
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

        public static IEnumerable<Models.Patient> Map(IEnumerable<Patient> patients)
        {
            return patients.Select(Map);
        }

        public static Models.HealthHistory Map(HealthHistory hh)
        {
            return new Models.HealthHistory()
            {
                HhId= hh.HhId,
                AppointmentId= hh.AppointmentId,
                PatientId= hh.PatientId,
                Date= hh.Date,
                DoctorName= hh.DoctorName,
                Diagnosis= hh.Diagnosis
            };
        }

        public static HealthHistory Map(Models.HealthHistory hh)
        {
            return new HealthHistory()
            {
                HhId= hh.HhId,
                AppointmentId= hh.AppointmentId,
                PatientId= hh.PatientId,
                Date= hh.Date,
                DoctorName= hh.DoctorName,
                Diagnosis= hh.Diagnosis
            };
        }

        public static IEnumerable<Models.HealthHistory> Map(IEnumerable<HealthHistory> hh)
        {
            return hh.Select(Map);
        }

        public static Models.Prescriptions Map(Prescription p)
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

        public static Prescription Map(Models.Prescriptions p)
        {
            return new Prescription()
            {
                PrescriptionId=p.PrescriptionId,
                HhId= p.HhId,
                MedicineName= p.MedicineName,
                Dosage= p.Dosage,
                Note= p.Note
            };
        }

        public static IEnumerable<Models.Prescriptions> Map(IEnumerable<Prescription> p)
        {
            return p.Select(Map);
        }
    }
}