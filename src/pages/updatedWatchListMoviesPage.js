import React, {useContext} from "react";
import UpdatedPageTemplate from '../components/updatedTemplateMovieListPage';
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext';

const UpdatedWatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlists = context.upcoming.filter( m => m.watchlist )
  return (
    <UpdatedPageTemplate
      movies={watchlists}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default UpdatedWatchListMoviesPage;