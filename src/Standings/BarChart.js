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
            backgroundColor: ["hsl(227, 100%, 35%)", "hsl(0, 100%, 70%)"]
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
          height={70}
          options={{
            layout: {
              padding: {
                left: 75,
                right: 75
              }
            },
            title: {
              display: true,
              text: "Total Fantasy Points Accrued",
              fontSize: 25,
              fontColor: "white",
              padding: 10
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    fontColor: "white"
                  },
                  gridLines: {
                    // display: false
                    color: "white"
                  },
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white"
                  },
                  scaleLabel: {
                    display: true,
                    fontColor: "white"
                  },
                  gridLines: {
                    display: false
                    // color: "white"
                  },
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

// exports to Standings.js
