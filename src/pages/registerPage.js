import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Firebase from "../components/fireBase/index";

//Followed the following tutorial : https://www.youtube.com/watch?v=unr4s3jd9qA | https://github.com/satansdeer/react-firebase-auth/tree/master/src
const Register = ({ history }) => {
  const handleRegister = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await Firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
        <>
      <div>
      <br/>
      <h2> Registration Page </h2>
      <br/>
      <form onSubmit={handleRegister}>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          <span>Password</span>
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
        </>
    );
};

export default withRouter(Register);