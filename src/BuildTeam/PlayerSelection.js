import React, { Component } from "react";

export default class PlayerSelection extends Component {
  state = {
    selectedPlayer: {}
  }

  handleSelectionChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
    console.log(stateToChange);


  }

  render() {
    return (
      <React.Fragment>
        <img
          className="playerPicture"
          src="#"
          alt="#"
        />

        {/* ----- */}

        <select
          name={this.props.position}
          id={this.props.position}
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
