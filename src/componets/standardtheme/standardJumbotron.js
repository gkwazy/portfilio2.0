import React, { Component } from "react";

class Jumbo extends Component {
    render() {
        return (

            <div className="row">
                <div className="col-md-5 col-lg-5">
                    <h1 className="display-4">Garret Wasden</h1>
                    <h2 className="display-5">Web Developer</h2>
                    <p>
                        Welcome! My name is Garret Wasden, I am a web developer and my goal is to build fun professional web pages.
                        </p>
                    <p>
                        Now buckle your seatbelts and get ready to scroll!
                        </p>
                </div>
                <div className="col-md-5 col-lg-5">
                    <img src="./pics/ComputerScreen.gif" />

                </div>
            </div>
        );
    }
}

export default Jumbo;