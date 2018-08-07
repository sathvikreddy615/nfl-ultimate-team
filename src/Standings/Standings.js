import React, { Component } from "react";
import APIManager from "../APIManager";
import { Table } from "bloomer";
import PieChart from "./PieChart";
// import LineChart from "./LineChart"
import "bulma/css/bulma.css";
import "./Standings.css";

export default class Standings extends Component {
  state = {
      winTotal: 0,
      loseTotal: 0,
      tieTotal: 0,
      name: ""
  };

  getData = () => {
    let newArray = [];
    newArray.push(this.state.winTotal);
    newArray.push(this.state.loseTotal);
    newArray.push(this.state.tieTotal);
    return newArray;
  }

  getStandingsByUser = () => {
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets sessionStorage
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets localStorage

    if (sessionUser !== null) {
      APIManager.getStandingsByUserId(sessionUser.userId).then((results) => {
        this.setState({ winTotal: results[0].winCount });
        this.setState({ loseTotal: results[0].loseCount });
        this.setState({ tieTotal: results[0].tieCount });
      });
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name })
      });
    } else if (localUser !== null) {
      APIManager.getStandingsByUserId(localUser.userId).then((results) => {
        this.setState({ winTotal: results[0].winCount });
        this.setState({ loseTotal: results[0].loseCount });
        this.setState({ tieTotal: results[0].tieCount });
      });
      APIManager.getUsersById(sessionUser.userId).then(user => {
        this.setState({ name: user[0].name })
      });
    }
  };

  componentDidMount = () => {
    return this.getStandingsByUser();
  };

  render() {
    return (
      <React.Fragment>
        <br/>
        <Table id="standingsTable" isBordered>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>Ties</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{this.state.name}</td>
                  <td>{this.state.winTotal}</td>
                  <td>{this.state.loseTotal}</td>
                  <td>{this.state.tieTotal}</td>
              </tr>
          </tbody>
        </Table>

        <br/>

        {/* Pie Chart */}

            <PieChart data={this.getData()} />

      </React.Fragment>
    );
  }
}

// exports to ApplicationViews
