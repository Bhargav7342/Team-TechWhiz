using Microsoft.EntityFrameworkCore;
using ED = DataEntities.Entities;
namespace BusinessLogic
{
    public class Mapper
    {
        public static ED.Allergy AllergyMapper(Models.Allergy a)
        {
            return new ED.Allergy()
            {
                AllergyId= a.AllergyId,
                AllergyName= a.AllergyName,
                PatientId= a.PatientId,
            };
        }

        public static Models.Allergy AllergyMapper(ED.Allergy a)
        {
            return new Models.Allergy()
            {
                AllergyId = a.AllergyId,
                AllergyName = a.AllergyName,
                PatientId = a.PatientId,
            };
        }

        public static List<Models.Allergy> AllergyMapper(List<ED.Allergy> a)
        {
            return a.Select(AllergyMapper).ToList();
        }
    }
}