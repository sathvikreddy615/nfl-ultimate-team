import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class BarChart extends Component {
  chartData = {};

  componentDidUpdate = prevProps => {
    if (this.props.points !== prevProps.points) {
      this.chartData = {
        labels: ["You", "Computer"],
        datasets: [
          {
            label: "Points",
            data: this.props.points,
            backgroundColor: ["hsl(204, 86%, 53%)", "hsl(0, 100%, 70%)"]
          }
        ]
      };
    }
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.chartData}
          height={50}
          options={{
            title: {
              display: true,
              text: "Total Fantasy Points Accrued",
              fontSize: 15
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ],
              xAxes: {
                barThickness: 10
              }
            }
          }}
        />
      </div>
    );
  }
}

// exports to Standings.js
