import React, { Component } from "react";
import "./main.css";
import Jumbo from "./componets/jumbotron.js";
import Mario from "./componets/mario.js"

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Jumbo />
        <Mario />
      </div>
    );
  }
}

export default App;
