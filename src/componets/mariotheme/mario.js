import React, { Component } from "react";

class Mario extends Component {
    render() {
        return (
            <div>
                <div className="mariosky position-relative">
                    <img className="bigcloud" src="./pics/bigCloudSprite.png" ></img>
                    <img className="smallcloud" src="./pics/smallCloudSprite.png" ></img>
                </div>
                <div className="mariovalley position-relative">
                </div>
                <div className="marioroad position-relative">
                    <div className="mariolines position-relative">
                        <img className="toadkart" src="./pics/toadsprite.png" ></img>
                        <img className="mariokart" src="./pics/mariosprite.png" ></img>
                        <img className="browserkart" src="./pics/browsersprite.png" ></img>
                        <img className="luigikart" src="./pics/Luigisprite.png" ></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mario;