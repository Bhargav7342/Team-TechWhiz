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
        IPatientCheckUp<DataEntities.Entities.PatientIntialCheckup> repo;
        public PatientCheckUpLogic(IPatientCheckUp<DataEntities.Entities.PatientIntialCheckup> _repo, AppointmentDbContext _context)
        {
            repo = _repo;
            context = _context;

        }

        public PatientIntialCheckUp AddCheckUpDetails(PatientIntialCheckUp intialCheckUp)
        {
            throw new NotImplementedException();
        }

        public PatientIntialCheckUp GetCheckUpDetails(Guid appointment_id)
        {
            throw new NotImplementedException();
        }

        public PatientIntialCheckUp UpdateCheckUpStatus(Guid appointment_id)
        {
            throw new NotImplementedException();
        }
    }
}
