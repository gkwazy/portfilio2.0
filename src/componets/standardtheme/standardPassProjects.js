import React, { Component } from "react";

class StandardPassProjects extends Component {
  render() {
    return (
      <div className="container-fluid" id="sandyPic">
        <div className="justify-content-md-center" id="shellPic-overlay">
          <div className=" col-12 text-center experience">
            <h1>My Experience</h1>
          </div>
          <div className="row text-center experience">
            <div className="col-12">
              <h2>RedList -Pleasent Grove UT </h2>
              <h5 className="font-italic">
                -Full Stack Developer/QA Automated Test
              </h5>
            </div>
          </div>
          <div className="row text-center experience">
            <div className="col-12">
              <h2>GroupAg -Rexburg, ID </h2>
              <h5 className="font-italic">— FilerMaker Developer</h5>
            </div>
          </div>
          <div className="row text-center experience">
            <div className="col-12">
              <h2>InterMountain Healthcare -Salt Lake City,UT</h2>
              <h5 className="font-italic">—Client Field Services/IT</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StandardPassProjects;
