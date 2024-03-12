import { Bowler } from "./Bowler";
import { Team } from "./Team";

export type BowlerScore = {
  matchId: number;
  gameNumber: number;
  bowlerId: number;
  rawScore?: number;
  handiCapScore?: number;
  wonGame: boolean;
  bowler: Bowler | null;
};
