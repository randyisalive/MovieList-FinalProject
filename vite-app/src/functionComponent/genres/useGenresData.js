import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGenresByMovieId } from "../../api/genres_api";

function useGenresData() {
  const [Genres, setGenres] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getGenresByMovieId(id).then((data) => {
      setGenres(data);
      console.log(data);
    });
  }, []);

  return { Genres };
}

export default useGenresData;
