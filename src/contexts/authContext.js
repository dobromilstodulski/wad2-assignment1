import React, { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"  


export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = (username, password) => {
        username = "user1";  
        password = "pass1";
        return setIsAuthenticated === true;
    };

    const signout = () => {
        return setIsAuthenticated === false;
    }

    return (
        <AuthContext.Provider
         value={{
             isAuthenticated,
             authenticate,
             signout,
         }}
         >
             {props.children}
         </AuthContext.Provider>
    );
};

export default AuthContextProvider;