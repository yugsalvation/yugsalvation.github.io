import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainpage";
import Education from "./components/education";

function App() {
  return (
    <div>
      <Route component={MainPage} exact path="/" />
      <Route component={Education} exact path="/ed" />
    </div>
  );
}

export default App;
