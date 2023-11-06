import { useEffect, useState } from "react";
import { getAllMovie } from "../../api/movies_api";

function UseMoviesData() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllMovie().then((data) => {
      setMovies(data);
      console.log(data);
    });
  }, []);

  return { movies, filter, setFilter };
}

export default UseMoviesData;
