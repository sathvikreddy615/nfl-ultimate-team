import React, { Component } from "react";
import { Route } from "react-router-dom";

import Register from "./Register/Register";
import Login from "./Login/Login";

export default class ApplicationViews extends Component {
    isAuthenticated = () => {
        localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null;
    };


    render() {
        return (
            <React.Fragment>
                <Route path="/Register" component={Register} />
                <Route path="/login" component={Login} />
            </React.Fragment>
        );
    }
}

// exports to App.js
