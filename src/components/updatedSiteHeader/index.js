import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Firebase from "../fireBase/index"

const UpdatedSiteHeader = () => {

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
        width="60"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/movies/upcoming">Upcoming</Nav.Link>
      <Nav.Link href="/movies/toprated">Top Rated</Nav.Link>
      <Nav.Link href="/movies/favorites">Favorites</Nav.Link>
      <Nav.Link href="/movies/watchlist">Watch List</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info" id="search" onClick={() => Firebase.auth().signOut()}>Sign Out</Button>
    </Form>
  </Navbar>
  );
};

export default UpdatedSiteHeader;