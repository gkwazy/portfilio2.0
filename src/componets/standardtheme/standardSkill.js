import React, { Component } from "react";

class StandardSkill extends Component {
    render() {
        return (
            <div className="container-fuild">

                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card text-center h-100">
                            <h2><i class="fa fa-keyboard fa-5x "></i></h2>
                            <h5 className="card-title  font-weight-bold text-uppercase">Full Stack Development</h5>
                            <div className="card-body">
                                <p className="card-text">Take your Web pages to a whole new level with professional frontend that is supported with a powerful and elegant backend. Bring new technology and advancement to your web pages. Build web pages is more than just a career, I enjoy staying on top of the best practices to be able to give the best product out there</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card text-center h-100">
                            <h2><i class="fa fa-mobile-alt fa-5x "></i></h2>
                            <h5 className="card-title  font-weight-bold text-uppercase">Portability</h5>
                            <div className="card-body">
                                <p className="card-text">Have your site look great no matter where you are looking at, whether you it up on your phone or on your computer have your pages give a great user experience that your customers will keep coming back for </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 cardCol">
                        <div className="card text-center h-100" >
                            <h2><i class="fa fa-window-restore fa-5x "></i></h2>
                            <h5 className="card-title  font-weight-bold text-uppercase">Technologies</h5>
                            <div className="card-body">
                                <h4>React</h4>
                                <h4>AngularJs</h4>
                                <h4>Javascript</h4>
                                <h4>MySQL</h4>
                                <h4>MongoDB</h4>
                                <h4>JQuery</h4>
                                <h4>C#</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4  col-lg-3 cardCol">
                        <div className="card text-center h-100">
                            <h2><i class="fa fa-mobile-alt fa-5x "></i></h2>
                            <h5 className="card-title  font-weight-bold text-uppercase">Card title</h5>
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

export default StandardSkill;