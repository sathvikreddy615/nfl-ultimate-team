import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class PieChart extends Component {
    chartData = {}

    componentDidUpdate = (prevProps) => {
      if (this.props.data !== prevProps.data) {
        this.chartData = {
          labels: ["Wins", "Losses", "Ties"],
          datasets: [
            {
              label: "Results",
              data: this.props.data,
              backgroundColor: [
                "hsl(227, 100%, 35%)",
                "hsl(0, 100%, 70%)",
                "hsl(48, 100%, 65%)"
              ]
            }
          ]
        }
      }
    }

  render() {
    return (
      <div className="chart">
        <Pie data={this.chartData} width={120} height={50} options={{
          legend: {
            labels: {
              fontColor: "white"
            }
          }
        }} />
      </div>
    );
  }
}

// exports to Standings.js
