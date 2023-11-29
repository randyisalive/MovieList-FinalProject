import { useState, useEffect } from "react";
import { getLatestInMyList, getRandomMovies } from "../../api/home_api";

function useHomeData() {
  function LatestInMyList() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      getLatestInMyList().then((data) => {
        setLoading(false);
        setData(data);
      });
    }, []);

    return { data, setData, isLoading };
  }

  function RandomMovieList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      getRandomMovies().then((data) => {
        setLoading(false);
        setMovies(data);
      });
    }, []);

    return { movies, isLoading };
  }

  return { LatestInMyList, RandomMovieList };
}

export default useHomeData;
