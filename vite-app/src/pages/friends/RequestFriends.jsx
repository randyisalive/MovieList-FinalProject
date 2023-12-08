import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";

function RequestFriends() {
  const { GetRequest, acceptToastRef } = useFriendsData();
  const { data, setData, isLoading, acceptInvitesHandler } = GetRequest();
  console.log(data);

  return (
    <>
      <Toast ref={acceptToastRef} />
      <MDBContainer className="mt-5 mb-5">
        <MDBCard>
          <MDBCardHeader className="bg-danger text-white m-0">
            <MDBCardTitle>
              <div
                className="d-flex align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <div className="d-flex gap-3 align-items-center">
                  <i className="pi pi-inbox" style={{ fontSize: "1.6rem" }}></i>
                  <h3 className="h3 m-0 p-0">Invitation</h3>
                </div>
                <Link to={`/friends`}>
                  <button className="btn rounded-5 text-white">
                    All Friends
                  </button>
                </Link>
              </div>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              {data.length <= 0 ? (
                <>
                  <h5 className="h5 m-0 p-0">No Invites Avaliable</h5>
                </>
              ) : (
                data.map((item) => {
                  return (
                    <>
                      <MDBCard className="border-0 border-bottom">
                        <MDBCardBody>
                          <MDBCardText>
                            <div className="d-flex gap-3">
                              <div className="d-flex">
                                <Image
                                  src={
                                    item.user_image === "default.jpg"
                                      ? "../../../actors_data/default.jpg"
                                      : `../../../user_data/picture/${item.user_id}/${item.user_image}`
                                  }
                                  width="100"
                                  preview
                                  alt="profile"
                                />
                              </div>
                              <div
                                className="d-flex w-100 align-items-center"
                                style={{ justifyContent: "space-between" }}
                              >
                                <h5 className="h5">{item.username}</h5>
                                <button
                                  className="btn btn-light border rounded-5"
                                  onClick={() =>
                                    acceptInvitesHandler(item.user_id)
                                  }
                                >
                                  Accept
                                </button>
                              </div>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </>
                  );
                })
              )}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default RequestFriends;
