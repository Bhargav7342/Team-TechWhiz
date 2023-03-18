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
        public Doctor AddDoctor(Doctor Doctor)
        {
            context.Doctors.Add(Doctor);
            context.SaveChanges();
            return Doctor;
        }

        public List<Doctor> GetAllDoctors()
        {
            return context.Doctors.ToList();
        }

        public List<Doctor> GetAllDoctorsByAvailability(string Day)
        {
            switch(Day)
            {
                case "Monday":
                    var Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Monday == true
                              select Doctor;
                    return Doc.ToList();
                case "Tuesday":
                     Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Tuesday == true
                              select Doctor;
                    return Doc.ToList();
                case "Wednesday":
                    Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Wednesday == true
                              select Doctor;
                    return Doc.ToList();
                case "Thursday":
                     Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Thursday == true
                              select Doctor;
                    return Doc.ToList();
                case "Friday":
                     Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Friday == true
                              select Doctor;
                    return Doc.ToList();
                case "Saturday":
                    Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Saturday == true
                              select Doctor;
                    return Doc.ToList();
                case "Sunday":
                     Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Sunday == true
                              select Doctor;
                    return Doc.ToList();
                default: return null;
            }
        }
        public List<Doctor> GetDoctorsByAvailabilityAndDepartment(string Day,string Department)
        {
            switch (Day)
            {
                case "Monday":
                    var Doc = from Doctor in context.Doctors
                              join physician in context.PhysicianAvailabilityStatuses
                              on Doctor.DoctorId equals physician.DoctorId
                              where physician.Monday == true && Doctor.Department == Department
                              select Doctor;
                    return Doc.ToList();
                case "Tuesday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Tuesday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                case "Wednesday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Wednesday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                case "Thursday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Thursday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                case "Friday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Friday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                case "Saturday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Saturday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                case "Sunday":
                    Doc = from Doctor in context.Doctors
                          join physician in context.PhysicianAvailabilityStatuses
                          on Doctor.DoctorId equals physician.DoctorId
                          where physician.Sunday == true && Doctor.Department == Department
                          select Doctor;
                    return Doc.ToList();
                default: return null;
            }
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
