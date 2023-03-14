using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataEntities;
using DataEntities.Entities;
using Microsoft.EntityFrameworkCore;
using Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;

namespace BussinessLogic
{
    public class AppointmentLogic : IAppointment
    {
     
        AppointmentDbContext context;
        IAppointmentRepo<DataEntities.Entities.Appointment> repo;
        public AppointmentLogic(IAppointmentRepo<DataEntities.Entities.Appointment> _repo, AppointmentDbContext _context)
        {
            repo = _repo;
            context = _context;

        }

        public Models.Appointment AddAppointment(Models.Appointment appointment)
        {

            return Mapper.Map( repo.AddAppointment(Mapper.Map(appointment)));
        }

        public List<Models.Appointment> GetAppointmentsByDate(DateTime date)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Models.Appointment> GetAppointmentsByDoctor(Guid doctor_id)
        {
            return Mapper.Map(repo.GetAppointmentsByPatient(doctor_id));
        }

      

        public PatientIntialCheckUp UpdateStatus(Guid appointment_id)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Models.Appointment> IAppointment.GetAppointmentsByPatient(Guid patient_id)
        {
            return Mapper.Map(repo.GetAppointmentsByPatient(patient_id));
        }
    }
}
