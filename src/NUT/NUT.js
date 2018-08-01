import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerCards from "./PlayerCards";
import 'bulma/css/bulma.css';

export default class NUT extends Component {
    state = {
        players: this.props.userSelectedPlayers
    };

    // getPlayers = () => {
    //     APIManager.getData("players")
    //     .then(players => {
    //         this.setState({
    //             players: players
    //         })
    //         // console.log(players);
    //         players.forEach(player => {
    //             // console.log(player);
    //         });
    //     })
    // };

    // getPlayers = () => {
    //     // console.log;
    // }

    componentDidMount = () => {
        // return this.getPlayers();
        console.log(this.state.players);
    };

    positionsArray = ["QB", "RB", "WR", "TE", "DL", "LB", "DB", "K"];

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

        <div id="computerCardsContainer" className="columns">
          {this.state.players.map(player => (
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
