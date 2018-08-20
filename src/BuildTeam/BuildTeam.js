import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Hero, Title } from "bloomer";
import APIManager from "../APIManager";
import PlayerSelection from "../BuildTeam/PlayerSelection";
import PlayerPicture from "../BuildTeam/PlayerPicture";
import "./BuildTeam.css";
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
    },
    playerImages: {
      qb: [],
      rb: [],
      wr: [],
      te: [],
      dl: [],
      lb: [],
      db: [],
      k: []
    },
    pickAPosition: [
      "Quarterback",
      "Running Back",
      "Wide Receiver",
      "Tight End",
      "Defensive Lineman",
      "Linebacker",
      "Defensive Back",
      "Kicker"
    ]
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
    // console.log(this.state.selectPlayer);

    let playerImagesOb = this.state.playerImages;

    for (let player in this.state.selectPlayer) {
      APIManager.getPlayersByName(this.state.selectPlayer[player]).then(
        names => {
          names.forEach(name => {
            switch (name.position) {
              case "QB":
                playerImagesOb.qb.push(name.image);
                if (playerImagesOb.qb.length > 1) {
                  playerImagesOb.qb.shift();
                }
                // console.log(playerImagesOb.qb);
                break;
              case "RB":
                playerImagesOb.rb.push(name.image);
                if (playerImagesOb.rb.length > 1) {
                  playerImagesOb.rb.shift();
                }
                // console.log(playerImagesOb.rb);
                break;
              case "WR":
                playerImagesOb.wr.push(name.image);
                if (playerImagesOb.wr.length > 1) {
                  playerImagesOb.wr.shift();
                }
                // console.log(playerImagesOb.wr);
                break;
              case "TE":
                playerImagesOb.te.push(name.image);
                if (playerImagesOb.te.length > 1) {
                  playerImagesOb.te.shift();
                }
                // console.log(playerImagesOb.te);
                break;
              case "DL":
                playerImagesOb.dl.push(name.image);
                if (playerImagesOb.dl.length > 1) {
                  playerImagesOb.dl.shift();
                }
                // console.log(playerImagesOb.dl);
                break;
              case "LB":
                playerImagesOb.lb.push(name.image);
                if (playerImagesOb.lb.length > 1) {
                  playerImagesOb.lb.shift();
                }
                // console.log(playerImagesOb.lb);
                break;
              case "DB":
                playerImagesOb.db.push(name.image);
                if (playerImagesOb.db.length > 1) {
                  playerImagesOb.db.shift();
                }
                // console.log(playerImagesOb.db);
                break;
              case "K":
                playerImagesOb.k.push(name.image);
                if (playerImagesOb.k.length > 1) {
                  playerImagesOb.k.shift();
                }
                // console.log(playerImagesOb.k);
                break;
              default:
                console.log("this shit did not work");
            }
            this.setState({ playerImages: playerImagesOb });
          });
        }
      );
    }
  };

  createTeam = e => {
    for (let i in this.state.selectPlayer) {
      if (
        this.state.selectPlayer[i] === "-----" ||
        this.state.selectPlayer[i].length === 0
      ) {
        alert(
          `You have not drafted a player for some positions. Please draft a player for all 8 positions before creating a team.`
        );
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
        <Hero isColor="info" isSize="large">
          <Title id="buildTeamTitle">Draft a...</Title>
          <div id="buildTeamContainer">
            <div id="playerPicturesContainer">
              <div className="playerPictures">
                <PlayerPicture playerImages={this.state.playerImages} />
              </div>
            </div>

            <div id="btPositionsContainer">
              {this.state.pickAPosition.map((position, index) => (
                <div key={index} className="btPositions">
                  {position}
                </div>
              ))}
            </div>

            <div id="selectPositionsContainer">
              <div className="selectPositions">
                {Object.keys(this.state.selectPositions).map(
                  (position, index) => (
                    <PlayerSelection
                      key={index}
                      unique={index}
                      position={this.state.selectPositions[position]}
                      handleSelectionChange={this.handleSelectionChange}
                      playerImages={this.state.playerImages}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div id="createTeamBtnContainer">
            {
              <Link to="/nfl-ultimate-team">
                <button
                  id="createTeamBtn"
                  className="bd-tw-button button is-danger is-focused is-rounded is-fullwidth"
                  type="button"
                  onClick={this.createTeam}
                >
                  Create Team
                </button>
              </Link>
            }
          </div>
        </Hero>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
