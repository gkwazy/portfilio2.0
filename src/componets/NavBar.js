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
        <h2 className="navbar-brand">Garret's Protfolio</h2>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={`nav-item nav-link ${this.state.home}`}
              href="/"
              onClick={() => this.switchActive("home")}
            >
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className={`nav-item nav-link ${this.state.retro}`}
              href="/retro"
              onClick={() => this.switchActive("retro")}
            >
              Retro
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
