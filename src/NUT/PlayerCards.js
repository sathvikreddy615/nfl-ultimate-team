import React from "react";
import "./PlayerCards.css";

export default props => {
    return (
        <div className="playerCard column">
            <img src={props.player.image} alt={props.player.Name} />
            <div className="nameContainer">
                <h6><b>{props.player.Name}</b></h6>
            </div>
        </div>
    )
}

// exports to NUT.js
