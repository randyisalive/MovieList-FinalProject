import { AutoComplete } from "primereact/autocomplete";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";

function SearchAllMovies() {
  const { selectedMovie, filteredMovies, searchMovies, setSelectedMovie } =
    UseMoviesData();
  return (
    <>
      <div className="d-flex gap-2">
        <div className="card flex justify-content-center">
          <AutoComplete
            field="title"
            value={selectedMovie}
            suggestions={filteredMovies}
            completeMethod={searchMovies}
            onChange={(e) => setSelectedMovie(e.value)}
          />
        </div>
        <Link to={`/movies/${selectedMovie.id}/${selectedMovie.title}`}>
          <Button
            label="Search"
            icon="pi pi-search"
            className="btn btn-primary"
          />
        </Link>
      </div>
    </>
  );
}

export default SearchAllMovies;
