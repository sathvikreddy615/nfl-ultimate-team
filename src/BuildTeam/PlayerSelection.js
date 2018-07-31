import React, { Component } from "react";

export default class PlayerSelection extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="playerPicture"
          src={this.props.selectedPlayer.image}
          alt="#"
        />

        {/* ----- */}

        <select
          required
          className="selectPositions"
          onChange={this.handleSelectionChange}
        >
        {
          this.props.position.map(player => (
          <option value={player.id}>{player.Name}</option>
        ))
        }
        </select>
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
