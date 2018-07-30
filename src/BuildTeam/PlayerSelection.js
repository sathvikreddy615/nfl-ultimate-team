import React, { Component } from "react";
import APIManager from "../APIManager";

export default class PlayerSelection extends Component {
  selectPositions = [
    "selectQB",
    "selectRB",
    "selectWR",
    "selectTE",
    "selectDL",
    "selectLB",
    "selectDB",
    "selectK"
  ];

  optionElement = (selection, name) => {
    let optionEl = document.createElement("option");
    optionEl.textContent = name;
    optionEl.value = name;
    document.getElementById(selection).appendChild(optionEl);
  };

  createOptionEl = () => {
    APIManager.getData("players").then(players => {
      players.forEach(player => {
        switch (player.Position) {
          case "QB":
            this.optionElement("selectQB", player.Name);
            break;
          case "RB":
            this.optionElement("selectRB", player.Name);
            break;
          case "WR":
            this.optionElement("selectWR", player.Name);
            break;
          case "TE":
            this.optionElement("selectTE", player.Name);
            break;
          case "DL":
            this.optionElement("selectDL", player.Name);
            break;
          case "LB":
            this.optionElement("selectLB", player.Name);
            break;
          case "DB":
            this.optionElement("selectDB", player.Name);
            break;
          case "K":
            this.optionElement("selectK", player.Name);
            break;
          default:
            console.log("No position returned");
        }
      });
    });
  };

  componentDidMount = () => {
      return this.createOptionEl();
  }

  render() {
    return (
      <React.Fragment>
        {this.selectPositions.map(position => (
          <select key={position} name={position} id={position} required className="selectPositions" />
        ))}
      </React.Fragment>
    );
  }
}

// exports to BuildTeam.js
