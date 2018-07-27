import React, { Component } from "react";
import "./App.css";

import ApplicationViews from "./ApplicationViews";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

// exports to index.js
