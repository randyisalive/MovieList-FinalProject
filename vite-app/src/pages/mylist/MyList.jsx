import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import useUsersData from "../../functionComponent/users/useUsersData";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

function MyList() {
  const { list, getList, toggleIsWatched, deleteMyList, border, setBorder } =
    UseMyListData();
  const { GetUser } = useUsersData();
  console.log(list);

  const [visible, setVisible] = useState(false);

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

  const BtnList = (list_id, isWatched) => {
    return (
      <>
        <button onClick={() => setVisible(true)} className="btn btn-primary">
          Visible
        </button>
        <Dialog
          header="Edit Movie"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <div className="d-flex gap-2 flex-column">
            <div className="">
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <MDBCardText>
                    <MDBRow>
                      <MDBCol className="col-xl-3">Movie Title:</MDBCol>
                      <MDBCol>asdadasd</MDBCol>
                    </MDBRow>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
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
              <button
                className="btn btn-primary d-flex align-items-center gap-2"
                onClick={() => {
                  toggleIsWatched(list_id, !isWatched);
                }}
              >
                {isWatched === 1 ? (
                  <i className="pi pi-check"></i>
                ) : (
                  <i className="pi pi-plus"></i>
                )}
                <p>Watched</p>
              </button>
            </div>
          </div>
        </Dialog>
      </>
    );
  };
  return (
    <>
      <MDBContainer className="mt-5">
        <div className="bg-danger text-white h-25 card mb-3 d-flex justify-content-center align-items-center">
          <p className="h1">{`${GetUser().username} List`}</p>
        </div>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              <div className="d-flex justify-content-center align-items-center gap-5">
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setBorder("all")}
                >
                  All Movies
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setBorder("current")}
                >
                  Currently Watching
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setBorder("watched")}
                >
                  Wathced
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setBorder("plan")}
                >
                  Plan
                </p>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
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
          <Column body={(item) => BtnList(item.list_id, item.isWatched)} />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
