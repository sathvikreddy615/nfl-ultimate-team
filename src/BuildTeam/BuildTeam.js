import React, { Component } from "react";
import APIManager from "../APIManager";
import PlayerPicture from "../BuildTeam/PlayerPicture";
import PlayerSelection from "../BuildTeam/PlayerSelection";
import "./BuildTeam.css";

export default class BuildTeam extends Component {
    state = {
        players: []
    };

    getPlayers = () => {
        APIManager.getData("players")
        .then(players => {
            this.setState({
                players: players
            })
            console.log(players);
            players.forEach(player => {
                console.log(`${player.Name}`);
            });
        })
    };

    componentDidMount = () => {
        return this.getPlayers();
    };

    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Build Your Team!</h1>

                <div id="buildTeamContainer">

                    <div id="selectPositionsContainer">
                        <PlayerSelection />
                    </div>

                    <div id="playerPictureContainer">
                        <PlayerPicture />
                    </div>

                </div>

                <button type="button">Create Ultimate Team</button>

            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
