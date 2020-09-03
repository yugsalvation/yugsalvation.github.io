import React, { Component } from "react";
import "./cocurricular.css";
class Cocurricular extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h3>Extra Curricular Activities</h3>
            <table className="table table-borderless contentc">
              <tbody>
                <tr>
                  <td className="cocurricular">
                    <p>
                      {" "}
                      <b>Chairperson</b>
                    </p>{" "}
                    IEEE Student Club, Gujarat Technological University,
                    Ahmedabad India
                  </td>
                  <td className="tenurec">
                    <p>Jan 2018 - Dec 2019</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default Cocurricular;
