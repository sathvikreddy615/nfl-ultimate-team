import React, { Component } from "react";
import { Route } from "react-router-dom";

import Register from "./Register/Register";
import Login from "./Login/Login";
import NUT from "./NUT/NUT";
import BuildTeam from "./BuildTeam/BuildTeam";
import Standings from "./Standings/Standings";
import Instructions from "./Instructions/Instructions";

export default class ApplicationViews extends Component {

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
          <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <NUT />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/buildteam" render={props => {
          if (this.isAuthenticated()) {
            return <BuildTeam />;
          } else {
            return <Login />;
          }
        }}
        />
        <Route
          exact
          path="/standings"
          render={props => {
            if (this.isAuthenticated()) {
              return <Standings />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          exact
          path="/instructions"
          render={props => {
            if (this.isAuthenticated()) {
              return <Instructions />;
            } else {
              return <Login />;
            }
          }}
        />
      </React.Fragment>
    );
  }
}

// exports to App.js
