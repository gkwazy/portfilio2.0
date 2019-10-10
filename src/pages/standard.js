import React, { Component } from "react";
import { browserRouter as Router, Route, Switch } from "react-router-dom";
import StandardJumbo from "../componets/standardtheme/standardJumbotron.js";
import MarioJumbo2 from "../componets/mariotheme/marioJumbotron2.js"

class StandardPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <StandardJumbo />
                <MarioJumbo2 />
            </div>
        );
    }
}

export default StandardPage;