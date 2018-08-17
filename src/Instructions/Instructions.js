import React, { Component } from "react";
import { Route } from "react-router-dom";
import APIManager from "../APIManager";
import Navbar from "../Navbar/Navbar";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardBody,
  Delete,
  Hero,
  HeroBody,
  Container,
  Title
} from "bloomer";

import "bulma/css/bulma.css";
import "./Instructions.css";

export default class Instructions extends Component {
  state = {
    name: ""
  };

  // About Modal

  openAboutModal = () => {
    let aboutModal = document.getElementById("aboutModal");
    aboutModal.classList.add("is-active");
  };

  closeAboutModal = () => {
    let aboutModal = document.getElementById("aboutModal");
    aboutModal.classList.remove("is-active");
  };

  // Instructions Modal

  openInstructionsModal = () => {
    let instructionsModal = document.getElementById("instructionsModal");
    instructionsModal.classList.add("is-active");
  };

  closeInstructionsModal = () => {
    let instructionsModal = document.getElementById("instructionsModal");
    instructionsModal.classList.remove("is-active");
  };

  getPlayerName = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets sessionStorage
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets localStorage

    if (sessionUser !== null) {
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    } else if (localUser !== null) {
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name });
      });
    }
  };

  componentDidMount = () => {
    this.getPlayerName();
  };

  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Navbar} />
        <div id="parentContainer">
          <Hero isColor="info" isSize="medium">
            <HeroBody>
              <Container id="titleContainer" hasTextAlign="centered">
                <Title>
                  <div id="titleLineOne">Welcome to</div>
                  <div id="titleLineTwo">NFL Ultimate Team,</div>
                  <div id="titleLineThree">{this.state.name}</div>

                  <div id="btnContainer" className="columns">
                    <div className="column">
                      <button
                        type="button"
                        id="aboutBtn"
                        className="bd-tw-button button is-focused is-rounded is-fullwidth"
                        onClick={this.openAboutModal}
                      >
                        About
                      </button>
                    </div>

                    <div className="column">
                      <button
                        type="button"
                        className="bd-tw-button button is-danger is-focused is-rounded is-fullwidth has-text-white"
                        onClick={this.openInstructionsModal}
                      >
                        Instructions
                      </button>
                    </div>
                  </div>
                </Title>
              </Container>
            </HeroBody>
          </Hero>

          <Modal id="aboutModal">
            <ModalBackground />
            <ModalCard>
              <ModalCardHeader className="has-background-info">
                <ModalCardTitle className="has-text-white">
                  <b>About</b>
                </ModalCardTitle>
                <Delete id="deleteAboutModal" onClick={this.closeAboutModal} />
              </ModalCardHeader>
              <ModalCardBody className="has-background-info has-text-white">
                <h6>
                  <b>NFL Ultimate Team</b> is a fantasy football application
                  that gives you the freedom of building your own team from
                  scratch, by drafting from a variety of NFL players, and
                  competing your team against an AI's.
                </h6>

                <br/>

                <h6>
                  Each NFL player has their own point value, which is based off
                  of 2017's season ending fantasy statistics. In the building phase for each round, you will be given the
                  option of selecting from <b>3</b> random players for each
                  position. There are 8 positions that you will need to draft a player for in order to fulfill your team's roster:
                </h6>

                <br/>

                <div id="positionContainer" className="columns">
                  <div className="column listPosition">Quarterback</div>
                  <div className="column listPosition">Running Back</div>
                  <div className="column listPosition">Wide Receiver</div>
                  <div className="column listPosition">Tight End</div>
                  <div className="column listPosition">Defensive Lineman</div>
                  <div className="column listPosition">Linebacker</div>
                  <div className="column listPosition">Defensive Back</div>
                  <div className="column listPosition">Kicker</div>
                </div>

                <h6>
                  This means that having a solid knowledege of last
                  year's NFL stats will greatly benefit you! However, it will
                  also involve a fair amount of luck, since the players you are
                  dealt will be randomly generated.
                </h6>

                <br />

                <h6>
                  The ultimate goal of this game is to have the higher total
                  fantasy points!
                </h6>

              </ModalCardBody>
            </ModalCard>
          </Modal>

          <Modal id="instructionsModal">
            <ModalBackground />
            <ModalCard>
              <ModalCardHeader className="has-background-info">
                <ModalCardTitle className="has-text-white">
                  <b>Instructions</b>
                </ModalCardTitle>
                <Delete onClick={this.closeInstructionsModal} />
              </ModalCardHeader>
              <ModalCardBody className="has-background-info has-text-white">
                <ol id="instructionsContainer">
                  <li className="instructions">
                    Get started by clicking <a id="buildTeamTag" href="http://localhost:3000/buildteam"><b><u>Build a Team</u></b></a> in the navigation bar.
                  </li>
                  <li className="instructions">
                    Select a player for all 8 positions and click <b><u>Create Team</u></b> towards the bottom of the page.
                  </li>
                  <li className="instructions">
                    Examine the player cards for your team and the computer's, if you wish. When you are ready, click <b><u>Run Simulation</u></b> towards the top of the page.
                  </li>
                  <li className="instructions">
                    View your results and click <b><u>Play Again</u></b> if you want a rematch. Otherwise, click <b><u>View Standings</u></b> if you want to analyze your stats, view your current record or reset your progress.
                  </li>
                  <li className="instructions">Good Luck!</li>
                </ol>
              </ModalCardBody>
            </ModalCard>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
