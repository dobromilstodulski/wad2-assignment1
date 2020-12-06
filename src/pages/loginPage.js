import React, { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"; 
import { AuthContext } from "../contexts/authContext" ;
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = props => {
    const context = useContext(AuthContext)

    const login = () => {
        context.authenticate("user1", "pass1");
    };
    const { from } = props.location.state || { from: { pathname: "/" } };

    if (context.isAuthenticated === true) {
        return <Redirect to = {from} />;
    }

    return (
        <>
        <h2> Login Page </h2>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>@</Form.Label>
    <Form.Control type="username" placeholder="Enter Username" />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={login}>
    Submit
  </Button>
</Form>
        </>
    );
};

export default LoginPage;