import React from "react";
import "./App.css";
import HomePage from "./homePage/homePage";
import SideManu from "./sideManu";

function App() {
  return (
    <div className="wrapper">
      <SideManu />
      <HomePage />
    </div>
  );
}

export default App;
