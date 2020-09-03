import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./academic.css";
class Academic extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 backgroundc">
            <h3>Academic Projects</h3>
            <table className="table table-borderless table-hover contentac">
              <tbody>
                <tr>
                  <td className="academic">
                    <p>
                      {" "}
                      <b>File Transfer Client Server</b>
                    </p>{" "}
                    <p>
                      {" "}
                      <i>University of Windsor</i>, Windsor, ON, Canada
                    </p>
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/FiletransferClientServer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technology:</b> C
                    </p>
                    <p>
                      <ul>
                        <li>
                          Created a client server application to implement file
                          transfer using socket programming.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenureac">
                    <p>Aug 2020</p>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="academic">
                    <p>
                      {" "}
                      <b>goUWrmand - Cafeteria Management System</b>
                    </p>{" "}
                    <p>
                      {" "}
                      <i>University of Windsor</i>, Windsor, ON, Canada
                    </p>
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/gouwrmand"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Framework:</b> Spring-boot, hibernate
                    </p>
                    <p>
                      <b>Technologies:</b> Java, JSP, CSS and Javascript
                    </p>
                    <p>
                      <ul>
                        <li>
                          Designed and developed an online food ordering system
                          for the university’s cafeteria.
                        </li>
                        <li>Designed the report format in Jasper reports.</li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenureac">
                    <p>April 2020</p>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="academic">
                    <p>
                      {" "}
                      <b>Search Engine</b>
                    </p>{" "}
                    <p>
                      {" "}
                      <i>University of Windsor</i>, Windsor, ON, Canada
                    </p>
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/websearchengine"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Technology:</b> Java
                    </p>
                    <p>
                      <ul>
                        <li>
                          Developed a web search engine to crawl and search the
                          WWW using Java.
                        </li>
                        <li>
                          Implemented tries and index crawled websites and give
                          results and search keyword suggestion to the user.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenureac">
                    <p>April 2020</p>
                  </td>
                </tr>
                <br />
                <tr>
                  <td className="academic">
                    <p>
                      {" "}
                      <b>Customer Relationship Management System</b>
                    </p>{" "}
                    <p>
                      {" "}
                      <i>Gujarat Technological University</i>, Ahmedabad,
                      Gujarat, India
                    </p>
                    <p>
                      {" "}
                      Link:{" "}
                      <a
                        href="https://github.com/yugsalvation/spring-crm"
                        target="_blank"
                      >
                        Github
                      </a>
                    </p>
                    <p>
                      <b>Framework:</b> Spring MVC, hibernate
                    </p>
                    <p>
                      <b>Technologies:</b> Java, JSP, CSS and Javascript
                    </p>
                    <p>
                      <ul>
                        <li>
                          Designed and developed a general-purpose CRM system
                          with MySQL database.
                        </li>
                        <li>
                          Developed and included mail sending module in the
                          software.
                        </li>
                      </ul>
                    </p>
                  </td>
                  <td className="tenureac">
                    <p>April 2019</p>
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

export default Academic;
