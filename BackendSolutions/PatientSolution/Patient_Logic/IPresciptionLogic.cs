using System;
using Models;
namespace Patient_Logic
{
	public interface IPresciptionLogic
	{
		Prescriptions AddPrescriptions(Prescriptions prescriptions);
		Prescriptions GetPrescriptions(Guid prId);
		
	}
}

