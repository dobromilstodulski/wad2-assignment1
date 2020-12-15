import React, { useCallback } from "react";
import { withRouter } from "react-router";
import Firebase from "../components/fireBase/index";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
  <Button variant="primary" type="submit" onClick={handleRegister}>
    Submit
  </Button>
</Form>
        </>
    );
};

export default withRouter(Register);