import React, { Component } from "react";
import APIManager from "../APIManager";

export default class Register extends Component {
  state = {
    name: "",
    username: "",
    password: ""
  };

  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  handleRegister = e => {
    e.preventDefault();

    let registerData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    // need to add paramaters below

    APIManager.addData(registerData)
    .then(() => {
      this.props.history.push("/login");
    });
  };
  render() {
    return (
      <React.Fragment>
        <form
            onSubmit={this.handleRegister}
            id="registerForm"
        >
          {/* register field for name */}
          <label htmlFor="name">Name:</label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="name"
            name="name"
          />

          {/* register field for username */}
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="username"
            name="username"
          />

          {/* register field for password */}
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="password"
            name="password"
          />

          {/* register button */}
          <button type="button" id="registerBtn">
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
