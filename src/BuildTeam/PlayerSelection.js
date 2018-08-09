import React, { Component } from "react";

export default class PlayerSelection extends Component {
  render() {
    return (
      <React.Fragment>
        <div><select
          id={this.props.unique}
          required
          className="selectPositions"
          onChange={this.props.handleSelectionChange}
        >
          <option>-----</option>
          {this.props.position.map((player, index) => (
            <option key={index} id={player.id} value={player.name}>
              {player.name}
            </option>
          ))}
        </select></div>
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
