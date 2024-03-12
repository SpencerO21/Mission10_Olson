import { Bowler } from "./Bowler";
import { BowlerScore } from "./BowlerScore";

export type Team = {
  teamId: number;
  teamName: string;
  captainId?: number;
  bowlers: Bowler[];
};
