import React, { Component } from "react";
import { Link } from "react-router-dom";
import APIManager from "../APIManager";

export default class Navbar extends Component {
  handleLogout = () => {
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets current user in localStorage
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets current user in sessionStorage

    if (localUser !== null) {
      localStorage.removeItem("credentials");
      window.location = 'http://localhost:3000/Login';
    } else if (sessionUser !== null) {
      sessionStorage.removeItem("credentials");
      window.location = 'http://localhost:3000/Login';
    } else {
      alert("You were never logged in!");
      window.location = 'http://localhost:3000/Login';
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/Register">Register</Link>
          <Link to="/Login">Login</Link>
          <button onClick={this.handleLogout}>Log Out</button>
        </nav>
      </React.Fragment>
    );
  }
}

// exports to App.js
