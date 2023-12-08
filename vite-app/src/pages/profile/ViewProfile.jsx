import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import useUsersData from "../../functionComponent/users/useUsersData";
import { useParams } from "react-router-dom";
import { Toast } from "primereact/toast";

import { Tooltip } from "primereact/tooltip";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { fetchFriendsData } from "../../functionComponent/friends/friends_api";
import ViewListPages from "./ViewListPages";

function ViewProfile() {
  const { ViewUserById } = useUsersData();
  const { id } = useParams();
  const { Request_friends, reqToastRef, GetFriendsTable } = useFriendsData();
  const user = ViewUserById(id);
  console.log(id);

  const { data, setData } = GetFriendsTable(id);
  console.log(data);

  return (
    <>
      <Toast ref={reqToastRef} />
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              <p className="h5 m-0">{user.username} Profile</p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mt-3 mb-5">
          <MDBCardBody>
            <MDBCardText>
              <MDBRow>
                <MDBCol className="col-xl-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <Image
                      src={
                        user.image === "default.jpg"
                          ? `../../../actors_data/default.jpg`
                          : `../../../user_data/picture/${user.id}/${user.image}`
                      }
                      alt="user_image"
                      width="200"
                      preview
                    />
                  </div>
                  <MDBRow className="mt-5">
                    <MDBCol className="">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td>Joined: </td>
                            <td>{user.joined}</td>
                          </tr>
                          <tr>
                            <td>Birtday: </td>
                            <td>{user.birthday}</td>
                          </tr>
                          <tr>
                            <td>Gender: </td>
                            <td>{user.gender}</td>
                          </tr>
                        </tbody>
                      </table>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="d-flex gap-3 justify-content-center">
                      <>
                        <button
                          className={`btn btn-light rounded-5 ${
                            data ? "disabled" : null
                          } `}
                          onClick={() => {
                            Request_friends(id).then(() => {
                              fetchFriendsData(id).then((data) => {
                                setData(data);
                              });
                            });
                          }}
                        >
                          Add Friend
                        </button>
                      </>

                      <Tooltip target=".add-friend" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBTextArea
                    style={{ minHeight: "350px" }}
                    value={user.biography}
                    readOnly
                    disabled
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <ViewListPages />
      </MDBContainer>
    </>
  );
}

export default ViewProfile;
