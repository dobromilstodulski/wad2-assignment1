import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import MovieCast from "../movieCast"

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
<div />
<h1> Cast </h1>
<Row md="4">{movie.credits.cast.map(cast => (
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={cast.profile_path
              ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
              : "./film-poster-placeholder.png"} />
    <Card.Body>
          <Card.Title>{cast.name}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {cast.popularity}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {cast.character}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
    <div />
    <h1> Crew </h1>
    <Row md="4">{movie.credits.crew.map(crew => (
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={crew.profile_path
              ? `https://image.tmdb.org/t/p/w500/${crew.profile_path}`
              : "./film-poster-placeholder.png"} />
    <Card.Body>
          <Card.Title>{crew.name}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {crew.popularity}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {crew.job}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
    <div />
    <h1> Videos </h1>
    <Row md="4">{movie.videos.results.map(videos => (
    <Card style={{ width: '10rem' }}>
    <iframe width="285" height="300"
    src={videos.key ? `https://www.youtube.com/embed/${videos.key}` : "null"}>

    </iframe>
    <Card.Link href={videos.key ? `https://www.youtube.com/watch?v=${videos.key}` : "null"}>Watch The Trailer Here!</Card.Link>
    <Card.Body>
          <Card.Title>{videos.name}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {videos.type}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {videos.site}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
    <div />
    <h1> Images </h1>
    <Row md="4">{movie.images.backdrops.map(posters => (
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={posters.file_path
              ? `https://image.tmdb.org/t/p/w500/${posters.file_path}`
              : "./film-poster-placeholder.png"} />
    <Card.Body>
          <Card.Title>{posters.iso_639_1}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {posters.vote_average}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {posters.vote_count}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
    <div />
    <h1> Similar Movies</h1>
    <Row md="4">{movie.similar.results.map(s => (
    <Card style={{ width: '10rem' }}>
    <Link to={`/movies/${s.id}`}>
    <Card.Img variant="top" src={s.poster_path
              ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
              : "./film-poster-placeholder.png"} />
    </Link>
    <Card.Body>
          <Card.Title>{s.title}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {s.release_date}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {s.popularity}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
    <div />
    <h1> Recommendations </h1>
    <Row md="4">{movie.recommendations.results.map(r => (
    <Card style={{ width: '10rem' }}>
    <Link to={`/movies/${r.id}`}>
    <Card.Img variant="top" src={r.poster_path
              ? `https://image.tmdb.org/t/p/w500/${r.poster_path}`
              : "./film-poster-placeholder.png"} />
    </Link>
    <Card.Body>
          <Card.Title>{r.title}</Card.Title>
      <Card.Text>
        <FontAwesomeIcon icon={["fas", "calendar"]} />
        <span> {r.release_date}</span>
        <FontAwesomeIcon icon={["fas", "star"]} />
        <span> {r.popularity}</span>
      </Card.Text>
    </Card.Body>
   </Card>
    ))}
    </Row>
</>
    );
  };