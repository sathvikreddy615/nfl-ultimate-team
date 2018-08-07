import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button } from "bloomer";
import "bulma/css/bulma.css";

export default class ResultsModal extends Component {
//   reloadPage = () => {
//     window.location.reload(true);
//   };

  render() {
      return (
        <React.Fragment>
            {/* <Modal id="resultsModal">
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>{this.props.userSum} - {this.props.computerSum}</ModalCardTitle>
                    </ModalCardHeader>
                    <ModalCardBody>
                        "Score Data Goes Here"
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Link to="/buildteam">
                            <button
                            onClick={this.reloadPage}
                            className="button is-success is-rounded is-fullwidth"
                            >
                            Play Again
                            </button>
                        </Link>
                        <Link to="/standings">
                            <button
                                onClick={this.reloadPage}
                                className="button is-danger is-rounded is-fullwidth"
                            >
                                View Standings
                            </button>
                        </Link>
                    </ModalCardFooter>
                </ModalCard>
            </Modal> */}
        </React.Fragment>
      )
  }
}

// exports to NUT.js
