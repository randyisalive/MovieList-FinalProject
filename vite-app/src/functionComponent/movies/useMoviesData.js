import { useEffect, useState } from "react";
import { getAllMovie, getMovieByTitle } from "../../api/movies_api";
import getMoviesByGenre from "./getMoviesByGenre";
import { useParams } from "react-router-dom";
import getMoviesById from "./getMoviesById";
import useTokenData from "../token/useTokenData";
import UseMyListData from "../mylist/UseMyListData";

function UseMoviesData() {
  const [movies, setMovies] = useState([]); // state of all movies
  const [rating, setRating] = useState(null); // rating for detail movie
  const [isLoading, setIsLoading] = useState(true); // set loading state
  const [similar, setSimilar] = useState([]);
  const [detail, setDetail] = useState([]); // detail on a movie

  const [selectedMovie, setSelectedMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(null);
  const { addMovieToList, deleteMyList } = UseMyListData();

  const { checkIsValid } = useTokenData();
  useEffect(() => {
    getAllMovie().then((data) => {
      setMovies(data);
      setIsLoading(false);
      console.log(data);
    });
  }, []);

  const searchMovies = (event) => {
    // validation

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
        if (data) {
          getMoviesByGenre(data.genres_id).then((data) => {
            setSimilar(data);
          });
        }
      });
    }, []);
  }
  async function addList(title) {
    await addMovieToList(detail.id).then(() => {
      getMovieByTitle(title).then((data) => {
        setDetail(data);
      });
    });
  }

  function delList(title) {
    deleteMyList(detail.id).then(() => {
      getMovieByTitle(title).then((data) => {
        setDetail(data);
      });
    });
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

  function GetSingleMovieById(id) {
    const [singleMovie, setSingleMovie] = useState([]);
    useEffect(() => {
      if (!checkIsValid()) {
        getMoviesById(id).then((data) => {
          setSingleMovie(data);
        });
      }
    }, []);

    return singleMovie;
  }

  return {
    movies,
    setMovies,
    searchMovies,
    isLoading,
    selectedMovie,
    GetMoviesDetail,
    setSelectedMovie,
    filteredMovies,
    setFilteredMovies,
    GetSingleMovieById,
    rating,
    similar,
    RandomizeArrayAndLimit,
    addList,
    delList,
    detail,
  };
}

export default UseMoviesData;
