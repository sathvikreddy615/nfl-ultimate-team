import React, { Component } from "react";

export default class PlayerSelection extends Component {
  state = {
    selectedPlayer: {},
  }

  render() {
    return (
      <React.Fragment>
        {/* <img
          className="playerPicture"
          src="#"
          alt="#"
        /> */}

        {/* ----- */}

        <select
          id={this.props.unique}
          required
          className="selectPositions"
          onChange={this.props.handleSelectionChange}
        >
          <option>Draft a Player</option>
        {
          this.props.position.map((player, index) => (
          <option key={index} id={player.id} value={player.name}>{player.name}</option>
        ))
        }
        </select>
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
