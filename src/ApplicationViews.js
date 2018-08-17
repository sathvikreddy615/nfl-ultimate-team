import React, { Component } from "react";
import { Route } from "react-router-dom";

import APIManager from "./APIManager";
import Register from "./Register/Register";
import Login from "./Login/Login";
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
    gameResultMsg: "",
    gameResultSentence: ""
  };

  getUserId = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials"));
    let localUser = JSON.parse(localStorage.getItem("credentials"));

    if (sessionUser !== null) {
      console.log(sessionUser.userId)
      return sessionUser.userId;
    } else if (localUser !== null) {
      console.log(localUser.userId);
      return localUser.userId;
    }
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
        newArray.sort((a, b) => a.id - b.id);
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

    APIManager.getStandingsByUserId(this.getUserId()).then(results => {
      let wins = results[0].winCount;
      let losses = results[0].loseCount;
      let ties = results[0].tieCount;
      let winOb = {};
      let loseOb = {};
      let tieOb = {};

      let resultMsg = "";
      let resultSentence = "";

      if (sumOfUserArray > sumOfComputerArray) {
        wins += 1;
        winOb = { winCount: wins };

        let winResultOb = {
          resultNumb: 3,
          resultName: "Win",
          userPoints: sumOfUserArray,
          computerPoints: sumOfComputerArray,
          userId: this.getUserId()
        }

        let delta = sumOfUserArray - sumOfComputerArray;
        APIManager.updateStandings(this.getUserId(), winOb);
        APIManager.addData("games", winResultOb);
        resultMsg = "YOU WON"
        resultSentence = `Congrats, you defeated the computer by ${delta} points!`;

      } else if (sumOfUserArray < sumOfComputerArray) {
        losses += 1;
        loseOb = { loseCount: losses };

        let loseResultOb = {
          resultNumb: 1,
          resultName: "Loss",
          userPoints: sumOfUserArray,
          computerPoints: sumOfComputerArray,
          userId: this.getUserId()
        };

        let delta = sumOfUserArray - sumOfComputerArray;
        delta *= -1;
        APIManager.updateStandings(this.getUserId(), loseOb);
        APIManager.addData("games", loseResultOb);
        resultMsg = "YOU LOST"
        resultSentence = `Sorry, the computer defeated you by ${delta} points!`;

      } else if (sumOfUserArray === sumOfComputerArray) {
        ties += 1;
        tieOb = { tieCount: ties };

        let tieResultOb = {
          resultNumb: 2,
          resultName: "Tie",
          userPoints: sumOfUserArray,
          computerPoints: sumOfComputerArray,
          userId: this.getUserId()
        };

        APIManager.updateStandings(this.getUserId(), tieOb);
        APIManager.addData("games", tieResultOb);
        resultMsg = "YOU TIED"
        resultSentence = "Not bad, you tied with the computer!";
      }
      this.setState({ gameResultMsg: resultMsg })
      this.setState({ gameResultSentence: resultSentence })
    })
  };

  isAuthenticated = () =>
    localStorage.getItem("credentials") !== null ||
    sessionStorage.getItem("credentials") !== null;

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
          {/* <Route path="/" component={Navbar} /> */}
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
                gameResultMsg={this.state.gameResultMsg}
                gameResultSentence={this.state.gameResultSentence}
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
