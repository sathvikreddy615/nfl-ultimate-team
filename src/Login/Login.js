import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";
import "./Login.css";
import 'bulma/css/bulma.css';

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

  handleLogin = (e) => {
    e.preventDefault();

    APIManager.getData(`users?username=${this.state.username}`)
      .then(user => {
        if (user.length > 0 && this.state.password === user[0].password) {
          this.setState({ userId: user[0].id });
        } else {
          alert("Uh oh, looks like you mistyped your username or password");
          window.location = 'http://localhost:3000/login';
        }
      })
      .then(() => {
        const checkBox = document.getElementById("checkBox");
        if (checkBox.checked) {
          if (this.state.userId) {
            localStorage.setItem(
              "credentials",
              JSON.stringify({
                email: this.state.username,
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
                email: this.state.username,
                password: this.state.password,
                userId: this.state.userId
              })
            );
          }
        }
      })
      .then(() => {
        this.props.history.push("/");
      })
  };

  render() {
    return (
      <React.Fragment>
        <video preload="auto" loop="true" autoPlay="autoplay" muted id="loginVideo">
          <source src="https://s3.amazonaws.com/nfl-api-images/videos/Titans+Login.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <form
              onSubmit={this.handleLogin}
              id="loginForm"
          >
            {/* login field for username */}
            <label htmlFor="username">Username:</label>
            <br/>
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="username"
              name="username"
              // placeholder="marcusmariota8"
            />

            <br/>

            {/* login field for password */}
            <label htmlFor="password">Password:</label>
            <br/>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              name="password"
            />

            <br/>

            {/* checkbox - if checked, user login data stored in local storage */}
            <label htmlFor="checkBox">Remember Me:</label>

            <br/>

            <input
              type="checkbox"
              id="checkBox"
              name="checkBox"
            />

            <br/>

            <br/>

            {/* login button */}
            <button className="bd-tw-button button is-info is-small is-focused is-rounded is-fullwidth" type="submit" id="loginBtn">
              Log In
            </button>
          </form>

          <div id="signUpBtnContainer">
            <button className="bd-tw-button button is-danger is-small is-focused is-rounded is-fullwidth" type="button" id="signUpBtn">
              <Link to={{ pathname: "/register" }}>
                  Sign Up
              </Link>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// exports to ApplicationViews.js
