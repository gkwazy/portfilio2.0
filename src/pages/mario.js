import React, { Component } from "react";
import { browserRouter as Router, Route, Switch } from "react-router-dom";
import MarioJumbo from "../componets/mariotheme/marioJumbotron.js";
import Mario from "../componets/mariotheme/mario.js"
import MarioSkill from "../componets/mariotheme/marioSkill.js";
import MarioJumbo2 from "../componets/mariotheme/marioJumbotron2.js"
import MarioPassProjects from "../componets/mariotheme/MarioPassProjects.js";

class MarioPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <MarioJumbo />
                <Mario />
                <MarioJumbo2 />
                <MarioSkill />
                <MarioPassProjects />
            </div>
        );
    }
}

export default MarioPage;