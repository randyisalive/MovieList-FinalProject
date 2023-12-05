import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import { getAllMovie } from "../../api/movies_api";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import Imbd_svg from "../../components/Imdb_svg";
import SearchAllMovies from "./SearchAllMovies";

function AllMovies() {
  const { movies, setMovies } = UseMoviesData();
  const { addMovieToList, deleteMyList } = UseMyListData();

  // toast
  const addListToastRef = useRef(null);
  const deleteListToastRef = useRef(null);
  const showToastAddList = () => {
    addListToastRef.current.show({
      severity: "success",
      summary: "Info",
      detail: "Added to MyList",
    });
  };
  const showToastDeleteList = () => {
    deleteListToastRef.current.show({
      severity: "error",
      summary: "Error",
      detail: "Delete in MyList",
    });
  };

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
      <Toast ref={addListToastRef} />
      <Toast ref={deleteListToastRef} />
      <div className="d-flex flex-column m-4 mt-5 gap-4">
        <SearchAllMovies />
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
          <Column
            header="Title"
            body={(item) => {
              return (
                <>
                  <Link
                    to={`/movies/${item.id}/${item.title}`}
                    className="text-primary"
                  >
                    {item.title}
                  </Link>
                </>
              );
            }}
          />
          <Column field="description" header="Description" />
          <Column
            header="Rating"
            sortable
            field="rating"
            body={(item) => {
              return (
                <>
                  <div className="d-flex gap-2 align-items-center">
                    <Imbd_svg />
                    <p
                      className={
                        item.rating / 2 <= 2.5 ? "text-danger" : "text-success"
                      }
                    >
                      {item.rating / 2}
                    </p>
                  </div>
                </>
              );
            }}
          />
          <Column
            body={(item) => {
              return (
                <>
                  <div className="d-flex gap-2">
                    {item.isAdded === 1 ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          deleteMyList(item.list_id).then(() => {
                            getAllMovie().then((data) => {
                              setMovies(data);
                              showToastDeleteList();
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
                              showToastAddList();
                            });
                          });
                          console.log(item);
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
