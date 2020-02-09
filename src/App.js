import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Specials from "./Specials";
import Shoes from "./Shoes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Specials />
      <Shoes />
    </div>
  );
}

export default App;
