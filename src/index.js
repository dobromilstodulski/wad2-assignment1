import UpdatedSiteHeader from './components/updatedSiteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import UpdatedHomePage from "./pages/updatedHomePage";
import UpdatedMoviePage from './pages/updatedMovieDetailsPage';
import FavoriteMoviesPage from './pages/favouritesMoviesPage';
import WatchListMoviesPage from './pages/watchListMoviesPage';      // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesListPage from './pages/upcomingMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";
import TVContextProvider from "./contexts/tvContext";
import LatestMoviesPage from "./pages/latestMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";



const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
          <UpdatedSiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>   {/* NEW */}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesListPage} />
              <Route exact path="/movies/latest" component={LatestMoviesPage} />
              <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
              <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
              <Route exact path="/movies/popular" component={PopularMoviesPage} />
              <Route path="/movies/:id" component={UpdatedMoviePage} />
              <Route path="/" component={UpdatedHomePage} />
              <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </MoviesContextProvider>     {/* NEW */}
      </div>
          <TVContextProvider> 
            <Switch>
            </Switch>
          </TVContextProvider> 
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));