using BussinessLogic;
using DataEntities.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Models;

namespace ServiceLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private IAppointment _logic;
        
        public AppointmentController(IAppointment logic)
        {
            _logic = logic;
            
        }

        [HttpGet("getappointmentsbypatientid")]
        public ActionResult GetAppointmentByPatientId([FromHeader] Guid id)
        {


            var appointments = _logic.GetAppointmentsByPatient(id);
            if (appointments != null)
            {
                return Ok(appointments);
            }
            else
            {
                return NoContent();
            }
        }


        [HttpGet("getappointmentsbyDoctorid")]
        public ActionResult GetAppointmentsByDoctorId([FromHeader] Guid id)
        {


            var appointments = _logic.GetAppointmentsByDoctor(id);
            if (appointments != null)
            {
                return Ok(appointments);
            }
            else
            {
                return NoContent();
            }
        }

        [HttpPost("BookAppiontment")] // Trying to create a resource on the server
        public ActionResult AddAppointment([FromBody] Models.Appointment a)
        {
            try
            {
               

                _logic.AddAppointment(a);
                return Created("Add", a);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
