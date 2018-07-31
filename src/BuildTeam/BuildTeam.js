import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerSelection from "../BuildTeam/PlayerSelection";
// import "./BuildTeam.css";
import 'bulma/css/bulma.css';

export default class BuildTeam extends Component {
  state = {
    players: [],
    selectPositions: {
      qb: {selectedPlayer: {}, playerList: []},
      rb: {selectedPlayer: {}, playerList: []},
      wr: {selectedPlayer: {}, playerList: []},
      te: {selectedPlayer: {}, playerList: []},
      dl: {selectedPlayer: {}, playerList: []},
      lb: {selectedPlayer: {}, playerList: []},
      db: {selectedPlayer: {}, playerList: []},
      k: {selectedPlayer: {}, playerList: []}
    }
  };

  componentDidMount = () => {
    APIManager.getData("players").then(players => {
      let newObject = {
        qb: {selectedPlayer: {}, playerList: []},
        rb: {selectedPlayer: {}, playerList: []},
        wr: {selectedPlayer: {}, playerList: []},
        te: {selectedPlayer: {}, playerList: []},
        dl: {selectedPlayer: {}, playerList: []},
        lb: {selectedPlayer: {}, playerList: []},
        db: {selectedPlayer: {}, playerList: []},
        k: {selectedPlayer: {}, playerList: []}
      }
      players.forEach(player => {
        switch (player.Position) {
          case "QB":
            newObject.qb.playerList.push(player)
            break;
          case "RB":
            // this.setState(
            //   function (prevState) {
            //     console.log(prevState)
            //     console.log(prevState.selectPositions.rb)
            //     let newRb = prevState.selectPositions.rb.slice();
            //     newRb.push(player)
            //     return {selectPositions: {rb: newRb}}
            //   }
            // )
            break;
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
      Object.keys(newObject).map(i =>
        {
          newObject.selectedPlayer = newObject.playerList[0]
        })
      this.setState(
        {selectPositions: newObject}
      )
    });
  };

  handleSelectionChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
    console.log(stateToChange);
  }

  createTeam = () => {
    console.log("this btn works")
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.state.selectPositions).map((position, index) => (
          <PlayerSelection
          key={index}
          position={this.state.selectPositions[position].playerList}
          selectedPlayer={this.state.selectPositions[position].selectedPlayer}
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
