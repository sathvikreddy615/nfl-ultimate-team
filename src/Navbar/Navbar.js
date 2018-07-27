import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';

export default class Navbar extends Component {
  handleLogout = () => {
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets current user in localStorage
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets current user in sessionStorage

    if (localUser !== null) {
      localStorage.removeItem("credentials");
      window.location = 'http://localhost:3000/login';
    } else if (sessionUser !== null) {
      sessionStorage.removeItem("credentials");
      window.location = 'http://localhost:3000/login';
    } else {
      alert("You were never logged in!");
      window.location = 'http://localhost:3000/login';
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav id="navbar" className="navbar is-info">
          <div className="navbar-brand">
               <Link className="navbar-item" to="/">
                  <img src="http://content.sportslogos.net/logos/7/1007/full/dwuw5lojnwsj12vfe0hfa6z47.gif" alt="NFL Logo" width="25" height="23" />
               </Link>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/buildteam">Build a Team</Link>
              <Link className="navbar-item" to="/standings">Standings</Link>
              <Link className="navbar-item" to="/instructions">How to Play</Link>
            </div>
          </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                    <button className="bd-tw-button button is-danger is-small is-focused is-rounded" onClick={this.handleLogout} href="#">Log Out</button>
                </div>
              </div>
            </div>
        </nav>
      </React.Fragment>
    );
  }
}

// exports to App.js
