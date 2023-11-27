import { useState, useEffect } from "react";
import { getLatestInMyList, getRandomMovies } from "../../api/home_api";

function useHomeData() {
  function LatestInMyList() {
    const [data, setData] = useState([]);

    useEffect(() => {
      getLatestInMyList().then((data) => {
        setData(data);
      });
    }, []);

    return { data, setData };
  }

  function RandomMovieList() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getRandomMovies().then((data) => {
        setMovies(data);
      });
    }, []);

    return movies;
  }

  return { LatestInMyList, RandomMovieList };
}

export default useHomeData;
