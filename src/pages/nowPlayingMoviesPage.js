import React, { useContext } from "react";
import PageTemplate from '../components/updatedTemplateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default NowPlayingMoviesPage;