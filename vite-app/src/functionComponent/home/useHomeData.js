import { useState, useEffect } from "react";
import { getLatestInMyList } from "../../api/home_api";

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
  }

  return { LatestInMyList };
}

export default useHomeData;
