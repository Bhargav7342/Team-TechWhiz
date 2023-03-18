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
            var existing = context.PhysicianAvailabilityStatuses.FirstOrDefault(x=>x.DoctorId==phy_status.DoctorId);
            if (existing != null)
            {
                existing.Sunday = phy_status.Sunday;
                existing.Monday = phy_status.Monday;
                existing.Tuesday = phy_status.Tuesday;
                existing.Wednesday = phy_status.Wednesday;
                existing.Thursday = phy_status.Thursday;
                existing.Friday = phy_status.Friday;
                existing.Saturday = phy_status.Saturday;
            }
            context.Update(existing);
            context.SaveChanges();
            return existing;
        }
    }
}
