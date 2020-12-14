import React, { useEffect, useState, createContext } from "react";
import Firebase from "../components/fireBase/index";

export const AuthContext =createContext(null);

export const AuthContextProvider = ( props ) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;