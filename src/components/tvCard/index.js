import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const TVCard = ({tv, action}) => { 

  return (
  <Card style={{ width: '18rem' }}>
  <Link to={`/tvshows/${tv.id}`}> 
  <Card.Img variant="top" src={tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : "./film-poster-placeholder.png"} />
  </Link>
  <Card.Body>
        <Card.Title>{tv.title}</Card.Title>
    <Card.Text>
      <FontAwesomeIcon icon={["fas", "calendar"]} />
      <span> {tv.release_date}</span>
      <FontAwesomeIcon icon={["fas", "star"]} />
      <span> {tv.vote_average}</span>
    </Card.Text>
  </Card.Body>
</Card>
  );
};

export default TVCard;