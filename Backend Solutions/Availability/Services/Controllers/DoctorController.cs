using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        IDoctorLogic _logic;
        public DoctorController(IDoctorLogic logic)
        {
            _logic = logic;
        }
        [HttpGet("GetAllDoctors")]
        public IActionResult GetAllDoctors()
        {
            try
            {
                var alldoctors = _logic.GetAllDoctors();
                if (alldoctors != null)
                {
                    return Ok(alldoctors);
                }
                return BadRequest();

            }
            catch (SqlException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("GetDoctorsByEmail")]
        public IActionResult GetDoctorsByEmail([FromHeader] string? Email)
        {
            try
            {
                var Doctor = _logic.GetDoctorByEmail(Email);
                if (Doctor != null)
                {
                    return Ok(Doctor);
                }
                return BadRequest();
            }
            catch (SqlException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("GetDoctorsByDepartment")]
        public IActionResult GetDoctorByDepartment([FromHeader] string? Department)
        {
            try
            {
                var Doctor = _logic.GetDoctorByDepartment(Department);
                if (Doctor != null)
                {
                    return Ok(Doctor);
                }
                return BadRequest();
            }
            catch (SqlException e)
            {
                return BadRequest(e.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
