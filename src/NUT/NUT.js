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
        computerTeam: [],
        userSum: 0,
        computerSum: 0,
        gameResult: "",
        open: false
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

    onOpenModal = () => {
        this.setState({ open: true });
      };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    simulation = () => {
        // calculates total user points
        let userArray = [];
        this.state.userTeam.forEach(playerObjects => {
            userArray.push(playerObjects.points);
        })
        let sumOfUserArray = userArray.reduce(this.sum);
        console.log(sumOfUserArray);
        this.setState({userSum: sumOfUserArray});

        // calculates total computer points
        let computerArray = [];
        this.state.computerTeam.forEach(playerObjects => {
            computerArray.push(playerObjects.points);
        })
        let sumOfComputerArray = computerArray.reduce(this.sum);
        console.log(sumOfComputerArray);
        this.setState({computerSum: sumOfComputerArray})


        if (sumOfUserArray > sumOfComputerArray) {
            this.setState({gameResult: "You Won!"});
            console.log("You Won!")
        } else if (sumOfUserArray < sumOfComputerArray) {
            this.setState({gameResult: "You Lost!"});
            console.log("You Lost!");
        } else if (sumOfUserArray === sumOfComputerArray) {
            this.setState({gameResult: "You Tied!"});
            console.log("You Tied!");
        } else {
            console.log("This did not work");
        }

        this.onOpenModal();
    }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>

          <div id="simulateBtnContainer">
                    <button
                        onClick={this.simulation}
                        id="simulateBtn"
                        className="bd-tw-button button is-danger is-small is-focused is-rounded"
                        type="button">
                        Run Simulation
                    </button>
            </div>

        {/* Containers for the User */}

        <div id="userContainer">
            <div id="userName">Sathvik Reddy</div>
            <div id="userPoints">{this.state.userSum}</div>
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
            <div id="computerPoints">{this.state.computerSum}</div>
        </div>

        {/* ------------------ */}

        {/* <ResultsModal
        userSum={this.state.userSum}
        computerSum={this.state.computerSum} /> */}

        <div id="gary">
            <Modal open={open} onClose={this.onCloseModal} center>
                <h1>{this.state.gameResult}</h1>
                <br/>
                <h2>{this.state.userSum}</h2>
                <h2>{this.state.computerSum}</h2>
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
