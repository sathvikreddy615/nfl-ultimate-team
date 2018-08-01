import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerSelection from "../BuildTeam/PlayerSelection";
// import "./BuildTeam.css";
import "bulma/css/bulma.css";

export default class BuildTeam extends Component {
  state = {
    chosenTeam: [],
    selectPositions: {
      qb: [],
      rb: [],
      wr: [],
      te: [],
      dl: [],
      lb: [],
      db: [],
      k: []
    },
    selectPlayer: {
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
      let newObject = this.state.selectPositions

      players.forEach(player => {
        switch (player.position) {
          case "QB":
            newObject.qb.push(player);
            break;
          case "RB":
            newObject.rb.push(player);
            break;
          case "WR":
            newObject.wr.push(player);
            break;
          case "TE":
            newObject.te.push(player);
            break;
          case "DL":
            newObject.dl.push(player);
            break;
          case "LB":
            newObject.lb.push(player);
            break;
          case "DB":
            newObject.db.push(player);
            break;
          case "K":
            newObject.k.push(player);
            break;
          default:
            console.log("No position returned");
        }
      });
      this.setState({ selectPositions: newObject });
    });
  };

  handleSelectionChange = e => {
    let newObject = this.state.selectPlayer

    switch (e.target.id) {
      case "0":
        newObject.qb.push(e.target.value);
        break;
      case "1":
        newObject.rb.push(e.target.value);
        break;
      case "2":
        newObject.wr.push(e.target.value);
        break;
      case "3":
        newObject.te.push(e.target.value);
        break;
      case "4":
        newObject.dl.push(e.target.value);
        break;
      case "5":
        newObject.lb.push(e.target.value);
        break;
      case "6":
        newObject.db.push(e.target.value);
        break;
      case "7":
        newObject.k.push(e.target.value);
        break;
      default:
        console.log("No position returned");
    }
    this.setState(
      {selectPlayer: newObject}
    )
  };

  handleSubmit = e => {
    e.preventDefault();

    for (let i in this.state.selectPlayer) {
      APIManager.getPlayersByName(this.state.selectPlayer[i])
      .then(arrayOfOnePlayer => {
        // console.log(arrayOfOnePlayer);
        arrayOfOnePlayer.forEach(playerData => {
          // console.log(playerData.name);
          // console.log(playerData.image);
          let newArray = this.state.chosenTeam;
          newArray.push(playerData);
          console.log(newArray);
          this.setState({chosenTeam: newArray})
        })
      })
    }
    this.props.userSelectedPlayers(this.state.chosenTeam);
    // window.location = 'http://localhost:3000/';
  };

  render() {
    return (
      <React.Fragment>
        <div id="buildTeamContainer">
          <form onSubmit={this.handleSubmit}>
            {Object.keys(this.state.selectPositions).map((position, index) => (
              <PlayerSelection
                key={index}
                unique={index}
                position={this.state.selectPositions[position]}
                selectNames={this.selectNames}
                handleSelectionChange={this.handleSelectionChange}
              />
            ))}

            <input
              id="createTeamBtn"
              className="bd-tw-button button is-danger is-focused is-rounded"
              type="submit"
              value="Create Team"
            />
          </form>

        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
