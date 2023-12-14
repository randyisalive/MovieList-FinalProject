import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import LoadingFriends from "./LoadingFriends";
import { Badge } from "primereact/badge";

function Friends() {
  const { GetAllFriends, GetRequest } = useFriendsData();
  const { items, isLoading } = GetAllFriends();
  const { data } = GetRequest();
  console.log("items:", items);

  if (isLoading) {
    return (
      <>
        <LoadingFriends />
      </>
    );
  }

  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <MDBCard>
          <MDBCardHeader
            className="bg-danger d-flex align-items-center"
            style={{ justifyContent: "space-between" }}
          >
            <MDBCardTitle className="m-0 d-flex align-items-center gap-3 text-white">
              <i className="pi pi-users" style={{ fontSize: "2rem" }}></i>
              <p className="m-0 h3">Friends List</p>
            </MDBCardTitle>
            <div className="d-flex">
              <Link to={`/friends/request`}>
                <button className="btn text-white rounded-5 p-overlay-badge">
                  {data.length === 0 ? null : (
                    <Badge value={data.length} severity={`secondary`} />
                  )}
                  Request
                </button>
              </Link>
            </div>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              {items.map((item) => {
                return (
                  <>
                    <MDBCard className="mb-4 border-0 border-bottom">
                      <MDBCardBody>
                        <MDBCardText>
                          <div className="d-flex gap-3">
                            <div className="d-flex m-0 p-0">
                              <Image
                                src={
                                  item.image === "default.jpg"
                                    ? "../../../actors_data/default.jpg"
                                    : `../../../user_data/picture/${item.user_id}/${item.image}`
                                }
                                alt="profile_picture"
                                width="120"
                                preview
                              />
                            </div>

                            <div className="d-flex flex-column gap-2 w-100">
                              <div className="d-flex flex-column gap-2">
                                <b>{item.username}</b>
                                <p className="">{item.biography}</p>
                              </div>
                              <div className="d-flex  h-100 align-items-end justify-content-end">
                                <Link to={`/view/${item.user_id}`}>
                                  <button className="text-primary">
                                    View Profile
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </>
                );
              })}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Friends;
