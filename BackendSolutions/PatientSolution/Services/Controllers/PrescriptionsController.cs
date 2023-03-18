using System;
using System.Collections.Generic;
using System.Linq;
using Patient_Logic;
using Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Services.Controllers
{
    [Route("api/[controller]")]
    public class PrescriptionsController : Controller
    {

        IPresciptionLogic presciption;
        public PrescriptionsController(IPresciptionLogic _prescription)
        {
            presciption = _prescription;
        }

        // GET api/values/5
        [HttpGet("Get_Prescription")]
        public IActionResult Get([FromHeader] Guid prId)
        {
            var x = presciption.GetPrescriptions(prId);
            if (x != null)
            {
                return Ok(x);
            }
            else
            {
                return BadRequest("Something");
            }
        }

        // POST api/values
        [HttpPost("Prescription_Add")]
        public IActionResult Post([FromBody]Prescriptions prescriptions)
        {
            var p = presciption.AddPrescriptions(prescriptions);
            if (p != null) return Ok(prescriptions);
            else return BadRequest("Something");
            
        }


    }
}

