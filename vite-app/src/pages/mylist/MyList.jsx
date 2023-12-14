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
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import ImageTemplateMyList from "./ImageTemplateMyList";
import MyListFilterItem from "./MyListFilterItem";
import MyListHeader from "./MyListHeader";
import { useState } from "react";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import useStatusData from "../../functionComponent/status/useStatusData";
import getRating from "../../functionComponent/mylist/getRating";
import getStatusById from "../../functionComponent/mylist/getStatusById";
import { Dialog } from "primereact/dialog";
import { updateStatusMyList } from "../../api/mylist_api";
import { Rating } from "primereact/rating";

function MyList() {
  const [visible, setVisible] = useState({});

  const {
    getList,
    deleteMyList,
    rating,
    setRating,
    update_rating,
    select,
    setSelect,
    refreshList,
    list,
    filterMyList,
  } = UseMyListData();
  const { status } = useStatusData();
  const BtnListMyList = (list_id, movie_title) => {
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
        <MyListHeader />
        <MyListFilterItem list={list} filterMyList={filterMyList} />
        <DataTable
          value={list}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          className="mt-4"
        >
          <Column
            body={(item) =>
              ImageTemplateMyList(
                item.movie_id,
                item.movie_image,
                item.list_status
              )
            }
          />
          <Column
            header="Movie Title"
            field="movie_title"
            sortable
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
              BtnListMyList(item.list_id, item.movie_title, item.list_status)
            }
          />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
