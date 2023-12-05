import { Dialog } from "primereact/dialog";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import getRating from "../../functionComponent/mylist/getRating";
import getStatusById from "../../functionComponent/mylist/getStatusById";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { updateStatusMyList } from "../../api/mylist_api";
import { Rating } from "primereact/rating";
import { useState } from "react";
import useStatusData from "../../functionComponent/status/useStatusData";

function BtnListMyList(list_id, movie_title) {
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
  } = UseMyListData();
  const { status } = useStatusData();
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
}

export default BtnListMyList;
