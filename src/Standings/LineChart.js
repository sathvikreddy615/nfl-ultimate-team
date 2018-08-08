import React, { Component } from "react";
import { Line } from "react-chartjs-2";

// export default class LineChart extends Component {
//   chartData = {}

//   componentDidMount = () => {
//     console.log(this.props.resultNumb);
//     console.log(this.props.numbOfGames);
//   }

//   componentDidUpdate = (prevProps) => {
//     if ((this.props.resultNumb !== prevProps.resultNumb) && (this.props.numbOfGames !== prevProps.numbOfGames)) {
//       this.chartData = {
//         labels: this.props.numbOfGames,
//         datasets: [
//           {
//             label: "Game History",
//             data: this.props.resultNumb,
//             backgroundColor: "hsl(204, 86%, 53%)",
//             borderColor: "hsl(0, 100%, 70%)",
//             // fill: false,
//             pointBackgroundColor: "hsl(227, 100%, 20%)",
//             // pointBorderWidth: 2,
//             pointRadius: 5,
//             // gridlines: "white"
//           }
//         ]
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="chart">
//         <Line data={this.chartData} height={60} options={{}} />
//       </div>
//     );
//   }
// }

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
            backgroundColor: "hsl(204, 86%, 53%)",
            borderColor: "hsl(0, 100%, 70%)",
            // fill: false,
            pointBackgroundColor: "hsl(227, 100%, 35%)",
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
          height={60}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 15
              }
            },
            title: {
              display: true,
              text: "Timeline of Game Results",
              fontSize: 25
            },
            scales: {
              yAxes: [
                {
                  ticks: {
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
                    labelString: "Results"
                  }
                }
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Games"
                  },
                  ticks: {
                    display: false
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
