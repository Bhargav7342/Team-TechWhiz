using System;
using System.Collections.Generic;
using System.Linq;
using Models;
using Patient_Logic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DataEntities.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Services.Controllers
{
    [Route("api/[controller]")]
    public class HealthHistoryController : Controller
    {
        private readonly IHealthHistoryLogic healthLogic;
        public HealthHistoryController(IHealthHistoryLogic _healthLogic)
        {
            healthLogic = _healthLogic;
        }
    

        // GET api/values/5
        [HttpGet ("GetHistory")]
        public IActionResult Get([FromHeader]  Guid patientId)
        {
            var x = healthLogic.GetHealthHistory(patientId);
            if (x != null)
            {
                return Ok(x);
            }
            else
            {
                return BadRequest("Something");
            }
        }

        [HttpPost("HealthHistory_Add")]
        public IActionResult Post([FromBody] Models.HealthHistory healthHistory)
        {
            healthHistory.Date = healthHistory.Date.AddDays(1);
            var s = healthLogic.AddHealthHistory(healthHistory);
            if (s != null)
            {
                return Ok(healthHistory);
            }
            else
            {
                return BadRequest("Somwtinf");
            }

        }
    }
}

