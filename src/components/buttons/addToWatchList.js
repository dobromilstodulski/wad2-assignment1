import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import Button from 'react-bootstrap/Button';

const AddToWatchListButton = ({ movie }) => {
    const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
     <Button
      variant="primary"
      size="mb" block
      onClick={handleAddToWatchList}
    >
      Add to Watch List
      </Button>
  );
};

export default AddToWatchListButton;