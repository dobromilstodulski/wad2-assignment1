import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

export default ({ movie }) => {
    return (
        <>
  <Card>
  <Card.Body>
  <Media>
  <img
    width={200}
    height={300}
    className="mr-3"
    src={movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : "./film-poster-placeholder.png"}
    alt={movie.title}
  />
  <Media.Body>
    <h1> {movie.title} </h1>
    <p> {movie.original_title} ({movie.status}) | {movie.tagline} | {movie.original_language} | <a href={movie.homepage}> <FontAwesomeIcon icon={["fas", "home"]} size="1x" /> </a> </p>
    <h3>Overview</h3>
    <p>
      {movie.overview}
    </p>
    <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {movie.runtime}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.release_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="pop" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="poph" className="list-group-item ">
          {movie.popularity}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Vote Count
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.vote_count}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Vote Average
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.vote_average}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="pop" className="list-group-item list-group-item-dark">
          Revenue
        </li>
        <li key="poph" className="list-group-item ">
          {movie.revenue}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Budget
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.budget}
        </li>
      </ul>

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
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pcountries => (
          <li key={pcountries.name} className="list-group-item">
            {pcountries.name}
          </li>
        ))}
      </ul>
  </Media.Body>
</Media>
</Card.Body>
</Card>
</>
    );
  };