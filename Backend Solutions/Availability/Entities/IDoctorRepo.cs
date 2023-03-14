using TE = DataEntities.Entities;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities
{
    public interface IDoctorRepo
    {
        public List<TE.Doctor> GetAllDoctors();
        public TE.Doctor GetDoctorByEmail(string Email);
        public TE.Doctor GetDoctorByDepartment(string Department);
        public List<TE.Doctor> GetAllDoctorsByAvailability(string Day);
        public TE.Doctor AddDoctor(string Email, TE.Doctor Doctor);

    }
}
