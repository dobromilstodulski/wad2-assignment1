import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const MovieCrew = ({movie}) => {

return (

<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.credits.crew.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.credits.crew.profile_path}`
                  : "./film-poster-placeholder.png"} />
        <Card.Body>
              <Card.Title>{movie.credits.crew.name}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.credits.crew.popularity}</span>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.credits.crew.job}</span>
          </Card.Text>
        </Card.Body>
       </Card>
)};

export default MovieCrew;