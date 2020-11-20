// ### Movies ### //

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  // New additions //

  export const getLatestMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getNowPlayingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPopularMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTopRatedMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getSimilarMovies = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getRecommendations = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getVideos = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getImages = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getCredits = id => {
    return fetch(
        `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  // Persons //

  export const getPersons = id => {
    return fetch(
        `https://api.themoviedb.org/3/person/{person_id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPersonsCredits = id => {
    return fetch(
        `https://api.themoviedb.org/3/person/{person_id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPersonsImages = id => {
    return fetch(
        `https://api.themoviedb.org/3/person/{person_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPersonsLatest = () => {
    return fetch(
        `https://api.themoviedb.org/3/person/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPersonsPopular = () => {
    return fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  // TV //

  export const getTVShows = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTV = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVCredits = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVEpisodeGroups = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/episode_groups?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVImages = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVRecommendations = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVReviews = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVSimilar = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVVideos = id => {
    return fetch(
        `https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

export const getTVLatest = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVAiringToday = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVOnTheAir = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVPopular = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTVTopRated = () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };