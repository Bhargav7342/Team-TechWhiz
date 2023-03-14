using System;
using DataEntities.Entities;

namespace DataEntities
{
    public class HealthHistoryRepo : IHealthHistory
    {
        private readonly ProjectDatabaseContext context;
        public HealthHistoryRepo(ProjectDatabaseContext _context)
        {
            context = _context;
        }
        public HealthHistory AddHealthHistory(HealthHistory healthHistory)
        {
            context.HealthHistories.Add(healthHistory);
            context.SaveChanges();
            return healthHistory;
        }

        public HealthHistory GetHealthHistory(Guid patientId) => context.HealthHistories.Where(x => x.PatientId == patientId).FirstOrDefault();
     
    }
}

