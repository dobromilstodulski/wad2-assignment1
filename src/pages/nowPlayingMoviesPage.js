import React, { useContext } from "react";
import PageTemplate from '../components/updatedTemplateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying;

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

export default NowPlayingMoviesPage;