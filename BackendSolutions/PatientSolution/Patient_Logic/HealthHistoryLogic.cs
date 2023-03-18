using System;
using Models;
using DataEntities;

namespace Patient_Logic
{
	public class HealthHistoryLogic : IHealthHistoryLogic
	{
        IHealthHistory h;
		public HealthHistoryLogic(IHealthHistory _h)
		{
            h = _h;
		}

        public HealthHistory AddHealthHistory(HealthHistory healthHistory) => Mapper.Map(h.AddHealthHistory(Mapper.Map(healthHistory)));
      
        

        public HealthHistory GetHealthHistory(Guid patientId) => Mapper.Map(h.GetHealthHistory(patientId));
       
    }
}

