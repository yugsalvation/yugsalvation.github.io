import React, { Component } from "react";
import "./basicinfo.css";

class BasicInfo extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div id="borderimg2">
          <img src={require("../images/yug.png")} alt="" id="borderimg" />
        </div>
        <div class="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <table className="table table-borderless">
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
                      <i class="fas fa-paper-plane"></i> bhadresy@uwindsor.ca{" "}
                      <i class="fas fa-paper-plane"></i>{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1478 Wyandotte Street West, Windsor, Ontario N9B 1H4 </td>
                </tr>

                <tr>
                  <td className="iconsize">
                    <a
                      href="https://www.linkedin.com/in/yug-rawal-96abaa138/"
                      target="_blank"
                      className="link"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/yugsalvation"
                      target="_blank"
                      className="link"
                    >
                      <i class="fab fa-github"></i>
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://twitter.com/Yug_Rawal"
                      target="_blank"
                      className="link"
                    >
                      <i class="fab fa-twitter-square"></i>
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
