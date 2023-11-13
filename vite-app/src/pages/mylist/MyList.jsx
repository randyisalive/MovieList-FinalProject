import { MDBContainer } from "mdb-react-ui-kit";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import useUsersData from "../../functionComponent/users/useUsersData";

function MyList() {
  const { list, getList, toggleWatchList, deleteMyList } = UseMyListData();
  const { GetUser } = useUsersData();
  console.log(GetUser());

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

  const BtnList = (list_id, list_status) => {
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
      <MDBContainer className="mt-5">
        <div className="bg-danger text-white h-25 card mb-5 d-flex justify-content-center align-items-center">
          <p className="h1">{`${GetUser().username} List`}</p>
        </div>
        <DataTable value={list}>
          <Column
            header="Image"
            body={(item) => imageTemplate(item.movie_id, item.movie_image)}
          />
          <Column
            header="Movie Title"
            body={(item) => {
              return (
                <>
                  <Link
                    className="a text-primary"
                    to={`/movies/${item.movie_id}/${item.movie_title}`}
                  >
                    <p>{item.movie_title}</p>
                  </Link>
                </>
              );
            }}
          />
          <Column
            body={(item) =>
              BtnList(
                item.list_id,
                item.list_status,
                item.movie_title,
                item.movie_id
              )
            }
          />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
