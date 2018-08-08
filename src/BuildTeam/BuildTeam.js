import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
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

  shuffleArray = arr => {
    let size = arr.length;
    let shuffled = arr.slice(0),
      i = arr.length,
      temp,
      index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  };

  componentDidMount = () => {
    APIManager.getData("players").then(players => {
      let newObject = this.state.selectPositions;

      this.shuffleArray(players).forEach(player => {
        let position = player.position;
        let positionKey = position.toLowerCase();
        newObject[positionKey];

        // if first condition true, then and only then will player get pushed into array
        newObject[positionKey].length < 3 &&
          newObject[positionKey].push(player);
      });
      this.setState({ selectPositions: newObject });
      console.log(this.state.selectPositions);
    });
  };

  handleSelectionChange = e => {
    let newObject = this.state.selectPlayer;

    switch (e.target.id) {
      case "0":
        newObject.qb.push(e.target.value);
        if (newObject.qb.length > 1) {
          newObject.qb.shift();
        }
        break;
      case "1":
        newObject.rb.push(e.target.value);
        if (newObject.rb.length > 1) {
          newObject.rb.shift();
        }
        break;
      case "2":
        newObject.wr.push(e.target.value);
        if (newObject.wr.length > 1) {
          newObject.wr.shift();
        }
        break;
      case "3":
        newObject.te.push(e.target.value);
        if (newObject.te.length > 1) {
          newObject.te.shift();
        }
        break;
      case "4":
        newObject.dl.push(e.target.value);
        if (newObject.dl.length > 1) {
          newObject.dl.shift();
        }
        break;
      case "5":
        newObject.lb.push(e.target.value);
        if (newObject.lb.length > 1) {
          newObject.lb.shift();
        }
        break;
      case "6":
        newObject.db.push(e.target.value);
        if (newObject.db.length > 1) {
          newObject.db.shift();
        }
        break;
      case "7":
        newObject.k.push(e.target.value);
        if (newObject.k.length > 1) {
          newObject.k.shift();
        }
        break;
      default:
        console.log("No position returned");
    }
    this.setState({ selectPlayer: newObject });
    console.log(this.state.selectPlayer);
  };

  createTeam = e => {
    for (let i in this.state.selectPlayer) {
      if (this.state.selectPlayer[i] === "Draft a Player" || this.state.selectPlayer[i].length == 0) {
        alert(`You have not drafted a player for some positions. Please draft a player for each position before creating a team.`)
        e.preventDefault();
        window.location.reload(true);
      } else {
        APIManager.getPlayersByName(this.state.selectPlayer[i]).then(
          arrayOfOnePlayer => {
            arrayOfOnePlayer.forEach(playerData => {
              let newArray = this.state.chosenTeam;
              newArray.push(playerData);
              newArray.sort((a, b) => a.id - b.id);
              this.setState({ chosenTeam: newArray });
            });
          }
        );
      }
    }
    this.props.userSelectedPlayers(this.state.chosenTeam);
  };

  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Navbar} />
        <div id="buildTeamContainer">
          <form>
            {Object.keys(this.state.selectPositions).map((position, index) => (
              <PlayerSelection
                key={index}
                unique={index}
                position={this.state.selectPositions[position]}
                selectNames={this.selectNames}
                handleSelectionChange={this.handleSelectionChange}
              />
            ))}

            {
              <Link to="/nfl-ultimate-team">
                <button
                  id="createTeamBtn"
                  className="bd-tw-button button is-danger is-focused is-rounded"
                  type="button"
                  onClick={this.createTeam}
                >
                  Create Team
                </button>
              </Link>
            }
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
