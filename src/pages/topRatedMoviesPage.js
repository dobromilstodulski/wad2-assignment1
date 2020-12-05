import React, { useContext } from "react";
import UpdatedPageTemplate from '../components/updatedTemplateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated;

  return (
    <UpdatedPageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMoviesPage;