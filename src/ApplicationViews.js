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
  state = {
    userPlayers: [],
    computerPlayers: []
  }

  userSelectedPlayers = team => {
    this.setState({userPlayers: team})
  }

  computerSelectedPlayers = team => {
    this.setState({computerPlayers: team})
  }

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null;

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          <Route path="/" component={Navbar} />
          <Route exact path="/nfl-ultimate-team" render={props => <NUT userPlayers={this.state.userPlayers} />}
          />

          <Route exact path="/buildteam" render={props =>  <BuildTeam userSelectedPlayers={this.userSelectedPlayers} />}
          />
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/" component={Instructions} />
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
