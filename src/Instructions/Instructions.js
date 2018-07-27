import React, { Component } from "react";

export default class Instructions extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>What is <b>NFL Ultimate Team</b>?</h1>

                <br/>

                <h6><b>NFL Ultimate Team</b> is fantasy football-esque application that gives you the freedom of building your own team by drafting from a variety of NFL players, and competing your squad against an opponent's.</h6>

                <br/>

                <h6>Each NFL athlete has their own point value, which is based off of 2017's season ending fantasy statistics. There are 8 positions that you will need to draft a player for in order to fulfill your team's roster. This includes a:</h6>

                <br/>

                <ul>
                    <li className="listOfPositions">Quarterback</li>
                    <li className="listOfPositions">Running Back</li>
                    <li className="listOfPositions">Wide Receiver</li>
                    <li className="listOfPositions">Tight End</li>
                    <li className="listOfPositions">Defensive Lineman</li>
                    <li className="listOfPositions">Linebacker</li>
                    <li className="listOfPositions">Defensive Back</li>
                    <li className="listOfPositions">Kicker</li>
                </ul>

                <br/>

                <h6>In the building phase for each round, you will be given the option of selecting from <b>3</b> random players for each position. This means that having a solid knowledege of last year's NFL stats will greatly benefit you! But it will also involve a fair amount of luck, since the players will be randomly generated.</h6>

                <br/>

                <h6>Now that you understand what <b>NFL Ultimate Team</b> is all about, let's jump into how you can get started!</h6>

                <br/>

                <ol id="instructionsContainer">
                    <li className="instructions">Click <i>Build a Team</i> in the navigation bar</li>
                    <li className="instructions">Click on the dropdown for each position and select a player</li>
                    <li className="instructions">Once you've selected all 8 of your players, scroll to the bottom and click <i>Create Team</i></li>
                    <li className="instructions">Click <i>Run Simulation</i></li>
                    <li className="instructions"></li>
                    <li className="instructions"></li>
                </ol>
            </React.Fragment>
        )
    }
}

// exports to ApplicationViews
