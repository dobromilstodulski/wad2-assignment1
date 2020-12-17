import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const UpdatedMovieCard = ({movie, action}) => { 

  return (
  <Card style={{ width: '18rem' }}>
  <Link to={`/movies/${movie.id}`}> 
  <Card.Img variant="top" src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./film-poster-placeholder.png"} />
  </Link>
  <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      <FontAwesomeIcon icon={["fas", "calendar"]} />
      <span> {movie.release_date}</span>
      <FontAwesomeIcon icon={["fas", "star"]} />
      <span> {movie.vote_average}</span>
    </Card.Text>
    <div>
      {action(movie)}
    </div>
  </Card.Body>
</Card>
  );
};

export default UpdatedMovieCard;