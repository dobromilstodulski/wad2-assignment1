import React, { useContext } from "react";
import UpdatedPageTemplate from '../components/updatedTemplateMovieListPage';
import {MoviesContext} from '../contexts/moviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';

const UpdatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <UpdatedPageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpdatedMovieListPage;