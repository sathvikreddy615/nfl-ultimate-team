import React, { Component } from "react";
import 'bulma/css/bulma.css';

export default class Standings extends Component {
    // activateModal = () => {
    //     let modal = document.querySelector(".modal");
    //     modal.className.add("is-active");
    // }

    // removeModal = () => {
    //     let modal = document.querySelector(".modal");
    //     modal.classList.remove("is-active");
    // }

    render() {
        return (
            <React.Fragment>
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head has-background-info">
                            <p className="modal-card-title">Results</p>
                            <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            {/* Content */}
                            <h1>You won!</h1>
                            <h4>Your record is now 5-0-2</h4>
                        </section>
                        <footer className="modal-card-foot has-background-info">
                            <button className="button is-success is-rounded is-fullwidth">Play Again</button>
                            <button className="button is-danger is-rounded is-fullwidth">View Standings</button>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews
