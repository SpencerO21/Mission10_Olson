
namespace BowlingApi.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingDbContext _context;
        public EFBowlingRepository(BowlingDbContext temp) { 
            _context = temp;
        }
        IEnumerable<Bowler> IBowlingRepository.Bowlers => _context.Bowlers;
    }
}
