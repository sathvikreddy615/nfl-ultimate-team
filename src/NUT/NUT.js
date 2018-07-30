import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";

export default class NUT extends Component {
    state = {
        players: [],
    };

    getPlayers = () => {
        APIManager.getData("players")
        .then(players => {
            this.setState({
                players: players
            })
            console.log(players);
            players.forEach(player => {
                console.log(`${player.Name}`);
            });
        })
    };

    componentDidMount = () => {
        return this.getPlayers();
    };

    positionsArray = ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"];

  render() {
    return (
      <React.Fragment>

        {/* Containers for the User */}

        <div id="userContainer"></div>
        <div id="userPointsContainer" />
        <div id="userCardsContainer" className="columns">
        {this.state.players.map(player => (
            <PlayerCards
                key={player.id}
                player={player}
            ></PlayerCards>
        ))}
        </div>

        {/* Lists all Position Names */}

        <div id="positionsContainer" className="columns">
          {this.positionsArray.map(position => (
            <div
                key={position}
                className="column position">
                {position}
            </div>
          ))}
        </div>

        {/* Containers for the Computer */}

        <div id="computerCardsContainer" />
        <div id="computerPointsContainer" />
        <div id="computerContainer" />

      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
