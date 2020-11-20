import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <NavDropdown title="Movies" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/movies/upcoming">Upcoming</NavDropdown.Item>
        <NavDropdown.Item href="/movies/latest">Latest</NavDropdown.Item>
        <NavDropdown.Item href="/movies/toprated">Top Rated</NavDropdown.Item>
        <NavDropdown.Item href="/movies/nowplaying">Now Playing</NavDropdown.Item>
        <NavDropdown.Item href="/movies/popular">Popular</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="TV" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/tv">TV Shows</NavDropdown.Item>
        <NavDropdown.Item href="/tv/latest">Latest</NavDropdown.Item>
        <NavDropdown.Item href="/tv/popular">Popular</NavDropdown.Item>
        <NavDropdown.Item href="/tv/toprated">Top Rated</NavDropdown.Item>
        <NavDropdown.Item href="/tv/airingtoday">Airing Today</NavDropdown.Item>
        <NavDropdown.Item href="/tv/ontheair">On The Air</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="People" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/persons/latest">Latest</NavDropdown.Item>
        <NavDropdown.Item href="/persons/popular">Popular</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/movies/favorites">Favorites</Nav.Link>
      <Nav.Link href="/movies/watchlist">Watch List</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
};

export default UpdatedSiteHeader;