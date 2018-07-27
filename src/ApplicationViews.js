import React, { Component } from "react";
import { Route } from "react-router-dom";

import Register from "./Register/Register";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import NUT from "./NUT/NUT";
import BuildTeam from "./BuildTeam/BuildTeam";
import Standings from "./Standings/Standings";
import Instructions from "./Instructions/Instructions";

export default class ApplicationViews extends Component {

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null;

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={NUT} />
          <Route exact path="/buildteam" component={BuildTeam} />
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/instructions" component={Instructions} />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </React.Fragment>
      )
    }
  }

}

// exports to App.js
