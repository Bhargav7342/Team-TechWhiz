using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Models;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhysicianAvailabilityStatusController : ControllerBase
    {
        IPhysicianAvailabilityStatus _logic;
        public PhysicianAvailabilityStatusController(IPhysicianAvailabilityStatus logic)
        {
            _logic = logic;
        }
        [HttpPost("AddAvailability")]
        public IActionResult AddAvailability([FromBody] PhysicianAvailabilityStatus physicianAvailabilityStatus)
        {
            try
            {
                var avail=_logic.AddAvailability(physicianAvailabilityStatus);
                return Ok(avail);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
