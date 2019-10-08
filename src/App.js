import React, { Component } from "react";
import "./main.css";
import Jumbo from "./componets/jumbotron.js";
import Mario from "./componets/mario.js"

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Jumbo />
        <div className="container">
          <Mario />
        </div>
      </div>
    );
  }
}

export default App;
