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
                      <b>Movie Shoppies</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/shoppies"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://yugsalvation.github.io/shoppies/"
                        target="_blank"
                      >
                        {" "}
                        Live demo
                      </a>
                    </p>
                    <p>
                      <b>Technologies or Libraries:</b> ReactJs.
                    </p>
                    <p>
                      <ul>
                        <li>
                          A ReactJS application to search movies and nominated
                          as per the choice. <br />
                          Features:
                          <ul>
                            <li>Used OMDB api for data.</li>
                            <li>
                              {" "}
                              The search of a movie and getting results is
                              completely dynamic, no button is needed to get
                              show the results.
                            </li>
                            <li>
                              A click on the nominate button of a movie item
                              adds it in the nominated movie list and disable
                              that item from further addition.
                            </li>
                            <li>
                              Removing an item from the nominated movie list
                              automatically enables the item in the search list
                              from again getting nominated.
                            </li>
                          </ul>
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
                      <b>SpringDataRest</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/SpringDataRest"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technologies:</b> Spring Boot, JPA, Spring Rest
                      Repository.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Developed a CRUD REST API for implementing operations
                          on COURSES table in MySql Database
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
                      <b>MyOwnBashTerminal</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/MyOwnBashTerminal"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technologies:</b> C
                    </p>
                    <p>
                      <ul>
                        <li>Bash Terminal coded in C</li>
                        <li>Each command is treated as new process</li>
                        <li>
                          Process id of the child ( command execution) is
                          printed after it exits
                        </li>
                        <li>Used Unix I/O functions only</li>
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
                      <b>Calculator React App</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/calculatorReactApp"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://yugsalvation.github.io/calculatorReactApp/"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    </p>
                    <p>
                      <b>Technologies or Libraries:</b> ReactJs
                    </p>
                    <p>
                      <ul>
                        <li>Created Calculator using ReactJs</li>
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
                      <b>Analog Chronometer</b>
                    </p>{" "}
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/Analog-Chronometer/tree/master"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technology</b> Javascript
                    </p>
                    <p>
                      <ul>
                        <li>
                          An Analog clock built using Javascript and HTML.
                        </li>
                        <li>
                          "Tick" sound is played every second in coordination
                          with the second's arm of the clock
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
