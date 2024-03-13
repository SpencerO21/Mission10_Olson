import { useEffect, useState } from "react";
import { Bowler } from "./types/Bowler";

// The actual list
function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  //This is the function that fetches the data from the backend api
  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch("http://localhost:5214/Bowling");
      const f = await rsp.json();
      setBowlerData(f);
    };

    fetchBowlerData();
  }, []);

  return (
    <div>
      <div className="row">
        <h4 className="text-center">Bowlers </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData // The filter makes sure it only shows sharks and marlins
            .filter((b) => b.teamName === "Marlins" || b.teamName === "Sharks")
            .map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerFirstName}</td>
                <td>{b.bowlerMiddleInit}</td>
                <td>{b.bowlerLastName}</td>
                <td>{b.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerList;
