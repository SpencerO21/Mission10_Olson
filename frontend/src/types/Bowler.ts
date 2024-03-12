import { BowlerScore } from "./BowlerScore";
import { Team } from "./Team";

export type Bowler = {
  bowlerId: number;
  bowlerLastName?: string;
  bowlerFirstName?: string;
  bowlerMiddleInit?: string;
  bowlerAddress?: string;
  bowlerCity?: string;
  bowlerState?: string;
  bowlerZip?: string;
  bowlerPhoneNumber?: string;
  teamId?: number;
  bowlerScores?: BowlerScore[];
  team?: Team | null;
};
