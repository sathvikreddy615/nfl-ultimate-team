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
    positionsArray: ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"],
    userSum: 0,
    computerSum: 0,
    gameResult: "",
  };

  userSelectedPlayers = team => {
    this.setState({ userPlayers: team });
  };

  generateComputerPlayers = () => {
    this.state.positionsArray.forEach(position => {
      APIManager.getPlayersByPosition(position).then(playerArray => {
        let random = playerArray[Math.floor(Math.random() * playerArray.length)];
        let newArray = this.state.computerPlayers;
        newArray.push(random);
        console.log(newArray);
        this.setState({ computerPlayers: newArray });
      });
    });
  };

  componentDidMount = () => {
    return this.generateComputerPlayers();
  };

  sum = (a, b) => {
    return a + b;
  };

  simulation = () => {
    // calculates total user points
    let userArray = [];
    this.state.userPlayers.forEach(playerObjects => {
      userArray.push(playerObjects.points);
    });
    let sumOfUserArray = userArray.reduce(this.sum);
    this.setState({ userSum: sumOfUserArray });

    // calculates total computer points
    let computerArray = [];
    this.state.computerPlayers.forEach(playerObjects => {
      computerArray.push(playerObjects.points);
    });
    let sumOfComputerArray = computerArray.reduce(this.sum);
    this.setState({ computerSum: sumOfComputerArray });

    // checks if user won, lost or tied, and produces a message

    APIManager.getData("standings").then(results => {
      let wins = results[0].winCount;
      let losses = results[0].loseCount;
      let ties = results[0].tieCount;
      let winOb = {};
      let loseOb = {};
      let tieOb = {};

      let resultMsg = "";

      if (sumOfUserArray > sumOfComputerArray) {
        wins += 1;
        winOb = {winCount: wins};
        APIManager.updateStandings(1, winOb);
        resultMsg = "You Won!";

      } else if (sumOfUserArray < sumOfComputerArray) {
        losses += 1;
        loseOb = {loseCount: losses};
        APIManager.updateStandings(1, loseOb);
        resultMsg = "You Lost!";

      } else if (sumOfUserArray === sumOfComputerArray) {
        ties += 1;
        tieOb = {tieCount: ties};
        APIManager.updateStandings(1, tieOb);
        resultMsg = "You Tied!";
      }
      this.setState({ gameResult: resultMsg })
    })
  };

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
    sessionStorage.getItem("credentials") !== null;

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          <Route path="/" component={Navbar} />
          <Route
            exact
            path="/nfl-ultimate-team"
            render={props => (
              <NUT
                userPlayers={this.state.userPlayers}
                computerPlayers={this.state.computerPlayers}
                generateComputerPlayers={this.generateComputerPlayers}
                positionsArray={this.state.positionsArray}
                simulation={this.simulation}
                gameResult={this.state.gameResult}
                userSum={this.state.userSum}
                computerSum={this.state.computerSum}
              />
            )}
          />

          <Route
            exact
            path="/buildteam"
            render={props => (
              <BuildTeam userSelectedPlayers={this.userSelectedPlayers} />
            )}
          />

          {/* <Route
            exact
            path="/standings"
            render={props => (
              <Standings
                userSum={this.state.userSum}
                computerSum={this.state.computerSum}
                sum={this.sum}
              />
            )}
          /> */}
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/" component={Instructions} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </React.Fragment>
      );
    }
  }
}

// exports to App.js
