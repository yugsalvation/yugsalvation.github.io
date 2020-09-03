import React, { Component } from "react";
import "./education.css";
class Education extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h3>Education</h3>
            <table className="table table-borderless contente">
              <tbody>
                <tr>
                  <td className="education">
                    <p>
                      {" "}
                      <b>Master of Applied Computing</b>
                    </p>{" "}
                    University of Windsor, Windsor, ON, Canada
                  </td>
                  <td className="tenure">
                    <p>Jan 2020 - Present</p>
                  </td>
                </tr>
                <tr>
                  <td className="education">
                    <p>
                      {" "}
                      <b>Bachelor of Engineering in Information Technology</b>
                    </p>{" "}
                    Gujarat Technological University, Ahmedabad, India
                  </td>
                  <td className="tenure">
                    <p>Jan 2015 - May 2019</p>
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

export default Education;
