import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mainpage.css";
import BasicInfo from "./basicinfo";
import AboutMe from "./aboutme";
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
          <div className="col-sm-10 basicinfo2">
            <AboutMe />
          </div>
          <div className="col-sm-1 "></div>
        </div>
      </div>
    );
  }
}

export default MainPage;
