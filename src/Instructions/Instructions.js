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
  ModalCardFooter,
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
              <ModalCardBody>
                <h6>
                  <b>NFL Ultimate Team</b> is a fantasy football application
                  that gives you the freedom of building your own team from
                  scratch, by drafting from a variety of NFL players, and
                  competing your team against an AI's.
                </h6>

                <h6>
                  Each NFL player has their own point value, which is based off
                  of 2017's season ending fantasy statistics. There are 8
                  positions that you will need to draft a player for in order to
                  fulfill your team's roster:
                </h6>

                <h6>
                  In the building phase for each round, you will be given the
                  option of selecting from <b>3</b> random players for each
                  position. This means that having a solid knowledege of last
                  year's NFL stats will greatly benefit you! However, it will
                  also involve a fair amount of luck, since the players you are
                  dealt will be randomly generated.
                </h6>

                <br />

                <h6>
                  The ultimate goal for each game is to have the higher total
                  fantasy points!
                </h6>

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
              <ModalCardBody>
                <ol id="instructionsContainer">
                  <li className="instructions">
                    Begin by clicking <i>Build a Team</i> in the navigation bar.
                  </li>
                  <li className="instructions">
                    Next, you will see 8 dropdown boxes. Select a player for
                    each dropdown.
                  </li>
                  <li className="instructions">
                    Once you've selected all 8 of your players, click{" "}
                    <i>Create Team</i>.
                  </li>
                  <li className="instructions">
                    Now, you will see all 8 of your players including the AI's
                    team. Analyze the players on both teams then click
                    <i>Run Simulation</i>.
                  </li>
                  <li className="instructions">
                    A notification will popup letting you know whether you've{" "}
                    <i>won</i>, <i>lost</i>, or <i>tied</i> the game.
                  </li>
                  <li className="instructions">
                    Click <i>Play Again</i> if you want a rematch or{" "}
                    <i>View Standings</i> if you want to see your current
                    record.
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
