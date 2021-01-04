import React, { Component } from "react";
import "./workexp.css";
class WorkExp extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h3>Work Experience</h3>
            <table className="table table-borderless contentw">
              <tbody>
                <tr>
                  <td className="workexps">
                    <p>
                      {" "}
                      <b>IT intern</b>
                    </p>{" "}
                    #HastagGrow, London, Ontario
                  </td>
                  <td className="tenure">
                    <p>Jan 2021 - Present</p>
                  </td>
                </tr>
                <tr>
                  <td className="workexps">
                    <p>
                      {" "}
                      <b>Junior Software Developer (Remote)</b>
                    </p>{" "}
                    Swing IT Services, Ahmedabad, Gujarat, India
                  </td>
                  <td className="tenure">
                    <p>June 2020 - Nov 2020</p>
                    <p>
                      <b>(6 month contract)</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="workexps">
                    <p>
                      {" "}
                      <b>Web Developer Intern</b>
                    </p>{" "}
                    Swing IT Services, Ahmedabad, Gujarat, India
                  </td>
                  <td className="tenure">
                    <p>Jan 2018 - March 2018</p>
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

export default WorkExp;
