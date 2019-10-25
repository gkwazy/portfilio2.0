import React, { Component } from "react";

class MarioSkill extends Component {
  render() {
    return (
      <div className="container-fuild">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
            <div className="card h-100">
              <img
                src="./pics/starpower.png"
                className="card-img-top img-fluid"
                alt="..."
                height="200"
                width="200"
              />
              <h5 className="card-title text-center font-weight-bold text-uppercase">
                Full Stack Developments
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Take your web page to a whole new level with a professional front-end that is supported with a powerful and elegant back-end. Building web pages is more than just a career for me, it’s a passion. I enjoy staying on top of the best practices to be able to give the best product out there.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
            <div className="card h-100">
              <img
                src="./pics/egg.png"
                className="card-img-top img-fluid"
                alt="..."
                height="200"
                width="200"
              />
              <h5 className="card-title text-center font-weight-bold text-uppercase">
                Portability
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Have your site look great no matter how you are viewing it. Whether it’s up on your phone or on your computer have your pages give a great user experience that your customers will keep coming back for.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 cardCol text-center">
            <div className="card h-100">
              <img
                src="./pics/flower.png"
                className="card-img-top img-fluid"
                alt="..."
                height="200"
                width="200"
              />
              <h5 className="card-title  font-weight-bold text-uppercase">
                Technologies
              </h5>
              <div className="card-body">
                <h4>React</h4>
                <h4>AngularJs</h4>
                <h4>Javascript</h4>
                <h4>MySQL</h4>
                <h4>MongoDB</h4>
                <h4>JQuery</h4>
                <h4>C#</h4>
                <h4>FileMaker</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4  col-lg-3 cardCol">
            <div className="card h-100 text-center">
              <img
                src="./pics/mushroom.png"
                className="card-img-top img-fluid"
                alt="..."
                height="200"
                width="200"
              />
              <h5 className="card-title  font-weight-bold text-uppercase">
                Links
              </h5>
              <div className="card-body">
                <p className="card-text">
                  <a href="https://www.linkedin.com/in/garret-wasden/">
                    <img
                      src="https://img.icons8.com/officel/120/000000/linkedin.png"
                      alt="Linkdin"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/garret-wasden/">
                    <img
                      src="https://img.icons8.com/material-outlined/120/000000/github.png"
                      alt="GitHub"
                    />
                  </a>
                  <h5>Email: gkwazy@gmail.com</h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarioSkill;
