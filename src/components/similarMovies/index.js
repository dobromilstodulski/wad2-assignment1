import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import Card from 'react-bootstrap/Card'

export default ({ movie }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then(similar => {
      setSimilar(similar);
    });
  }, []);

  {similar.map(s => {
  return (
    <Card style={{ width: '18rem' }}>
    <Link to={`/movies/${s.id}`}> 
    <Card.Img variant="top" src={s.poster_path
              ? `https://image.tmdb.org/t/p/w500/${s.profile_path}`
              : "./film-poster-placeholder.png"} />
    </Link>
    <Card.Body>
          <Card.Title>{s.title} </Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {s.popularity}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {s.adult}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    );
  })}
};