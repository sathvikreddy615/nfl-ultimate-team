import React, { Component } from "react";
import 'bulma/css/bulma.css';

export default class Standings extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Results</p>
                            <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            {/* Content */}
                            <h1>You won!</h1>
                            <h4>Your record is now 5-0-2</h4>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-info is-rounded is-fullwidth">Play Again</button>
                            <button className="button is-danger is-rounded is-fullwidth">View Standings</button>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews
