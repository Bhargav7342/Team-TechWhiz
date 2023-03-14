using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntities
{
    public interface IPatientCheckUpRepo<PatientIntialCheckUp>
    {
        public IEnumerable<PatientIntialCheckUp> GetCheckUpDetails(Guid appiontment_id);
        public DataEntities.Entities.PatientIntialCheckup AddCheckUpDetails(PatientIntialCheckUp intialCheckUp);
    }
}
