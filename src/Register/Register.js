import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";
import "./Register.css";


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

        <video preload="auto" loop="true" autoplay="autoplay" muted id="registerVideo">
          <source src="https://s3.amazonaws.com/nfl-api-images/videos/Madden+19+Tennessee+Titans+Uniforms.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <form
              onSubmit={this.handleRegister}
              id="registerForm"
          >
            {/* register field for name */}
            <label htmlFor="name">Name:</label>

            <br/>

            <input
              onChange={this.handleFieldChange}
              type="text"
              id="name"
              name="name"
              placeholder="Marcus Mariota"
            />

            <br/>

            {/* register field for username */}
            <label htmlFor="username">Username:</label>

            <br/>

            <input
              onChange={this.handleFieldChange}
              type="text"
              id="username"
              name="username"
              placeholder="marcusmariota8"
            />

            <br/>

            {/* register field for password */}
            <label htmlFor="password">Password:</label>

            <br/>

            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              name="password"
            />

            <br/>

            <br/>

            {/* register button */}
            <button className="bd-tw-button button is-info is-small is-focused is-rounded is-fullwidth" type="submit" id="registerBtn">
              Register
            </button>
          </form>

          <div id="backToLoginBtn">
            <button className="bd-tw-button button is-danger is-small is-focused is-rounded" type="button" id="signUpBtn">
              <Link to={{ pathname: "/login" }}>
                  Back to Login
              </Link>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
