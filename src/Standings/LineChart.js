import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: this.props.numbOfGames,
        datasets: [
          {
            label: "3 = Win | 2 = Tie | 1 = Loss",
            data: this.props.resultNumb,
            backgroundColor: "hsl(0, 100%, 70%)",
            borderColor: "hsl(227, 100%, 35%)",
            // fill: false,
            pointBackgroundColor: "hsl(48, 100%, 65%)",
            // pointBorderWidth: 2,
            pointRadius: 6
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          height={65}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 25
              }
            },
            title: {
              display: true,
              text: "Timeline of Game Results",
              fontSize: 25,
              fontColor: "white",
              padding: 10
            },
            legend: {
             labels: {
               fontColor: "white"
             }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "white",
                    beginAtZero: true,
                    userCallback: function(label, index, labels) {
                      // when the floored value is the same as the value we have a whole number
                      if (Math.floor(label) === label) {
                        return label;
                      }
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Results",
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
                  scaleLabel: {
                    display: true,
                    labelString: "Games",
                    fontColor: "white"
                  },
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: false
                    // color: "white"
                  }
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
