import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  handleLogin = () => {
    APIManager.getData(`users?username=${this.state.username}`)
      .then(user => {
        if (user.length > 0 && this.state.password == user[0].password) {
          this.setState({ userId: user[0].id });
        } else {
          alert("Uh oh, looks like you mistyped your username or password");
        }
      })
      .then(() => {
        const checkBox = document.getElementById("checkBox");
        if (checkBox.checked) {
          if (this.state.userId) {
            localStorage.setItem(
              "credentials",
              JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                userId: this.state.userId
              })
            );
          }
        } else {
          if (this.state.userId) {
            sessionStorage.setItem(
              "credentials",
              JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                userId: this.state.userId
              })
            );
          }
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <form
            onSubmit={this.handleLogin}
            id="loginForm"
        >
          {/* login field for username */}
          <label htmlFor="username" />
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="username"
            name="username"
          />

          {/* login field for password */}
          <label htmlFor="password" />
          <input
            onChange={this.handleFieldChange}
            type="text"
            id="password"
            name="password"
          />

          {/* checkbox - if checked, user login data stored in local storage */}
          <label htmlFor="checkBox">Remember Me</label>
          <input
            type="checkbox"
            id="checkBox"
            name="checkBox"
          />

          {/* login button */}
          <button type="button" id="loginBtn">
            Log in
          </button>
        </form>

        <div id="signUpBtnContainer">
          <button id="signUpBtn">
            <Link to={{ pathname: "/register" }}>
                Sign up
            </Link>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
