import React, { Component } from "react";

class Skill extends Component {
    render() {
        return (
            <div className="container-fuild">
                <div className="row">
                    <div className="jumbotron jumbotron text-center">
                        <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card">
                            <img src="./pics/starpower.png" className="card-img-top" alt="..." height="200" width="200" />
                            <h5 className="card-title text-center">Card title</h5>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card">
                            <img src="./pics/egg.png" className="card-img-top" alt="..." height="200" width="200" />
                            <h5 className="card-title text-center">Card title</h5>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card" >
                            <img src="./pics/flower.png" className="card-img-top" alt="..." height="200" width="200" />
                            <h5 className="card-title text-center">Card title</h5>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4  col-lg-3 cardCol">
                        <div className="card">
                            <img src="./pics/mushroom.png" className="card-img-top" alt="..." height="200" width="200" />
                            <h5 className="card-title text-center">Card title</h5>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Skill;