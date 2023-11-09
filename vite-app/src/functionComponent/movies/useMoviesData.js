import { useEffect, useState } from "react";
import { getAllMovie, getMovieByTitle } from "../../api/movies_api";
import getMoviesByGenre from "./getMoviesByGenre";
import { useParams } from "react-router-dom";

function UseMoviesData() {
  const [movies, setMovies] = useState([]); // state of all movies
  const [detail, setDetail] = useState([]); // detail on a movie
  const [rating, setRating] = useState(null); // rating for detail movie
  const [isLoading, setIsLoading] = useState(true); // set loading state
  const [similar, setSimilar] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(null);

  useEffect(() => {
    getAllMovie().then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
    console.log(movies);
  }, []);

  const searchMovies = (event) => {
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
        setRating(parseFloat(data.rating));
        console.log(data);
        if (data) {
          getMoviesByGenre(data.genres_id).then((data) => {
            setSimilar(data);
            console.log(data);
          });
        }
      });
    }, []);
  }

  function RandomizeArrayAndLimit() {
    const { id } = useParams();
    const limit = 4; // limit filter
    // First, limit the array using slice
    const filteredArray = similar.filter(
      (item) => item.movie_id !== parseInt(id)
    );
    const limitedArray = filteredArray.slice(0, limit);

    // Then, randomize the limited array using sort with a randomization function
    const randomizedArray = limitedArray.sort(() => Math.random() - 0.5);

    return randomizedArray;
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
    rating,
    similar,
    RandomizeArrayAndLimit,
  };
}

export default UseMoviesData;
