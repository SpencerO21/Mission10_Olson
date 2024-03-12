import logo from "./logoBowl.jpg";

function Header() {
  return (
    <header className="row header navbar">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1>Bowling League</h1>
      </div>
    </header>
  );
}

export default Header;
