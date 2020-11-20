import React, { useEffect, createContext, useReducer } from "react";
import { getTVShows, getTVLatest, getTVPopular, getTVAiringToday, getTVOnTheAir, getTVTopRated } from "../api/tmdb-api";

export const TVContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
        return { load: action.payload.tv };
    case "load-latest":
      return { latest: action.payload.tv };
    case "load-popular":
      return { popular: action.payload.tv };
    case "load-airingtoday":
      return { airingtoday: action.payload.tv };
    case "load-ontheair":
      return { ontheair: action.payload.tv };
    case "load-toprated":
      return { toprated: action.payload.tv };
    default:
      return state;
  }
};

const TVContextProvider = (props) => {
const [state, dispatch] = useReducer(reducer);

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
        toprated: state.toprated
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;