import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import 'bulma/css/bulma.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faChartArea } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faHome, faChartArea)

export default class Navbar extends Component {
  handleLogout = () => {
    let localUser = JSON.parse(localStorage.getItem("credentials")); // gets current user in localStorage
    let sessionUser = JSON.parse(sessionStorage.getItem("credentials")); // gets current user in sessionStorage

    if (localUser !== null) {
      localStorage.removeItem("credentials");
      window.location = 'http://sr-ultimate-team.s3-website.us-east-2.amazonaws.com/';
    } else if (sessionUser !== null) {
      sessionStorage.removeItem("credentials");
      window.location = 'http://sr-ultimate-team.s3-website.us-east-2.amazonaws.com/';
    } else {
      alert("You were never logged in!");
      window.location = 'http://sr-ultimate-team.s3-website.us-east-2.amazonaws.com/';
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav id="navbar" className="navbar is-info">
          <div className="navbar-brand">
               <div className="navbar-item">
                  <img
                  id="navbarLogo"
                  className="is-text-white"
                  src="https://s3.amazonaws.com/nfl-api-images/images/navbar-helmet-logo.png" alt="NFL Logo" width="30" height="24" />
               </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/"><FontAwesomeIcon className="navbarIcons" icon="home" /> Home</Link>
              <Link className="navbar-item" to="/buildteam"><FontAwesomeIcon className="navbarIcons" icon="users" /> Build a Team</Link>
              <Link className="navbar-item" to="/standings"><FontAwesomeIcon className="navbarIcons" icon={faChartArea} /> Standings</Link>
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
