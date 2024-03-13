//This is the Bowler type that allows us to map the imported data
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
  teamName: string;
};
