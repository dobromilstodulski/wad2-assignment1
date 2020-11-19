import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import UpdatedMovieDetails from "../components/updatedMovieDetails";
import UpdatedPageTemplate from "../components/updatedTemplateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";

const UpdatedMoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <UpdatedPageTemplate movie={movie}>
          <UpdatedMovieDetails movie={movie} />
        </UpdatedPageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(UpdatedMoviePage);