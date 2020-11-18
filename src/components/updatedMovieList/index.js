import React from "react";
import Movie from "../updatedMovieCard/";
import "./movieList.css";

const UpdatedMovieList = ({movies, action}) => {
  const UpdatedMovieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{UpdatedMovieCards}</div>;
};

export default UpdatedMovieList;