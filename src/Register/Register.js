import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      username: this.state.username,
      password: this.state.password
    };

    APIManager.addData("users", registerData)
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
            placeholder="Marcus Mariota"
          />

          {/* register field for username */}
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="username"
            name="username"
            placeholder="marcusmariota8"
          />

          {/* register field for password */}
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            name="password"
          />

          {/* register button */}
          <button type="submit" id="registerBtn">
            Register
          </button>
        </form>

        <div id="backToLoginBtn">
          <button type="button" id="signUpBtn">
            <Link to={{ pathname: "/login" }}>
                Back to Login
            </Link>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
