import React from "react";
import "./PlayerCards.css";

export default props => {
    return (
        <div className="playerCard column">
            <img src={props.player.image} alt={props.player.name} />
            <div className="nameContainer">
                <div className="playerName">{props.player.name}</div>
            </div>
        </div>
    )
}

// exports to NUT.js
