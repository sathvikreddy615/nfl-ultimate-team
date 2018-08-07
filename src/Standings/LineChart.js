import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["Wins", "Losses", "Ties"],
        datasets: [
          {
            label: "Results",
            data: ["Win", "Loss", "Tie"],
            data: [
                "Game 1",
                "Game 2",
                "Game 3"
              ],
            // data: [
            //   this.props.wins,
            //   this.props.losses,
            //   this.props.ties
            // ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 235, 0.6)"
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Line data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

// exports to Standings.js
