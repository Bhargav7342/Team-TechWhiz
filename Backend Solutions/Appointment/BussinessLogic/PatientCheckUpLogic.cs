using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataEntities.Entities;
using DataEntities;
using Models;

namespace BussinessLogic

{
    public class PatientCheckUpLogic : IPatientCheckUP
    {
        AppointmentDbContext context;
        IPatientCheckUpRepo repo;
        public PatientCheckUpLogic(IPatientCheckUpRepo _repo, AppointmentDbContext _context)
        {
            repo = _repo;
            context = _context;

        }

        public PatientIntialCheckUp AddCheckUpDetails(PatientIntialCheckUp initialCheckUp)
        {
            return Mapper.Map(repo.AddCheckUpDetails(Mapper.Map(initialCheckUp)));
        }

        public IEnumerable<PatientIntialCheckUp> GetCheckUpDetails(Guid appointment_id)
        {
            return Mapper.Map(repo.GetCheckUpDetails(appointment_id));
        }
    }
}
