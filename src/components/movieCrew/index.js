import React from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

export default ({movie}) => {
const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovie(movie.id).then(credits => {
      setCredits(credits);
    });

return (
<>
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
</>
)};