using DataEntities.Entities;

namespace DataEntities
{
    public class AppointmentRepo : IAppointmentRepo<Appointment>
    {
        AppointmentDbContext context;
        public AppointmentRepo(AppointmentDbContext _context)
        {
            context = _context;
        }
        public Appointment AddAppointment(Appointment appointment)
        {
            context.Appointments.Add(appointment);
            context.SaveChanges();
            return appointment;
        }

        public List<Appointment> GetAppointmentsByDate(DateTime date)
        {
            var find=context.Appointments.Where(a=>a.Date==date.Date).ToList();
            return find;
        }

        public List<Appointment> GetAppointmentsByDoctor(Guid doctor_id)
        {
            return context.Appointments.Where(a => a.DoctorId == doctor_id).ToList();
        }

        public List<Appointment> GetAppointmentsByPatient(Guid patient_id)
        {
            return context.Appointments.Where(a => a.PatientId == patient_id).ToList();
        }



    

        Appointment IAppointmentRepo<Appointment>.UpdateStatus(Appointment appointment)
        {
            context.Appointments.Update(appointment);
            context.SaveChanges();
            return appointment;
        }
    }
}