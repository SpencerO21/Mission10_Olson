﻿namespace BowlingApi.Data
{
    public interface IBowlingRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<BowlerDto> GetAllBowlersWithTeam();
    }
}
