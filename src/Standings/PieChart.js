import React, { Component } from "react";
import { Pie, Doughnut } from "react-chartjs-2";

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
                "hsl(204, 86%, 53%)",
                "hsl(0, 100%, 70%)",
                "hsl(227, 100%, 20%)"
              ]
            }
          ]
        }
      }
    }

  render() {
    return (
      <div className="chart">
        <Pie data={this.chartData} width={110} height={30} options={{}} />
      </div>
    );
  }
}

// exports to Standings.js
