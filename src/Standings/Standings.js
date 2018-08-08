import React, { Component } from "react";
import APIManager from "../APIManager";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Table } from "bloomer";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import "bulma/css/bulma.css";
import "./Standings.css";

export default class Standings extends Component {
  state = {
    winTotal: 0,
    loseTotal: 0,
    tieTotal: 0,
    name: "",
    resultNumb: [],
    numbOfGames: [],
    userPoints: 0,
    computerPoints: 0
  };

  getData = () => {
    let newArray = [];
    newArray.push(this.state.winTotal);
    newArray.push(this.state.loseTotal);
    newArray.push(this.state.tieTotal);
    return newArray;
  };

  getPoints = () => {
    let newArray = [];
    newArray.push(this.state.userPoints);
    newArray.push(this.state.computerPoints);
    return newArray;
  };

  sum = (a, b) => {
    return a + b;
  };

  getGamesByUser = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials"));
    let localUser = JSON.parse(localStorage.getItem("credentials"));

    let resultNumbArr = this.state.resultNumb;
    let numbOfGamesArr = this.state.numbOfGames;
    let userPointsArr = [];
    let computerPointsArr = [];

    if (sessionUser !== null) {
      APIManager.getGamesByUserId(sessionUser.userId).then(gamesArr => {
        gamesArr.forEach(game => {
          resultNumbArr.push(game.resultNumb);

          numbOfGamesArr.push(game.id);

          userPointsArr.push(game.userPoints);
          let sumOfUserPointsArr = userPointsArr.reduce(this.sum);

          computerPointsArr.push(game.computerPoints);
          let sumOfComputerPointsArr = computerPointsArr.reduce(this.sum);

          this.setState({
            resultNumb: resultNumbArr,
            numbOfGames: numbOfGamesArr,
            userPoints: sumOfUserPointsArr,
            computerPoints: sumOfComputerPointsArr
          });
        });
      });
    } else if (localUser !== null) {
      APIManager.getGamesByUserId(sessionUser.userId).then(gamesArr => {
        gamesArr.forEach(game => {
          resultNumbArr.push(game.resultNumb);
          numbOfGamesArr.push(game.id);
          this.setState({
            resultNumb: resultNumbArr,
            numbOfGames: numbOfGamesArr
          });
        });
      });
    }
  };

  getStandingsByUser = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials"));
    let localUser = JSON.parse(localStorage.getItem("credentials"));

    if (sessionUser !== null) {
      APIManager.getStandingsByUserId(sessionUser.userId).then(results => {
        this.setState({ winTotal: results[0].winCount });
        this.setState({ loseTotal: results[0].loseCount });
        this.setState({ tieTotal: results[0].tieCount });
      });
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    } else if (localUser !== null) {
      APIManager.getStandingsByUserId(localUser.userId).then(results => {
        this.setState({ winTotal: results[0].winCount });
        this.setState({ loseTotal: results[0].loseCount });
        this.setState({ tieTotal: results[0].tieCount });
      });
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    }
  };

  componentDidMount = () => {
    this.getGamesByUser();
    this.getStandingsByUser();
  };

  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Navbar} />

        {/* Parent Container */}

        <div id="standingsContainer">
          {/* Sub-Container 1 */}

          <div
            id="pieChartContainer"
            className="columns is-mobile is-variable is-1"
          >
            <div className="column is-half">
              <Table id="standingsTable" isBordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Ties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.winTotal}</td>
                    <td>{this.state.loseTotal}</td>
                    <td>{this.state.tieTotal}</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="pieChart column is-half">
              <PieChart data={this.getData()} />
            </div>
          </div>

          {/* Sub-Container 2 */}

          <div id="lineChartContainer">
            <div className="lineChart">
              <LineChart
                resultNumb={this.state.resultNumb}
                numbOfGames={this.state.numbOfGames}
                name={this.state.name}
              />
            </div>
          </div>

          {/* Sub-Container 3 */}

          <div id="barChartContainer" className="columns">
            <div className="barChart column is-half">
              <BarChart points={this.getPoints()} />
            </div>

            <div className="column is-half">
              <Table id="standingsTable" isBordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Ties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.winTotal}</td>
                    <td>{this.state.loseTotal}</td>
                    <td>{this.state.tieTotal}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
