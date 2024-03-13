using BowlingApi.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlingApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;

        public BowlingController(IBowlingRepository bowlingRepository)
        {
            _bowlingRepository = bowlingRepository;
        }

        
        //Endpoint that is called by the front end
        [HttpGet]
        public IEnumerable<BowlerDto> GetBowlersWithTeam()
        {
            var bowlersWithTeam = _bowlingRepository.GetAllBowlersWithTeam();
            return bowlersWithTeam;
        }


    }
}
