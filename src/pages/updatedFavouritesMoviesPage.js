import React, {useContext} from "react";
import UpdatedPageTemplate from '../components/updatedTemplateMovieListPage';
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext';

const UpdatedFavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <UpdatedPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default UpdatedFavoriteMoviesPage;