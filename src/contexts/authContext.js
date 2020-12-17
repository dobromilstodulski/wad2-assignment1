import React, { useEffect, useState, createContext } from "react";
import Firebase from "../components/fireBase/index";

//Followed the following tutorial : https://www.youtube.com/watch?v=unr4s3jd9qA | https://github.com/satansdeer/react-firebase-auth/tree/master/src
export const AuthContext = createContext(null);

export const AuthContextProvider = ( props ) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser, pending
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;