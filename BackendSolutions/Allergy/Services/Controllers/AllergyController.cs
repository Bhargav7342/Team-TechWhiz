using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllergyController : ControllerBase
    {
        private readonly Ilogic logic;
        public AllergyController(Ilogic _logic)
        {
            logic   = _logic;
        }
        [HttpGet]
        public  IActionResult GetAllAllergy([FromHeader] Guid patientId)
        {
            try
            {
                var allergyList = logic.GetAllAllergies(patientId);
                return Ok(allergyList);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult PostAllergy(Allergy allergy)
        {
            try
            {
                return Ok(logic.addPatientAllergy(allergy));
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
