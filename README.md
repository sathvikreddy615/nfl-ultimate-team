## NFL Ultimate Team
NFL is a fantasy football application built with React.js, JSON server, Bloomer and React-ChartJS-2, that gives the user the freedom of building their own team from scratch, by drafting from a variety of NFL players, and competing their team against an AI's.

Each NFL player has their own point value, which is based off of 2017's season ending fantasy statistics. In the building phase for each round, the user is given the option of selecting from 3 random players for each position. There are 8 positions that they will need to draft a player for in order to fulfill their team's roster:

- Quarterback
- Running Back
- Wide Receiver
- Tight End
- Defensive Lineman
- Linebacker
- Defensive Back
- Kicker

This means that having a solid knowledege of last year's NFL stats will greatly benefit them! However, it will also involve a fair amount of luck, since the players you are dealt will be randomly generated.

## Getting Started

1. `$ git clone git@github.com:sathvikreddy615/nfl-ultimate-team.git`
2. Run `$ npm install` in your terminal from the project directory
3. In a seprate terminal window, run `$ json-server -p 5002 Database.json` in the src folder
4. Enjoy!

## Prerequisites

What things you need to install:

Import Bloomer in your project:
`$ npm install bloomer`

Import Bulma in your project:
`$ npm install bulma`

Import React-Chartjs-2:
`$ npm install react-chartjs-2 chart.js --save`

## Technologies used:
- [React](https://reactjs.org/docs/getting-started.html)
- [JSON Server](https://github.com/typicode/json-server)
- [Bloomer](https://bloomer.js.org/#/)
- [React-Chartjs-2](https://github.com/jerairrest/react-chartjs-2)
