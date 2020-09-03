import React, { Component } from "react";
import "./technicalskills.css";
class TechnicalSkills extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h3>Technical Skills</h3>
            <table className="table table-borderless contentts">
              <tbody>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Programming Languages and Libraries:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>
                      Java, ReactJs, JavaScript, CSS, C, C++, Python ,OpenCV,
                      Swift, PHP.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Database Systems:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>MySQL, Oracle SQL, Firebase, MongoDB.</p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Cloud Computing Services:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>AWS, Digital Ocean, Heroku.</p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Web Development Framework:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>
                      Spring Boot, Hibernate, Bootstrap CSS, Express.js, Nodejs.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Software Methodologies:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>Agile Scrum model.</p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Testing and Version Control:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>Junit, GitHub.</p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Operating System:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>OSX, Windows, Linux.</p>
                  </td>
                </tr>
                <tr>
                  <td className="techskills">
                    <p>
                      {" "}
                      <b>Software Applications/Tools:</b>
                    </p>{" "}
                  </td>
                  <td className="skills">
                    <p>
                      Eclipse, Xcode, NetBeans, Android Studio, GitHub, PyCharm,
                      VS Code..
                    </p>
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

export default TechnicalSkills;
