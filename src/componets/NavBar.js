import React, { Component } from "react";

class NavBar extends Component {
  state = {
    home: "",
    retro: ""
  };

  switchActive(tab) {
    console.log(tab);
    this.setState.home = "";
    this.setState.retro = "";
    if (tab === "home") {
      this.setState.home = "active";
    } else if (tab === "retro") {
      this.setState.retro = "active";
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg" id="testing">

      </nav >
    );
  }
}

export default NavBar;
