import { useEffect, useState } from "react";
import { getAllMovie, getMovieByTitle } from "../../api/movies_api";

function UseMoviesData() {
  const [movies, setMovies] = useState([]); // state of all movies
  const [detail, setDetail] = useState([]); // detail on a movie
  const [isLoading, setIsLoading] = useState(true); // set loading state
  const [selectedMovie, setSelectedMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(null);

  useEffect(() => {
    getAllMovie().then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  const searchMovies = (event) => {
    // Timeout to emulate a network connection
    let _filteredMovies;

    if (!event.query.trim().length) {
      _filteredMovies = [...movies];
    } else {
      _filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }

    setFilteredMovies(_filteredMovies);
  };

  function GetMoviesDetail(title) {
    useEffect(() => {
      getMovieByTitle(title).then((data) => {
        setDetail(data);
      });
    }, []);
  }

  return {
    movies,
    setMovies,
    searchMovies,
    isLoading,
    detail,
    selectedMovie,
    setSelectedMovie,
    filteredMovies,
    setFilteredMovies,
    GetMoviesDetail,
  };
}

export default UseMoviesData;
