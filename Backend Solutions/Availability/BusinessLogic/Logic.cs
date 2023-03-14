using DataEntities;
using DataEntities.Entities;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class Logic : IDoctorLogic, IPhysicianAvailabilityStatus
    {
        //DoctorDbContext context = new DoctorDbContext();    
        //DoctorDbContext context;
        //public Logic(DoctorDbContext context)
        //{
        //    this.context = context;
        //}
        private readonly IDoctorRepo doctorRepo;
        public Logic(IDoctorRepo _doctorRepo)
        {
            doctorRepo= _doctorRepo;
        }

        public DataEntities.Entities.PhysicianAvailabilityStatus AddAvailability(Models.PhysicianAvailabilityStatus phy_status)
        {
            throw new NotImplementedException();
        }

        public DataEntities.Entities.Doctor AddDoctor(string? Email, Models.Doctor Doctor)
        {
            throw new NotImplementedException();
        }

        public List<Models.Doctor> GetAllDoctors()
        {
            return Mapper.MapDoctor(doctorRepo.GetAllDoctors());
        }

        public List<Models.Doctor> GetAllDoctorsByAvailability(string Day)
        {
            throw new NotImplementedException();
        }

        public List<Models.Doctor> GetDoctorByDepartment(string? Department)
        {
            //return Mapper.MapDoctor(doctorRepo.GetDoctorByDepartment(Department));
            return Mapper.MapDoctor(doctorRepo.GetDoctorByDepartment(Department));
        }

        public Models.Doctor GetDoctorByEmail(string? Email)
        {
            return Mapper.MapDoctor(doctorRepo.GetDoctorByEmail(Email));
        }

        public void UpdateAvailability(Models.PhysicianAvailabilityStatus phy_status)
        {
            throw new NotImplementedException();
        }
    }
}
