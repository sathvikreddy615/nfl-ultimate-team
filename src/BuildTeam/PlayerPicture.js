import React, { Component } from "react";

export default class PlayerPicture extends Component {
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.playerImages).map((image, index) => (
          <div key={index}><img
            className="playerImage"
            key={index}
            src={this.props.playerImages[image][0]}
            alt=""
          /></div>
        ))}
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
