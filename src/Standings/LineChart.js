import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: "Game History",
            data: [
                3,
                2,
                1,
                2,
                2,
                3,
                1,
                3,
                3,
                1
              ],
              backgroundColor: "hsl(0, 100%, 70%)",
              borderColor: "hsl(227, 100%, 20%)",
              fill: false,
              pointBackgroundColor: "hsl(0, 100%, 70%)",
              // pointBorderWidth: 2,
              pointRadius: 5,
              gridlines: "white"
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Line data={this.state.chartData} height={60} options={{datasetFill: false}} />
      </div>
    );
  }
}

// exports to Standings.js
