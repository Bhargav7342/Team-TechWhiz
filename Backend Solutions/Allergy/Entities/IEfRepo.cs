using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ED = DataEntities.Entities;

namespace DataEntities
{
    internal interface IEfRepo
    {
        public List<ED.Allergy> GetAllAllergies(Guid patientId);
        public ED.Allergy addPatientAllergy(Guid patientId, string AllergyName);
    }
}


