using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataEntities.Entities;

namespace DataEntities
{
    public class PatientCheckUpRepo : IPatientCheckUpRepo<PatientIntialCheckup>
    {
        AppointmentDbContext context;
        public PatientCheckUpRepo(AppointmentDbContext _context)
        {
            context = _context;

        }
        public PatientIntialCheckup AddCheckUpDetails(PatientIntialCheckup intialCheckUp)
        {
            context.PatientIntialCheckups.Add(intialCheckUp);
            context.SaveChanges();
            return intialCheckUp;
        }

        public IEnumerable<PatientIntialCheckup> GetCheckUpDetails(Guid appiontment_id)
        {
            return context.PatientIntialCheckups.Where(a=>a.AppointmentId==appiontment_id).ToList();
        }
    }
}
