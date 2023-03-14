using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataEntities.Entities;

namespace DataEntities
{
    public  interface IAppointmentRepo<Appointment>
    {
        public  List<DataEntities.Entities.Appointment> GetAppointmentsByPatient(Guid patient_id);


        public List<DataEntities.Entities.Appointment> GetAppointmentsByDate(DateTime date);

        public List<DataEntities.Entities.Appointment> GetAppointmentsByDoctor(Guid doctor_id);


        public DataEntities.Entities.PatientIntialCheckup UpdateStatus(Guid appointment_id);

        public DataEntities.Entities.Appointment AddAppointment(DataEntities.Entities.Appointment appointment);

    }
}
