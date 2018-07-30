import React, { Component } from "react";

export default class PlayerPicture extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="playerPicture">QB</div>
                <div className="playerPicture">RB</div>
                <div className="playerPicture">WR</div>
                <div className="playerPicture">TE</div>
                <div className="playerPicture">DL</div>
                <div className="playerPicture">LB</div>
                <div className="playerPicture">DB</div>
                <div className="playerPicture">K</div>

            </React.Fragment>
        )
    }
}

// exports to BuildTeam.js

