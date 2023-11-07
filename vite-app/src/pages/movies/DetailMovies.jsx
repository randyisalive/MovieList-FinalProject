import { useParams } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";

function DetailMovies() {
  const { title } = useParams();
  const { GetMoviesDetail, detail } = UseMoviesData();
  GetMoviesDetail(title);
  console.log(detail);
  return (
    <>
      <h1>Detail Movies</h1>
    </>
  );
}

export default DetailMovies;
