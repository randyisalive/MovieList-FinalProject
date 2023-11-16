import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
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
import useMoviesData from "../../functionComponent/movies/useMoviesData";
import { Rating } from "primereact/rating";
import useStatusData from "../../functionComponent/status/useStatusData";
import { Toast } from "primereact/toast";
import getRating from "../../functionComponent/mylist/getRating";

function MyList() {
  const {
    list,
    getList,
    deleteMyList,
    border,
    setBorder,
    update_rating,
    rating,
    setRating,
    update_status,
  } = UseMyListData();
  const { GetUser } = useUsersData();
  const { status } = useStatusData();

  console.log(list);

  const [visible, setVisible] = useState({});

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

  const BtnList = (list_id, movie_title, list_status) => {
    const isVisible = visible[list_id] || false;

    return (
      <>
        <button
          onClick={() => {
            setVisible({ ...visible, [list_id]: true });

            getRating(list_id).then((data) => {
              console.log(data);
              setRating(data);
            });
          }}
          className="btn btn-primary"
        >
          More
        </button>
        <Dialog
          header={"Edit Movie"}
          visible={isVisible}
          style={{ width: "50vw" }}
          onHide={() => setVisible({ ...visible, [list_id]: false })}
        >
          <div className="d-flex gap-2 flex-column">
            <div className="">
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <MDBCardText>
                    <MDBRow className="mb-3">
                      <MDBCol className="col-xl-3">Movie Title:</MDBCol>
                      <MDBCol>{movie_title}</MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBCol className="col-xl-3">Watched:</MDBCol>
                      <MDBCol>
                        <select
                          name=""
                          id=""
                          className="form-control m-0 p-0 p-1 ps-2"
                          onChange={(e) => {
                            update_status(list_id, e.value);
                            console.log(e.value);
                          }}
                        >
                          {status.map((item) => {
                            return (
                              <>
                                <option
                                  value={item.status}
                                  selected={
                                    item.status === list_status ? true : false
                                  }
                                >
                                  {item.status}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                      <MDBCol className="col-xl-3">Rated:</MDBCol>
                      <MDBCol>
                        <div className="d-flex align-items-center gap-2">
                          <Rating
                            cancel={false}
                            value={rating}
                            stars={5}
                            onChange={(e) => update_rating(list_id, e)}
                          />
                          <p
                            className={
                              rating <= 2.5 ? "text-danger" : "text-success"
                            }
                          >
                            {rating}
                          </p>
                        </div>
                      </MDBCol>
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
            </div>
          </div>
        </Dialog>
      </>
    );
  };
  return (
    <>
      <Toast />
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
          <Column
            body={(item) =>
              BtnList(item.list_id, item.movie_title, item.list_status)
            }
          />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
