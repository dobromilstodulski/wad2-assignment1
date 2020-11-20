import React, { useContext } from "react";
import PageTemplate from '../components/updatedTemplateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular;

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;