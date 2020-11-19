import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ movie }) => {
    return (
        <>
  <Card>
    <Card.Body>
      <Card.Text>
        <h4>{movie.title}</h4>
        <span>{movie.original_title} | {movie.original_language} | {movie.runtime} mins |{movie.release_date}</span>
      </Card.Text>
      <Container>
          <Row>
              <Col>
      <Card.Img variant="top" src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./film-poster-placeholder.png"}/>
            </Col>
            <Col>
                {movie.video}
            </Col>
            </Row>
    </Container>
    </Card.Body>
  </Card>
  <br/>
  <Card>
    <Card.Body>
      <Card.Text>
        <h4> Overview </h4>
        <p> {movie.overview} </p>
        <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pcountries => (
          <li key={pcountries.name} className="list-group-item">
            {pcountries.name}
          </li>
        ))}
      </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</>
    );
  };