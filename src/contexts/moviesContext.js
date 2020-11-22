import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getLatestMovies, getTopRatedMovies, getNowPlayingMovies, getPopularMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        latest: [...state.latest],
        toprated: [...state.toprated],
        popular: [...state.popular],
        nowplaying: [...state.nowplaying],
      };
      case "add-favorite-latest":
      return {
        latest: state.latest.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        toprated: [...state.toprated],
        popular: [...state.popular],
        nowplaying: [...state.nowplaying],
      };
      case "add-favorite-toprated":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        latest: [...state.latest],
        movies: [...state.movies],
        popular: [...state.popular],
        nowplaying: [...state.nowplaying],
      };
      case "add-favorite-popular":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        latest: [...state.latest],
        toprated: [...state.toprated],
        movies: [...state.movies],
        nowplaying: [...state.nowplaying],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], latest: [...state.latest],
      toprated: [...state.toprated], popular: [...state.popular], nowplaying: [...state.nowplaying] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], latest: [...state.latest],
        toprated: [...state.toprated], popular: [...state.popular], nowplaying: [...state.nowplaying] };
    case "load-latest":
      return { latest: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming],
        toprated: [...state.toprated], popular: [...state.popular], nowplaying: [...state.nowplaying] };
    case "load-toprated":
      return { toprated: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming],
        latest: [...state.latest], popular: [...state.popular], nowplaying: [...state.nowplaying] };
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming],
        toprated: [...state.toprated], popular: [...state.popular], latest: [...state.latest] };
    case "load-popular":
      return { popular: action.payload.movies, movies: [...state.movies], upcoming:[...state.upcoming],
        toprated: [...state.toprated], latest: [...state.latest], nowplaying: [...state.nowplaying] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        latest: [...state.latest],
        toprated: [...state.toprated],
        popular: [...state.popular],
        nowplaying: [...state.nowplaying],
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        latest: [...state.latest],
        toprated: [...state.toprated],
        popular: [...state.popular],
        nowplaying: [...state.nowplaying],
      };
      case "add-watchlist-nowplaying":
      return {
        nowplaying: state.nowplaying.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        upcoming: [...state.upcoming],
        latest: [...state.latest],
        toprated: [...state.toprated],
        popular: [...state.popular],
        movies: [...state.movies],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], latest:[],
   toprated:[], nowplaying: [], popular: []});

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
    const indexLatest = state.latest.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-latest", payload: { movie: state.latest[indexLatest] } });
    const indexTopRated = state.toprated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-toprated", payload: { movie: state.toprated[indexTopRated] } });
    const indexPopular = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-popular", payload: { movie: state.popular[indexPopular] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
    const indexNowPlaying = state.nowplaying.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist-nowplaying", payload: { movie: state.nowplaying[indexNowPlaying] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getLatestMovies().then((movies) => {
      dispatch({ type: "load-latest", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        latest: state.latest,
        toprated: state.toprated,
        nowplaying: state.nowplaying,
        popular: state.popular,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;