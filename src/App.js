import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import ApplicationViews from "./ApplicationViews";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

// exports to index.js
