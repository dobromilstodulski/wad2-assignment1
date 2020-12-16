import React from "react";
import UpdatedPageTemplate from "../components/updatedTemplateMoviePage";
import ReviewForm from '../components/reviewForm'

const UpdatedReviewFormPage = props => {

  return (
      <UpdatedPageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </UpdatedPageTemplate>
  );
};
export default UpdatedReviewFormPage;