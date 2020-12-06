import React, { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"; 
import { AuthContext } from "../../contexts/authContext" ;

const PrivateRoute = props => {
    const context = useContext(AuthContext)

    const {component: Component, ...rest } = props;

    return context.isAuthenticated === true ? (
        <Route {...rest} render={props => <Component {...props} />} />
    ) : (
        <Redirect
          to={{
              pathname: "/login",
              state: { from: props.location }
          }}
        />
    );
};

export default PrivateRoute;