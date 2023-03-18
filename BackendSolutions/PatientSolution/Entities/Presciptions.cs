using System;
using DataEntities.Entities;

namespace DataEntities
{
    public class Presciptions : IPrescriptions
    {
        private readonly ProjectDatabaseContext context;
        public Presciptions(ProjectDatabaseContext _conext)
        {
            context = _conext;
        }

        public Prescription AddPrescription(Prescription prescription)
        {
            //throw new NotImplementedException();
            context.Prescriptions.Add(prescription);
            context.SaveChanges();
            return prescription;
        }

        public Prescription GetPrescription(Guid patientId) => context.Prescriptions.Where(x => x.HhId == patientId).FirstOrDefault();
    }
     
   
}

