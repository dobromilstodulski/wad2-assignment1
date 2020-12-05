import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import UpdatedMovieDetails from "../components/updatedMovieDetails";
import UpdatedPageTemplate from "../components/updatedTemplateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";


const UpdatedMoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id) // NEW
  return (
    <>
    {movie ? (
      <>
        <br/>
        <UpdatedPageTemplate movie={movie}>
          <UpdatedMovieDetails movie={movie} />
        </UpdatedPageTemplate>
        <br/>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                to={`/movies/${id}/reviews`}
              >
                <Button variant="primary"
                size="mb" block>
                Show Reviews (Extracts)
                </Button>
              </Link>
            ) : (
              <Link
                to={`/movies/${id}`}
              >
                <Button variant="primary"
                size="mb" block>
                Hide Reviews 
                </Button>
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