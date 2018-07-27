import React, { Component } from "react";

export default class NUT extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="userContainer"></div>
                <div id="userPointsContainer"></div>
                <div id="userCardsContainer"></div>

                <div id="positionsContainer">Quarterback</div>

                <div id="computerCardsContainer"></div>
                <div id="computerPointsContainer"></div>
                <div id="computerContainer"></div>
            </React.Fragment>
        );
    }
}

// exports to ApplicationViews.js
