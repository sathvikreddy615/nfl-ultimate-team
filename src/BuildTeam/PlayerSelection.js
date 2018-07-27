import React from "react";

export default props => {
        return (
            <select name="quarterback" id="selectQuarterback">
                <option value="qb">Draft a Quarterback!</option>
                <option value="Jared Goff">Jared Goff</option>
                <option value="Marcus Mariota">Marcus Mariota</option>
                <option value="Tom Brady">Tom Brady</option>
            </select>
        );
}

// exports to BuildTeam.js
