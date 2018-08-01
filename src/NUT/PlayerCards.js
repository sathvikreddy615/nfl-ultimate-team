import React from "react";
import "./PlayerCards.css";

export default props => {
    return (
        <div className="playerCard column">
            <img src={props.player.image} alt={props.player.name} />
            <div className="nameContainer">
                <h6><b>{props.player.name}</b></h6>
            </div>
        </div>
    )
}

// exports to NUT.js
