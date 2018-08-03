import React, { Component } from "react";
import { Route } from "react-router-dom";

import APIManager from "./APIManager";
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
    computerPlayers: [],
    positionsArray: ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"]
  }

  userSelectedPlayers = team => {
    this.setState({userPlayers: team})
  }

  generateComputerPlayers = () => {
    this.state.positionsArray.forEach(position => {
        APIManager.getPlayersByPosition(position)
        .then(playerArray => {
            let random = playerArray[Math.floor(Math.random() * playerArray.length)];
            let newArray = this.state.computerPlayers;
            newArray.push(random);
            console.log(newArray);
            this.setState({computerPlayers: newArray})
        })
    })
}

componentDidMount = () => {
  return this.generateComputerPlayers();
}

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
      sessionStorage.getItem("credentials") !== null;

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          <Route path="/" component={Navbar} />
          <Route exact path="/nfl-ultimate-team" render={props => <NUT
            userPlayers={this.state.userPlayers} computerPlayers={this.state.computerPlayers} generateComputerPlayers={this.generateComputerPlayers}
            positionsArray={this.state.positionsArray}
          />}
          />

          <Route exact path="/buildteam" render={props =>  <BuildTeam userSelectedPlayers={this.userSelectedPlayers} />}
          />

          <Route exact path="/standings" render={props =>  <Standings />}
          />
          {/* <Route exact path="/standings" component={Standings} /> */}
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
