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
import { Link, useSearchParams } from "react-router-dom";
import useUsersData from "../../functionComponent/users/useUsersData";
import { Dialog } from "primereact/dialog";
import { useRef, useState } from "react";
import { Rating } from "primereact/rating";
import useStatusData from "../../functionComponent/status/useStatusData";
import { Toast } from "primereact/toast";
import getRating from "../../functionComponent/mylist/getRating";
import { updateStatusMyList } from "../../api/mylist_api";
import getStatusById from "../../functionComponent/mylist/getStatusById";

import { Tag } from "primereact/tag";

function MyList() {
  const {
    list,
    getList,
    deleteMyList,
    setBorder,
    setList,
    rating,
    setRating,
    update_rating,
    select,
    setSelect,
    setFilter,
    refreshList,
    filterMyList,
    setSearchParams,
  } = UseMyListData();
  const { GetUser } = useUsersData();
  const { status } = useStatusData();

  const [visible, setVisible] = useState({});

  const imageTemplate = (movie_id, movie_image, list_status) => {
    const severityArray = ["success", "info", "warning", "danger"];

    const getNum = () => {
      if (list_status === "Watching") {
        return 1;
      } else if (list_status === "Completed") {
        return 0;
      } else if (list_status === "Dropped") {
        return 3;
      } else if (list_status === "Plan to Watch") {
        return 2;
      }
      return 4;
    };

    return (
      <>
        <div className="d-flex flex-column gap-3 align-items-center">
          <Tag value={list_status} severity={severityArray[getNum()]}></Tag>

          <Image
            src={`../../../movies_data/${movie_id}/${movie_image}`}
            width="100"
            preview
          />
        </div>
      </>
    );
  };

  const BtnList = (list_id, movie_title) => {
    const isVisible = visible[list_id] || false;

    return (
      <>
        <button
          onClick={() => {
            setVisible({ ...visible, [list_id]: true });
            getRating(list_id).then((data) => {
              setRating(data);
            });

            getStatusById(list_id).then((data) => {
              setSelect(data[0]);
            });

            console.log(select);
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
                            updateStatusMyList(e.target.value, list_id).then(
                              (data) => {
                                console.log(data);
                                refreshList();
                              }
                            );
                          }}
                        >
                          {status.map((item) => {
                            return (
                              <>
                                <option
                                  key={item.status} // Add a unique key
                                  value={item.status}
                                  selected={item.status === select}
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
                  onClick={() => {
                    filterMyList("all");
                  }}
                >
                  All Movies
                </p>

                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    filterMyList("watching");
                  }}
                >
                  Watching
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    filterMyList("completed");
                  }}
                >
                  Completed
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    filterMyList("dropped");
                  }}
                >
                  Dropped
                </p>
                <p
                  className="h4 border-bottom border-primary p-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    filterMyList("plan");
                  }}
                >
                  Plan to Watched
                </p>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <DataTable
          value={list}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          className="mt-4"
        >
          <Column
            header="Image"
            body={(item) =>
              imageTemplate(item.movie_id, item.movie_image, item.list_status)
            }
          />
          <Column
            header="Movie Title"
            body={(item) => {
              return (
                <>
                  <div className="d-flex">
                    <Link
                      className="text-primary w-0 d-flex"
                      to={`/movies/${item.movie_id}/${item.movie_title}`}
                    >
                      <p className="m-0 d-flex w-0">{item.movie_title}</p>
                    </Link>
                  </div>
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
