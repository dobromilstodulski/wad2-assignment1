import UpdatedSiteHeader from './components/updatedSiteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AuthContextProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute"
import UpdatedHomePage from "./pages/updatedHomePage";
import UpdatedMoviePage from './pages/updatedMovieDetailsPage';
import FavoriteMoviesPage from './pages/favouritesMoviesPage';
import WatchListMoviesPage from './pages/watchListMoviesPage';      // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import UpdatedUpcomingMoviesListPage from './pages/updatedUpcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";



const App = () => {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <div className="jumbotron">
          <UpdatedSiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>  {/* NEW */}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpdatedUpcomingMoviesListPage} />
              <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/movies/:id" component={UpdatedMoviePage} />
              <Route path="/" component={UpdatedHomePage} />
              <Redirect from="*" to="/" />
          </Switch> 
          </GenresContextProvider>
          </MoviesContextProvider> {/* NEW */}
      </div> 
    </div>
  </BrowserRouter>
  </AuthContextProvider> 
  );
};

ReactDOM.render(<App />, document.getElementById("root"));