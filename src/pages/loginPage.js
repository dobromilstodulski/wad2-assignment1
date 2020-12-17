import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import Firebase from "../components/fireBase/index";
import { AuthContext } from "../contexts/authContext";

//Followed the following tutorial : https://www.youtube.com/watch?v=unr4s3jd9qA | https://github.com/satansdeer/react-firebase-auth/tree/master/src
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

    return (
        <>
        <div>
      <br/>
      <h2> Login Page </h2>
      <br/>
      <form onSubmit={handleLogin}>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to={`/register`}> Don't have an account? </Link> 
    </div>
        </>
    );
};

export default withRouter(Login);