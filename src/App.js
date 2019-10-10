import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.css";
import NavBar from "./componets/NavBar.js"
import MarioPage from "./pages/mario";
import StandardPage from "./pages/standard";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={StandardPage} />
              <Route exact path="/mariotheme" component={MarioPage} />
              <Route component={StandardPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
