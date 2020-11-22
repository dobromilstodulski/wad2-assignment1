import React, { useEffect, createContext, useReducer } from "react";
import { getTVShows, getTVLatest, getTVPopular, getTVAiringToday, getTVOnTheAir, getTVTopRated } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        tvshows: state.tvshows.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
        popular: [...state.toprated],
        airingtoday: [...state.popular],
        ontheair: [...state.nowplaying],
        toprated: [...state.toprated],
      };
      case "add-favorite-latest":
      return {
        latest: state.latest.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        tvshows: [...state.tvshows],
        popular: [...state.toprated],
        airingtoday: [...state.popular],
        ontheair: [...state.nowplaying],
        toprated: [...state.toprated],
      };
      case "add-favorite-popular":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
        tvshows: [...state.tvshows],
        airingtoday: [...state.popular],
        ontheair: [...state.nowplaying],
        toprated: [...state.toprated],
      };
      case "add-favorite-airingtoday":
      return {
        airingtoday: state.airingtoday.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
        popular: [...state.toprated],
        tvshows: [...state.tvshows],
        ontheair: [...state.nowplaying],
        toprated: [...state.toprated],
      };
      case "add-favorite-ontheair":
      return {
        ontheair: state.ontheair.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
        popular: [...state.toprated],
        airingtoday: [...state.popular],
        tvshows: [...state.tvshows],
        toprated: [...state.toprated],
      };
      case "add-favorite-toprated":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.tv.id ? { ...m, favorite: true } : m
        ),
        latest: [...state.latest],
        popular: [...state.toprated],
        airingtoday: [...state.popular],
        ontheair: [...state.nowplaying],
        tvshows: [...state.tvshows],
      };
    case "load":
        return { load: action.payload.tv, latest: [...state.latest], popular: [...state.popular],
        airingtoday: [...state.airingtoday], ontheair: [...state.ontheair], toprated: [...state.toprated] };
    case "load-latest":
      return { latest: action.payload.tv,  tvshows: [...state.tvshows], popular: [...state.popular],
        airingtoday: [...state.airingtoday], ontheair: [...state.ontheair], toprated: [...state.toprated] };
    case "load-popular":
      return { popular: action.payload.tv,  latest: [...state.latest], tvshows: [...state.tvshows],
        airingtoday: [...state.airingtoday], ontheair: [...state.ontheair], toprated: [...state.toprated] };
    case "load-airingtoday":
      return { airingtoday: action.payload.tv,  latest: [...state.latest], popular: [...state.popular],
        tvshows: [...state.tvshows], ontheair: [...state.ontheair], toprated: [...state.toprated] };
    case "load-ontheair":
      return { ontheair: action.payload.tv,  latest: [...state.latest], popular: [...state.popular],
        airingtoday: [...state.airingtoday], tvshows: [...state.tvshows], toprated: [...state.toprated] };
    case "load-toprated":
      return { toprated: action.payload.tv,  latest: [...state.latest], popular: [...state.popular],
        airingtoday: [...state.airingtoday], ontheair: [...state.ontheair], tvshows: [...state.tvshows] };
    default:
      return state;
  }
};

const TVContextProvider = (props) => {
const [state, dispatch] = useReducer(reducer, { tvshows:[], latest:[], popular:[], airingtoday:[],
ontheair: [], toprated:[] });

const addToFavorites = (tvId) => {
  const index = state.tvshows.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite", payload: { tv: state.tvshows[index] } });
  const indexLatest = state.latest.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite-latest", payload: { tv: state.latest[indexLatest] } });
  const indexTopRated = state.toprated.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite-toprated", payload: { tv: state.toprated[indexTopRated] } });
  const indexPopular = state.popular.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite-popular", payload: { tv: state.popular[indexPopular] } });
  const indexAiringToday = state.airingtoday.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite-airingtoday", payload: { tv: state.airingtoday[indexAiringToday] } });
  const indexOnTheAir = state.ontheair.map((m) => m.id).indexOf(tvId);
  dispatch({ type: "add-favorite-ontheair", payload: { tv: state.ontheair[indexOnTheAir] } });
};

useEffect(() => {
    getTVShows().then((tv) => {
      dispatch({ type: "load", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTVLatest().then((tv) => {
      dispatch({ type: "load-latest", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTVPopular().then((tv) => {
      dispatch({ type: "load-popular", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTVAiringToday().then((tv) => {
      dispatch({ type: "load-airingtoday", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTVOnTheAir().then((tv) => {
      dispatch({ type: "load-ontheair", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTVTopRated().then((tv) => {
      dispatch({ type: "load-toprated", payload: { tv } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TVContext.Provider
      value={{
        tv: state.tv,
        latest: state.latest,
        popular: state.popular,
        airingtoday: state.airingtoday,
        ontheair: state.ontheair,
        toprated: state.toprated,
        addToFavorites: addToFavorites
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;