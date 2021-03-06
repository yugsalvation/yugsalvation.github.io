import React, { Component } from "react";
import "./basicinfo.css";

class BasicInfo extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div id="borderimg2">
          <img src={require("../images/yug.png")} alt="" id="borderimg" />
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <table className="table table-borderless contentb">
              <tbody>
                <tr>
                  <td>
                    <h2>Yug Rawal</h2>
                    <a
                      href="mailto:bhadresy@uwindsor.ca"
                      target="_blank"
                      className="link"
                    >
                      {" "}
                      <i className="fas fa-paper-plane"></i>{" "}
                      bhadresy@uwindsor.ca{" "}
                      <i className="fas fa-paper-plane"></i>{" "}
                    </a> <br/>
                    <a
                      href="mailto:yugrawal.rawal11@gmail.com"
                      target="_blank"
                      className="link"
                    >
                      {" "}
                      <i className="fas fa-paper-plane"></i>{" "}
                      yugrawal.rawal11@gmail.com{" "}
                      <i className="fas fa-paper-plane"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>746 Oxford St W, London ON N6H 1V2 </td>
                </tr>

                <tr>
                  <td className="iconsize">
                    <a
                      href="https://www.linkedin.com/in/yug-rawal-96abaa138/"
                      target="_blank"
                      className="link"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/yugsalvation"
                      target="_blank"
                      className="link"
                    >
                      <i className="fab fa-github"></i>
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://twitter.com/Yug_Rawal"
                      target="_blank"
                      className="link"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </a>
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

export default BasicInfo;
