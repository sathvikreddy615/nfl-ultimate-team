import React, { Component } from "react";
import APIManager from "../APIManager";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFooter,
  Hero,
  Table
} from "bloomer";
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

  openResetModal = () => {
    let resetModal = document.getElementById("resetModal");
    resetModal.classList.add("is-active");
  };

  closeResetModal = () => {
    let resetModal = document.getElementById("resetModal");
    resetModal.classList.remove("is-active");
  };

  resetProgress = () => {
    alert("Your stats have successfully been reset!");

    let sessionUser = JSON.parse(sessionStorage.getItem("credentials"));
    let localUser = JSON.parse(localStorage.getItem("credentials"));

    let resetStandingsData = {
      winCount: 0,
      loseCount: 0,
      tieCount: 0,
      userId: sessionUser.userId,
      id: sessionUser.userId
    };

    if (sessionUser !== null) {
      APIManager.getGamesByUserId(sessionUser.userId).then(games => {
        games.forEach(game => {
          APIManager.deleteGamesByUserId(game.id);
        })
      });
      APIManager.updateStandings(sessionUser.userId, resetStandingsData);
      window.location.reload(true);
    } else if (localUser !== null) {
      APIManager.getGamesByUserId(sessionUser.userId).then(games => {
        games.forEach(game => {
          APIManager.deleteGamesByUserId(game.id);
        })
      })
      APIManager.updateStandings(sessionUser.userId, resetStandingsData);
      window.location.reload(true);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Navbar} />
        <Hero isColor="info">

        {/* Parent Container */}

        <div id="standingsContainer">

          {/* Sub-Container 2 */}

          <div id="lineChartContainer">
            <div id="lineChart">
              <LineChart
                resultNumb={this.state.resultNumb}
                numbOfGames={this.state.numbOfGames}
                name={this.state.name}
              />
            </div>
          </div>

          {/* Sub-Container 1 */}

          <div
            id="pieChartContainer"
            className="columns is-mobile is-variable is-1"
          >
            <div className="column is-half">
              <Table id="standingsTable">
                <thead>
                  <tr>
                    <th id="tableHeaderOne">Name</th>
                    <th id="tableHeaderTwo">Wins</th>
                    <th id="tableHeaderThree">Losses</th>
                    <th id="tableHeaderFour">Ties</th>
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

            <div id="pieChart" className="column is-half">
              <PieChart data={this.getData()} />
            </div>
          </div>

          {/* Sub-Container 3 */}

            <div id="barChart">
              <BarChart points={this.getPoints()} />
            </div>

            <div id="resetProgressContainer">
              <button
                onClick={this.openResetModal}
                className="bd-tw-button button is-warning is-small is-focused is-rounded is-fullwidth"
                type="button"
                id="restBtn"
              >
                Reset Progress
              </button>
            </div>
        </div>
        </Hero>

        <Modal id="resetModal">
          <ModalBackground />
          <ModalCard>
            <ModalCardBody className="has-text-white" id="modalCardBody">
              <h1 className="resetMessage">
                Are you sure you want to reset your progress?
              </h1>
              <br/>
              <h2 className="resetMessage">
              This will erase all of your current data, including any wins, losses, ties and fantasy points accrued.
              </h2>
              <br />
              <h2 id="gameResultSentence">
                {this.props.gameResultSentence}
              </h2>
            </ModalCardBody>
            <ModalCardFooter id="modalCardFooter">
              <div id="modalBtnContainer" className="columns">
                <div className="column">
                    <button
                      id="confirmResetBtn"
                      onClick={this.resetProgress}
                      className="button is-success is-rounded is-fullwidth"
                    >
                      Yes, please
                    </button>

                </div>
                <div className="column">
                    <button
                      id="denyResetBtn"
                      onClick={this.closeResetModal}
                      className="button is-danger is-rounded is-fullwidth"
                    >
                      Nevermind
                    </button>
                </div>
              </div>
            </ModalCardFooter>
          </ModalCard>
        </Modal>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
