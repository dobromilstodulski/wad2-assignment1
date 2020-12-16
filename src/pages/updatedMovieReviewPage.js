import React from "react";
import UpdatedPageTemplate from '../components/updatedTemplateMoviePage'
import MovieReview from "../components/movieReview";

const UpdatedMovieReviewPage = (props) => {
  return (
      <UpdatedPageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </UpdatedPageTemplate>
  );
};

export default UpdatedMovieReviewPage;