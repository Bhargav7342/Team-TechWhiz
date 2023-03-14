using DataEntities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities
{
    public class DoctorRepo : IDoctorRepo
    {
        DoctorDbContext context;
        public DoctorRepo(DoctorDbContext _context)
        {
            context = _context;
        }
        public Doctor AddDoctor(string Email, Doctor Doctor)
        {
            throw new NotImplementedException();
        }

        public List<Doctor> GetAllDoctors()
        {
            return context.Doctors.ToList();
        }

        public List<Doctor> GetAllDoctorsByAvailability(string Day)
        {
            throw new NotImplementedException();
        }

        public  List<Doctor> GetDoctorByDepartment(string Department)
        {
            var doctor = GetAllDoctors();
            var dept = doctor.Where(x=> x.Department == Department);
            return dept.ToList();
        }

        public Doctor GetDoctorByEmail(string Email)
        {
            var doctors=GetAllDoctors();
            var result=doctors.FirstOrDefault(x => x.Email == Email);
            return result;
        }
    }
}
