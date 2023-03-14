using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic
{
    public interface IAppointment
    {
        public  IEnumerable<Models.Appointment> GetAppointmentsByPatient(Guid patient_id);

        public List<Models.Appointment> GetAppointmentsByDate(DateTime date);

        public IEnumerable<Models.Appointment> GetAppointmentsByDoctor(Guid doctor_id);

        public Models.PatientIntialCheckUp UpdateStatus(Guid appointment_id);

        public Models.Appointment AddAppointment(Models.Appointment appointment);

       



    }
}
