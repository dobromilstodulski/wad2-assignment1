import React, { useState } from "react";
import UpdatedMovieList from "../updatedMovieList";
import UpdatedFilterControls from "../updatedFilterControls";

const UpdatedMovieListPageTemplate = ({ movies, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <br />
      <UpdatedFilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <UpdatedMovieList
        action={action}
        movies={displayedMovies}
      ></UpdatedMovieList>
    </>
  );
};

export default UpdatedMovieListPageTemplate ;