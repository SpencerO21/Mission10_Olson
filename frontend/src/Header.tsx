import logo from "./logoBowl.jpg";

//The header of the app
function Header() {
  return (
    <header className="row header navbar">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1>Bowling League</h1>
        <h2>A List Of Bowlers and Their Teams</h2>
      </div>
    </header>
  );
}

export default Header;
