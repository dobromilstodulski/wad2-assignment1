import React, { useEffect, createContext, useReducer } from "react";
import { getPersonsLatest, getPersonsPopular } from "../api/tmdb-api";

export const PersonsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-latest":
      return { latest: action.payload.persons };
    case "load-popular":
      return { popular: action.payload.persons };
    default:
      return state;
  }
};

const PersonsContextProvider = (props) => {
const [state, dispatch] = useReducer(reducer);

useEffect(() => {
    getPersonsLatest().then((persons) => {
      dispatch({ type: "load-latest", payload: { persons } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPersonsPopular().then((persons) => {
      dispatch({ type: "load-popular", payload: { persons } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PersonsContext.Provider
      value={{
        latest: state.latest,
        popular: state.popular,
      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;