import React, { Component } from "react";

class Jumbo extends Component {
  render() {
    return (
      <div className="container-fluid" id="shellPic">
        <div>
          <div className="row justify-content-md-center" id="shellPic-overlay">
            <div className="col-md-6  col-lg-6 align-self-start font-weight-bold text-center nameTitle">
              <h1 className="display-1">Garret Wasden</h1>
              <h2 className="display-4 ">Web Developer</h2>
            </div>
            <div className="col-md-6  col-lg-6"></div>
            <div className="row ">
              <div
                className="col-sm-5 offset-sm-1 off col-md-5 offset-md-1 col-lg-5 offset-lg-1 align-self-start font-weight-bold"
                id="goalTitle"
              >
                <h5 className="display-4">
                  My goal is to make dreams come to life and you show the world
                  yours.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbo;
