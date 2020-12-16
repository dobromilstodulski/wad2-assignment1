import UpdatedSiteHeader from './components/updatedSiteHeader'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute"
import UpdatedHomePage from "./pages/updatedHomePage";
import UpdatedMoviePage from './pages/updatedMovieDetailsPage';
import UpdatedFavoriteMoviesPage from './pages/updatedFavouritesMoviesPage';
import UpdatedWatchListMoviesPage from './pages/updatedWatchListMoviesPage';      // NEW
import UpdatedMovieReviewPage from "./pages/updatedMovieReviewPage";
import UpdatedUpcomingMoviesListPage from './pages/updatedUpcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import Login from "./pages/loginPage";
import Register from "./pages/registerPage";
import UpdatedAddMovieReviewPage from './pages/updatedAddMovieReviewPage';
import GenresContextProvider from "./contexts/genresContext";
import MoviesContextProvider from "./contexts/moviesContext";



const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
          <UpdatedSiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <AuthContextProvider>
          <MoviesContextProvider>
          <GenresContextProvider>  {/* NEW */}
            <Switch>
              <Route exact path="/reviews/form" component={UpdatedAddMovieReviewPage} />
              <Route path="/reviews/:id" component={UpdatedMovieReviewPage} />
              <PrivateRoute exact path="/movies/favorites" component={UpdatedFavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/watchlist" component={UpdatedWatchListMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpdatedUpcomingMoviesListPage} />
              <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/movies/:id" component={UpdatedMoviePage} />
              <Route path="/" component={UpdatedHomePage} />
              <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </MoviesContextProvider>
          </AuthContextProvider> {/* NEW */}
      </div> 
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));