import React, { useState } from "react";

import "./App.css";
import Header from "./Header";
import BowlerList from "./BowlerList";

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.onClickFunction}>Go</button>
    </div>
  );
}

function GoLevel(props: any) {
  return <label>Amount: {props.numToShow} </label>;
}

function App() {
  const [levelOfGo, updateLevel] = useState(0);
  const incrementGo = () => updateLevel(levelOfGo + 1);

  return (
    <div className="App">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;
