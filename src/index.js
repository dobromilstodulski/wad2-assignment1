import SiteHeader from './components/siteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favouritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesListPage from './pages/upcomingMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage'
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider, {UpcomingMoviesContextProvider} from "./contexts/moviesContext";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>
          <UpcomingMoviesContextProvider>   {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesListPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </UpcomingMoviesContextProvider>    {/* NEW */}
          </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));