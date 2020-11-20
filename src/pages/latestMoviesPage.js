import React, { useContext } from "react";
import PageTemplate from '../components/updatedTemplateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.latest;

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
    />
  );
};

export default LatestMoviesPage;