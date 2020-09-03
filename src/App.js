import React from "react";
import logo from "./logo.svg";
//import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainpage";
import Academic from "./components/academic";

function App() {
  return (
    <div>
      <Route component={MainPage} exact path="/" />
      <Route
        component={Academic}
        exact
        path={process.env.PUBLIC_URL + "/academic"}
      />
    </div>
  );
}

export default App;
