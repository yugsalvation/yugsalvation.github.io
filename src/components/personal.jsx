import React, { Component } from "react";
import "./personal.css";
class Personal extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 backgroundp">
            <h3>Personal Projects</h3>
            <table
              className="table table-borderless table-hover contentp
            "
            >
              <tbody>
                <tr>
                  <td className="personal">
                    <p>
                      {" "}
                      <b>Virtual Xerox</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/VirtualXerox"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technologies:</b> Spring boot, OpenCV Python.
                    </p>
                    <p>
                      <ul>
                        <li>
                          A spring boot and OpenCV python integrated application
                        </li>
                        <li>
                          Created an OpenCV python program to convert the image
                          to the photocopied form(to simulate a photocopy
                          machine, brightness and contrast of the image are
                          equalized)
                        </li>
                        <li>
                          The python file is called to execute from the Java
                          program itself.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenurep">
                    <p>August 2020</p>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="personal">
                    <p>
                      {" "}
                      <b>To-Do Web application</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/ToDoAppNode"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technologies:</b> HTML,Javascript, NodeJS, Express.Js
                      Framework.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Developed a To-Do list app with the screen divided
                          into two parts and Firebase as the data store.
                        </li>
                        <li>
                          On the left side, the user can enter a new To-Do task
                          and on the right side, the user can see his/her To-Do
                          list.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenurep">
                    <p>June 2020</p>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="personal">
                    <p>
                      {" "}
                      <b>Miracle Pills</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/MiraclePillsIOSapp"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technologies:</b> Swift IOS, Firebase.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Designed and developed an app to order “Miracle Pills”
                          with Firebase service.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenurep">
                    <p>April 2020</p>
                  </td>
                </tr>
                <br />
              </tbody>
            </table>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default Personal;
