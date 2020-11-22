import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {tvContext} from "../contexts/tvContext"
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const OnTheAirShowsPage = () => {
  const context = useContext(tvContext);
  const tv = context.ontheair.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. TV"
      movies={tv}  /* Changed */
      action={(tv) => {
        return <AddToFavoritesButton tv={tv} />;
      }}
    />
  );
};

export default OnTheAirShowsPage;