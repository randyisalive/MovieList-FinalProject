import { useEffect, useState } from "react";
import { getActorsByMovie } from "../../api/casts_api";

function useCastsData(id) {
  const [casts, setCasts] = useState([]);
  const [allCasts, setAllCasts] = useState([]);

  const movie_id = id;
  function GetCastByMovieId() {
    useEffect(() => {
      getActorsByMovie(movie_id).then((data) => {
        setCasts(data);
      });
    }, []);

    return casts;
  }

  function GetAllCastByMovieId() {
    useEffect(() => {}, []);
    return allCasts;
  }

  return { GetCastByMovieId };
}

export default useCastsData;
