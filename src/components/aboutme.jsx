import React, { Component } from "react";
import "./aboutme.css";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {" "}
            <h3>About me</h3>
            <table className="table table-borderless contenta">
              <tbody>
                <tr>
                  <td className="aboutme">
                    <p>
                      I am a Master of Applied Computing student at the
                      University of Windsor and Currently, I am working as an IT
                      intern in #HastagGrow. While pursuing the masters at the
                      University of Windsor, I have gained knowledge in Software
                      Engineering, Data structures and Algorithms, Database
                      concepts and System Programming.
                      <br />I have started to love to code since my high school
                      days and since those days, I have been coding almost every
                      day on popular websites like hackerrrank, leetcode and
                      geeks4geeks. I have achieved a gold badge in
                      problem-solving on hackerrank which I got it by solving
                      around 200 problems. I have also participated in
                      hackathons and coding competitions which has improved my
                      problem-solving capacity and analytical thinking under
                      work pressure. Till now, I have build several academic and
                      personal projects which includes mobile apps, web apps and
                      OpenCV projects.
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

export default AboutMe;
