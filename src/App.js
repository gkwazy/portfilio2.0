import React, { Component } from "react";
import "./main.css";
import NavBar from "./componets/NavBar.js"
import Jumbo from "./componets/jumbotron.js";
import Mario from "./componets/mario.js"
import Skill from "./componets/Skill.js";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Jumbo />
        <Mario />
        <Skill />
      </div>
    );
  }
}

export default App;
