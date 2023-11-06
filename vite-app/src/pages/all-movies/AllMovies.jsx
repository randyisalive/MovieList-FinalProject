import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function AllMovies() {
  const { movies } = UseMoviesData();
  const search = useRef(null);

  const imageTemplate = (title, image) => {
    return (
      <>
        <Image
          src={`../../../movies_data/${title}/${image}`}
          width="100"
          preview
        />
      </>
    );
  };

  return (
    <>
      <div className="d-flex flex-column m-4 mt-5 gap-4">
        <div className="d-flex gap-2">
          <MDBInput ref={search} />
          <Button
            label="Search"
            icon="pi pi-search"
            className="btn btn-primary"
          />
        </div>
        <DataTable value={movies} tableStyle={{ minWidth: "50rem" }}>
          <Column
            header=""
            body={(item) => {
              return imageTemplate(item.title, item.image);
            }}
          />
          <Column field="title" header="Title" />
          <Column field="description" header="Description" />
          <Column field="rating" header="Rating" />
          <Column
            body={(item) => {
              return (
                <>
                  <Link to={`/all-movies/${item.title}`}>
                    <Button className="btn btn-warning" label="Details" />
                  </Link>
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
