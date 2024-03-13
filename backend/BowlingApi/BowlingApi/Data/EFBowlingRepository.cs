using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BowlingApi.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private readonly BowlingDbContext _context;

        public EFBowlingRepository(BowlingDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowler> Bowlers => _context.Bowlers;

        // This function gets the bowlers and their team name
        public IEnumerable<BowlerDto> GetAllBowlersWithTeam()
        {
            var bowlersWithTeam = from bowler in _context.Bowlers
                                  join team in _context.Teams on bowler.TeamId equals team.TeamId into bowlerTeam
                                  from bt in bowlerTeam.DefaultIfEmpty()
                                  select new BowlerDto
                                  {
                                      BowlerId = bowler.BowlerId,
                                      BowlerLastName = bowler.BowlerLastName,
                                      BowlerFirstName = bowler.BowlerFirstName,
                                      BowlerMiddleInit = bowler.BowlerMiddleInit,
                                      BowlerAddress = bowler.BowlerAddress,
                                      BowlerCity = bowler.BowlerCity,
                                      BowlerState = bowler.BowlerState,
                                      BowlerZip = bowler.BowlerZip,
                                      BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                                      TeamName = bt != null ? bt.TeamName : "No Team" // Handle cases where no team is assigned
                                  };


            return bowlersWithTeam.ToList();
        }
    }
}
