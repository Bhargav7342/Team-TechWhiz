using Entity = DataEntities.Entities;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public interface IPhysicianAvailabilityStatus
    {
        public Entity.PhysicianAvailabilityStatus AddAvailability(Models.PhysicianAvailabilityStatus phy_status);
        public void UpdateAvailability(Models.PhysicianAvailabilityStatus phy_status);
    }
}
