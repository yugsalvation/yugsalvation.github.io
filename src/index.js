import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MainPage from "./components/mainpage";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
console.log("hello" + process.env.PUBLIC_URL);
// var x = (
//   <React.StrictMode>
//     <MainPage />
//   </React.StrictMode>
// );
// var one = () => {
//   return x;
// };
// ReactDOM.render(one(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
