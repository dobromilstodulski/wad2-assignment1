import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import Button from 'react-bootstrap/Button';

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <Button
      variant="primary"
      size="mb" block
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </Button>
  );
};

export default AddToFavoriteButton;