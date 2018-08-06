import React, { Component } from "react";
import APIManager from "../APIManager";
import "bulma/css/bulma.css";
import "./Standings.css";

export default class Standings extends Component {
  state = {
    winTotal: 0,
    loseTotal: 0,
    tieTotal: 0
  }

  getStandings = () => {
    APIManager.getData("standings").then(results => {
      console.log(results);
      this.setState({ winTotal: results[0].winCount });
      this.setState({ loseTotal: results[0].loseCount });
      this.setState({ tieTotal: results[0].tieCount });
    })
  }

  componentDidMount = () => {
    return this.getStandings();
  }

  render() {
    return (
      <React.Fragment>
        <div>View Standings!</div>

        <div id="standingsContainer">
          <div id="rowOne" className="columns">
            <div id="nameColumn" className="column">
              Name
            </div>
            <div id="winColumn" className="column">
              W
            </div>
            <div id="lossColumn" className="column">
              L
            </div>
            <div id="tieColumn" className="column">
              T
            </div>
          </div>
          <div id="rowTwo" className="columns">
            <div id="name" className="column">
              Sathvik Reddy
            </div>
            <div id="win" className="column">
              {this.state.winTotal}
            </div>
            <div id="loss" className="column">
              {this.state.loseTotal}
            </div>
            <div id="tie" className="column">
              {this.state.tieTotal}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
