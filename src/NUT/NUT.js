import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";
import Modal from "react-responsive-modal";
// import ResultsModal from "./ResultsModal";
import "./ResultsModal.css";
import 'bulma/css/bulma.css';

export default class NUT extends Component {
    state = {
        userTeam: this.props.userPlayers,
        computerTeam: this.props.computerPlayers,
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    runSimulation = () => {
        this.props.simulation();
        this.onOpenModal();
    }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>

          <div id="simulateBtnContainer">
                    <button
                        onClick={this.runSimulation}
                        id="simulateBtn"
                        className="bd-tw-button button is-danger is-focused is-rounded is-fullwidth is-outlined"
                        type="button">
                        Run Simulation
                    </button>
            </div>

        {/* Containers for the User */}

        <div id="userContainer">
            <div id="userName"><i>Sathvik Reddy</i>: {this.props.userSum} pts.</div>
        </div>
        <div id="userCardsContainer" className="columns">
        {this.state.userTeam.map(player => (
            <PlayerCards
                key={player.id}
                player={player}
            ></PlayerCards>
        ))}
        </div>

        <div id="userPlayerPointsContainer" className="columns">
        {this.state.userTeam.map((player, index) => (
            <div key={index} className="column points">{player.points}</div>
        ))}
        </div>

        {/* Lists all Position Names */}

        <div id="positionsContainer" className="columns">
          {this.props.positionsArray.map((position, index) => (
            <div
                key={index}
                className="column position">
                {position}
            </div>
          ))}
        </div>

        {/* Containers for the Computer */}

         <div id="computerPlayerPointsContainer" className="columns">
        {this.state.computerTeam.map((player, index) => (
            <div key={index} className="column points">{player.points}</div>
        ))}
        </div>

        <div id="computerCardsContainer" className="columns">
          {this.state.computerTeam.map(player => (
              <PlayerCards
              key={player.id}
              player={player}
          ></PlayerCards>
          ))}
        </div>
        <div id="computerContainer">
            <div id="computerName"><i>Computer</i>: {this.props.computerSum} pts.</div>
        </div>

        {/* ------------------ */}

        {/* <ResultsModal
        userSum={this.state.userSum}
        computerSum={this.state.computerSum} /> */}

        <div id="gary">
            <Modal open={open} onClose={this.onCloseModal} center>
                <h1>{this.props.gameResult}</h1>
                <br/>
                <h2>{this.props.userSum} - {this.props.computerSum}</h2>
                {/* <h2>{this.state.computerSum}</h2> */}
                <div id="modalBtnContainer">
                   <Link to="/buildteam">
                    <button className="button is-success is-rounded is-fullwidth">Play Again</button>
                   </Link>
                   <Link to="/standings">
                        <button className="button is-danger is-rounded is-fullwidth">View Standings</button>
                    </Link>
                </div>
            </Modal>
      </div>

      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
