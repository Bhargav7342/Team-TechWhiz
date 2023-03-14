using DataEntities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities
{
    public class PhysicianRepo : IPhysicianRepo
    {
        DoctorDbContext context;
        public PhysicianRepo(DoctorDbContext _context)
        {
            context = _context;
        }
        public PhysicianAvailabilityStatus AddAvailability(PhysicianAvailabilityStatus phy_status)
        {
            context.PhysicianAvailabilityStatuses.Add(phy_status);
            context.SaveChanges();
            return phy_status;
        }

        public PhysicianAvailabilityStatus UpdateAvailability(PhysicianAvailabilityStatus phy_status)
        {
            throw new NotImplementedException();
        }
    }
}
