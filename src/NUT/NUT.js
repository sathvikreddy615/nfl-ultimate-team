import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";
import 'bulma/css/bulma.css';

export default class NUT extends Component {
    state = {
        players: this.props.players,
        computerPlayers: []
    };

    positionsArray = ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"];

    generateComputerPlayers = () => {
        this.positionsArray.forEach(name => {
            APIManager.getPlayersByPosition(name)
            .then(playerArray => {
                let random = playerArray[Math.floor(Math.random() * playerArray.length)];
                let newArray = this.state.computerPlayers;
                newArray.push(random);
                console.log(newArray);
                this.setState({chosenTeam: newArray})
            })
        })
    }

    getAllPlayers = () => {
        APIManager.getData("players")
        .then(allPlayers => {
            // let newObject = this.state.computerPlayers;

            // let random = allPlayers[Math.floor(Math.random() * allPlayers.length)];
            // console.log(random);

            allPlayers.forEach(player => {
                switch (player.position) {
                    case "QB":
                        // return this.getPlayersByPosition("QB");
                        // let newArray = [];
                        // newArray.push(player);
                        // console.log(newArray)

                        // let random = newArray[Math.floor(Math.random() * newArray.length)];
                        // console.log(random);

                        // newObject.qb.push(random);
                        // break;

                        // let qbArray = [];
                        // qbArray.push(player)
                        // console.log(qbArray);
                        // let random = qbArray[Math.floor(Math.random() * qbArray.length)];
                        // newObject.qb.push(random)
                        break;
                    // case "RB":
                    //     // console.log(random);
                    //     newObject.rb.push(random)
                    //     break;
                    // case "WR":
                    //     // console.log(random);
                    //     newObject.wr.push(random)
                    //     break;
                    // case "TE":
                    //     // console.log(random);
                    //     newObject.te.push(random)
                    //     break;
                    // case "DL":
                    //     // console.log(random);
                    //     newObject.dl.push(random)
                    //     break;
                    // case "LB":
                    //     // console.log(random);
                    //     newObject.lb.push(random)
                    //     break;
                    // case "DB":
                    //     // console.log(random);
                    //     newObject.db.push(random)
                    //     break;
                    // case "DB":
                    //     // console.log(random);
                    //     newObject.db.push(random)
                    //     break;
                    default:
                        console.log("nothing returned")
                }
            })
            // console.log(newObject);
        })
    }

    componentDidMount = () => {
        return this.generateComputerPlayers();
    }

  render() {
    return (
      <React.Fragment>

        {/* Containers for the User */}

        <div id="userContainer">
            <div id="userName">Sathvik Reddy</div>
            <div id="userPoints">79</div>
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
        {this.state.computerPlayers.map((player, index) => (
            <div key={index} className="column points">{player.points}</div>
        ))}
        </div>

        <div id="computerCardsContainer" className="columns">
          {this.state.computerPlayers.map(player => (
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

      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
