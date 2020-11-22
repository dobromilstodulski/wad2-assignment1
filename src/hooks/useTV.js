import { useEffect, useState } from "react";
import {getTVShow} from '../api/tmdb-api'

const useTVShow = id => {
  const [movie, setTVShow] = useState(null);
  useEffect(() => {
    getTVShow(id).then(tv => {
      setTVShow(tv);
    });
  }, [id]);
  return [movie, setTVShow];
};

export default useTVShow