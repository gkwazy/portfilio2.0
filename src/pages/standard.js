import React, { Component } from "react";
import { browserRouter as Router, Route, Switch } from "react-router-dom";
import StandardJumbo from "../componets/standardtheme/standardJumbotron.js";

class StandardPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <StandardJumbo />
            </div>
        );
    }
}

export default StandardPage;