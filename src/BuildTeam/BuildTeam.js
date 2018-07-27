import React, { Component } from "react";
import TeamSelection from "../BuildTeam/TeamSelection";
import PlayerSelection from "../BuildTeam/PlayerSelection";

export default class BuildTeam extends Component {
    state = {
        players: []
    };

    render() {
        return (
            <React.Fragment>
                <h1>Build Your Team!</h1>
                {/* {this.state.players.map(player => (
                    <PlayerSelection
                        key={player.id}
                        player={player}
                    />
                ))
                } */}

                <PlayerSelection />
            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
