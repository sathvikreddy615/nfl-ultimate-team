import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./Standings.css";

export default class Standings extends Component {
  state = {
    count: {
      win: [],
      loss: [],
      tie: []
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>View Standings!</div>

        <div id="standingsContainer">
          <div id="rowOne" className="columns">
            <div id="nameColumn" className="column">Name</div>
            <div id="winColumn" className="column">W</div>
            <div id="lossColumn" className="column">L</div>
            <div id="tieColumn" className="column">T</div>
          </div>
          <div id="rowTwo" className="columns">
            <div id="name" className="column">Sathvik Reddy</div>
            <div id="win" className="column">0</div>
            <div id="loss" className="column">0</div>
            <div id="tie" className="column">0</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
