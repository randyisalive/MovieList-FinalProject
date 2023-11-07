import { MDBContainer } from "mdb-react-ui-kit";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";

function MyList() {
  const { list, getList, toggleWatchList, deleteMyList } = UseMyListData();
  console.log(list);

  const imageTemplate = (movie_id, movie_image) => {
    return (
      <>
        <Image
          src={`../../../movies_data/${movie_id}/${movie_image}`}
          width="100"
          preview
        />
      </>
    );
  };

  const BtnList = (list_id, list_status, movie_title) => {
    return (
      <>
        {list_status === 1 ? (
          <div className="d-flex gap-2">
            <button
              className="btn btn-danger d-flex align-items-center gap-2"
              onClick={() => {
                deleteMyList(list_id).then(() => {
                  getList();
                });
              }}
            >
              <i className="pi pi-trash"></i>
              Delete
            </button>
            <Link to={`/movies/${movie_title}`}>
              <button className="btn btn-warning">Detail</button>
            </Link>
          </div>
        ) : (
          <button
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={() => {
              toggleWatchList(!list_status, list_id);
              console.log("Wathclist: ", list_id);
            }}
          >
            <i className="pi pi-plus"></i>
            Watchlist
          </button>
        )}
      </>
    );
  };
  return (
    <>
      <MDBContainer>
        <DataTable value={list}>
          <Column
            body={(item) => imageTemplate(item.movie_id, item.movie_image)}
          />
          <Column header="Movie" field="movie_title" />
          <Column
            body={(item) =>
              BtnList(item.list_id, item.list_status, item.movie_title)
            }
          />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
