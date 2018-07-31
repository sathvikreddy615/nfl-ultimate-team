import React, { Component } from "react";

export default class PlayerSelection extends Component {
  state = {
    selectedPlayer: {}
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
        {
          this.props.position.map(player => (
          <option id={player.id} value={player.Name}>{player.Name}</option>
        ))
        }
        </select>
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
