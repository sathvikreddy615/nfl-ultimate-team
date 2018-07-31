import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerSelection from "../BuildTeam/PlayerSelection";
// import "./BuildTeam.css";
import 'bulma/css/bulma.css';

export default class BuildTeam extends Component {
  state = {
    players: [],
    selectPositions: {
      qb: [],
      rb: [],
      wr: [],
      te: [],
      dl: [],
      lb: [],
      db: [],
      k: []
    }
  };

  componentDidMount = () => {
    APIManager.getData("players").then(players => {
      players.forEach(player => {
        switch (player.Position) {
          case "QB":
            this.setState(
              function (prevState) {
                console.log(prevState.selectPositions.qb)
                let newQb = prevState.selectPositions.qb.slice()
                newQb.push(player)
                return {selectPositions: {qb: newQb}}
              }
            )
            break;
          // case "RB":
          //   this.createOptions("selectRB", player.Name);
          //   this.addPicture("imageRB", player.image, player.Name);
          //   break;
          // case "WR":
          //   this.createOptions("selectWR", player.Name);
          //   this.addPicture("imageWR", player.image, player.Name);
          //   break;
          // case "TE":
          //   this.createOptions("selectTE", player.Name);
          //   this.addPicture("imageTE", player.image, player.Name);
          //   break;
          // case "DL":
          //   this.createOptions("selectDL", player.Name);
          //   this.addPicture("imageDL", player.image, player.Name);
          //   break;
          // case "LB":
          //   this.createOptions("selectLB", player.Name);
          //   this.addPicture("imageLB", player.image, player.Name);
          //   break;
          // case "DB":
          //   this.createOptions("selectDB", player.Name);
          //   this.addPicture("imageDB", player.image, player.Name);
          //   break;
          // case "K":
          //   this.createOptions("selectK", player.Name);
          //   // this.addPicture("imageK", player.image, player.Name);
          //   break;
          // default:
          //   console.log("No position returned");
        }
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.selectPositions).map((position, index) => (
          <PlayerSelection
          key={index}
          position={this.state.selectPositions[position]}
          />
        ))}

        <div id="buildTeamContainer">
        </div>

        <button
        id="createTeamBtn"
        className="bd-tw-button button is-danger is-focused is-rounded"
        type="button"
        >
        Create Ultimate Team
        </button>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
