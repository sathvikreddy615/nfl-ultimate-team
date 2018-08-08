import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, ModalCardBody, ModalCardFooter, Button } from "bloomer";
import "./ResultsModal.css";
import "bulma/css/bulma.css";

export default class NUT extends Component {
  state = {
    userTeam: this.props.userPlayers,
    computerTeam: this.props.computerPlayers,
    name: ""
  };

  getPlayerName = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets sessionStorage
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets localStorage

    if (sessionUser !== null) {
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    } else if (localUser !== null) {
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    }
  };

  componentDidMount = () => {
      return this.getPlayerName();
  }

  onOpenModal = () => {
    let modal = document.getElementById("resultsModal");
    modal.classList.add("is-active");
  };

  runSimulation = () => {
    this.props.simulation();
    this.onOpenModal();
  };

  reloadPage = () => {
    window.location.reload(true);
  };

  render() {
    return (
      <React.Fragment>
        <div id="simulateBtnContainer">
          <button
            onClick={this.runSimulation}
            id="simulateBtn"
            className="bd-tw-button button is-danger is-focused is-rounded is-fullwidth is-outlined"
            type="button"
          >
            Run Simulation
          </button>
        </div>

        {/* Containers for the User */}

        <div id="userContainer">
          <div id="userName">
            <i>{this.state.name}</i>: {this.props.userSum} pts.
          </div>
        </div>
        <div id="userCardsContainer" className="columns">
          {this.state.userTeam.map(player => (
            <PlayerCards key={player.id} player={player} />
          ))}
        </div>

        <div id="userPlayerPointsContainer" className="columns">
          {this.state.userTeam.map((player, index) => (
            <div key={index} className="column points">
              {player.points}
            </div>
          ))}
        </div>

        {/* Lists all Position Names */}

        <div id="positionsContainer" className="columns">
          {this.props.positionsArray.map((position, index) => (
            <div key={index} className="column position">
              {position}
            </div>
          ))}
        </div>

        {/* Containers for the Computer */}

        <div id="computerPlayerPointsContainer" className="columns">
          {this.state.computerTeam.map((player, index) => (
            <div key={index} className="column points">
              {player.points}
            </div>
          ))}
        </div>

        <div id="computerCardsContainer" className="columns">
          {this.state.computerTeam.map(player => (
            <PlayerCards key={player.id} player={player} />
          ))}
        </div>
        <div id="computerContainer">
          <div id="computerName">
            <i>Computer</i>: {this.props.computerSum} pts.
          </div>
        </div>

        {/* ------------------ */}

        <Modal id="resultsModal">
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader id="modalCardHeader">
                        <ModalCardTitle id="modalCardTitle">{this.props.gameResultMsg}</ModalCardTitle>
                    </ModalCardHeader>
                    <ModalCardBody id="modalCardBody">
                      <h1 id="score">{this.props.userSum} - {this.props.computerSum}</h1>
                      <br/>
                      <h2><i>{this.props.gameResultSentence}</i></h2>
                    </ModalCardBody>
                    <ModalCardFooter id="modalCardFooter">
                      <div id="modalBtnContainer" className="columns">
                        <div className="column"><Link to="/buildteam">
                            <button
                            id="playAgainBtn"
                            onClick={this.reloadPage}
                            className="button is-success is-rounded is-fullwidth"
                            >
                            Play Again
                            </button>
                        </Link></div>
                        <div className="column"><Link to="/standings">
                            <button
                                onClick={this.reloadPage}
                                className="button is-danger is-rounded is-fullwidth"
                            >
                                View Standings
                            </button>
                        </Link></div>
                      </div>
                    </ModalCardFooter>
                </ModalCard>
            </Modal>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
