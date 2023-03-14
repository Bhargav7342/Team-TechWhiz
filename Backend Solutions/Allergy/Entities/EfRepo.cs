using DataEntities;
using DataEntities.Entities;

namespace Entities
{
    public class EfRepo : IEfRepo
    {
        private readonly AllergyDContext context;
        public EfRepo(AllergyDContext _context)
        {
            context = _context;
        }
        public Allergy addPatientAllergy(Allergy allergy)
        {
            context.Allergies.Add(allergy);
            context.SaveChanges();
            return allergy;
        }

        public List<Allergy> GetAllAllergies(Guid patientId)
        {
            return context.Allergies.Where(x => x.PatientId == patientId).ToList();
        }
    }
}