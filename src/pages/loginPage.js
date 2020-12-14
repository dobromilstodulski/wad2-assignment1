import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import Firebase from "../components/fireBase/index";
import { AuthContext } from "../contexts/authContext";

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
    return <Redirect to="/movies" />;
  }

    return (
        <>
        <h2> Login Page </h2>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>@</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter Email" />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleLogin}>
    Submit
  </Button>
</Form>
        </>
    );
};

export default withRouter(Login);