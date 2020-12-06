import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

//https://stackoverflow.com/questions/44413789/how-to-input-search-query-to-get-required-image-from-json-data
function showdata() {
  var film = document.getElementById('search').value;
  console.log(film);

  var requestURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=`+film+`&page=1&include_adult=false`;

  var request = new XMLHttpRequest();

  request.open('GET', requestURL);

  request.responseType = 'json';

  request.send();

  request.onload = function(){
      var myjsondata = request.response; //request.response contains all our JSON data 

      console.log(myjsondata);
      var str = "<img src = 'https://image.tmdb.org/t/p/w500"+ myjsondata.results[0].poster_path+"'/>";
      console.log(str);
      document.write(str);
  }
};

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
      <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input" />
      <Button variant="outline-info" id="search" onClick={this.findMovies()}>Search</Button>
    </Form>
  </Navbar>
  );
};

export default UpdatedSiteHeader;