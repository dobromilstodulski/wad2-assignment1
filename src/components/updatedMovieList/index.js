import React from "react";
import Movie from "../updatedMovieCard/";
import Row from 'react-bootstrap/Row';

const UpdatedMovieList = ({movies, action}) => {
  const UpdatedMovieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <Row md={4}>{UpdatedMovieCards}</Row>
};

export default UpdatedMovieList;