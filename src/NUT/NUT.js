import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";
import ResultsModal from "./ResultsModal";
import 'bulma/css/bulma.css';

export default class NUT extends Component {
    state = {
        players: this.props.players,
        computerTeam: [],
        playerSum: [],
        computerSum: []
    };

    positionsArray = ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"];

    generateComputerPlayers = () => {
        this.positionsArray.forEach(position => {
            APIManager.getPlayersByPosition(position)
            .then(playerArray => {
                let random = playerArray[Math.floor(Math.random() * playerArray.length)];
                let newArray = this.state.computerTeam;
                newArray.push(random);
                console.log(newArray);
                this.setState({computerTeam: newArray})
            })
        })
    }

    componentDidMount = () => {
        return this.generateComputerPlayers();
    }

    sum = (a, b) => {
        return a + b;
    }

    simulation = () => {
        // calculates total user points
        let userArray = this.state.playerSum;
        this.props.players.forEach(playerObjects => {
            userArray.push(playerObjects.points);
        })
        let sumOfUserArray = userArray.reduce(this.sum);
        console.log(sumOfUserArray);
        this.setState({playerSum: userArray});

        // calculates total computer points
        let computerArray = this.state.computerSum;
        this.state.computerTeam.forEach(playerObjects => {
            computerArray.push(playerObjects.points);
        })
        let sumOfComputerArray = computerArray.reduce(this.sum);
        console.log(sumOfComputerArray);
        this.setState({computerSum: sumOfComputerArray})
        // console.log(this.state.computerSum);
    }

  render() {
    return (
      <React.Fragment>

        {/* Containers for the User */}

        <div id="userContainer">
            <div id="userName">Sathvik Reddy</div>
            <div id="simulateBtnContainer">
                    <button
                        onClick={this.simulation}
                        id="simulateBtn"
                        className="bd-tw-button button is-danger is-small is-focused is-rounded"
                        type="button">
                        Run Simulation
                    </button>
            </div>
        </div>
        <div id="userCardsContainer" className="columns">
        {this.state.players.map(player => (
            <PlayerCards
                key={player.id}
                player={player}
            ></PlayerCards>
        ))}
        </div>

        <div id="userPlayerPointsContainer" className="columns">
        {this.state.players.map((player, index) => (
            <div key={index} className="column points">{player.points}</div>
        ))}
        </div>

        {/* Lists all Position Names */}

        <div id="positionsContainer" className="columns">
          {this.positionsArray.map((position, index) => (
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
            <div id="computerName">Computer</div>
            <div id="computerPoints">78</div>
        </div>

        {/* ------------------ */}

        <ResultsModal  />

      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
