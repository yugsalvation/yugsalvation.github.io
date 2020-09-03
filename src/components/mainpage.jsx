import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mainpage.css";
import BasicInfo from "./basicinfo";
import AboutMe from "./aboutme";
import Education from "./education";
import WorkExp from "./workexp";
import TechnicalSkills from "./technicalskills";
import "./aboutme.css";
import Cocurricular from "./cocurricular";
class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 basicinfo">
            <BasicInfo />
          </div>
          <div className="col-sm-1 "></div>
        </div>
        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 aboutmee">
            <AboutMe />
          </div>
          <div className="col-sm-1 "></div>
        </div>
        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 aboutmee">
            <TechnicalSkills />
          </div>
          <div className="col-sm-1 "></div>
        </div>

        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 educatione">
            <Education />
          </div>
          <div className="col-sm-1 "></div>
        </div>
        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 educatione">
            <WorkExp />
          </div>
          <div className="col-sm-1 "></div>
        </div>
        <div className="row">
          <div className="col-sm-1 "></div>
          <div className="col-sm-10 educatione">
            <Cocurricular />
          </div>
          <div className="col-sm-1 "></div>
        </div>
      </div>
    );
  }
}

export default MainPage;
