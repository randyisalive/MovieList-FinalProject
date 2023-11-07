import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import { getAllMovie } from "../../api/movies_api";

function AllMovies() {
  const {
    movies,
    setMovies,
    selectedMovie,
    filteredMovies,
    setSelectedMovie,
    searchMovies,
  } = UseMoviesData();
  const { addMovieToList, deleteMyList } = UseMyListData();

  const imageTemplate = (id, image) => {
    return (
      <>
        <Image
          src={`../../../movies_data/${id}/${image}`}
          width="300"
          preview
        />
      </>
    );
  };

  return (
    <>
      <div className="d-flex flex-column m-4 mt-5 gap-4">
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
          <Link to={`/movies/${selectedMovie.title}`}>
            <Button
              label="Search"
              icon="pi pi-search"
              className="btn btn-primary"
            />
          </Link>
        </div>
        <DataTable
          value={movies}
          paginator
          rows={10}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            header="Picture"
            body={(item) => {
              return imageTemplate(item.id, item.image);
            }}
          />
          <Column field="title" header="Title" />
          <Column field="description" header="Description" />
          <Column field="rating" header="Rating" />
          <Column
            body={(item) => {
              return (
                <>
                  <div className="d-flex gap-2">
                    <Link to={`/movies/${item.title}`} className="d-flex gap-2">
                      <Button className="btn btn-warning" label="Details" />
                    </Link>
                    {item.status === 1 ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          deleteMyList(item.list_id).then(() => {
                            getAllMovie().then((data) => {
                              setMovies(data);
                            });
                          });
                        }}
                      >
                        <i className="pi pi-check"></i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          addMovieToList(item.id).then(() => {
                            getAllMovie().then((data) => {
                              setMovies(data);
                            });
                          });
                        }}
                      >
                        <i className="pi pi-plus"></i>
                      </button>
                    )}
                  </div>
                </>
              );
            }}
          />
        </DataTable>
      </div>
    </>
  );
}

export default AllMovies;
