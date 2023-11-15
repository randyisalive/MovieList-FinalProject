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
import { Link, useParams } from "react-router-dom";

function ViewProfile() {
  const { ViewUserById } = useUsersData();
  const { id } = useParams();
  const user = ViewUserById(id);
  console.log(user);
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              <p className="h5 m-0">{user.username} Profile</p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mt-3">
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
                    <MDBCol className="d-flex gap-3">
                      <Link
                        to={`/mylist/view/user/${user.id}`}
                        className="btn btn-primary w-100"
                      >
                        <button>Movie List</button>
                      </Link>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBTextArea
                    style={{ minHeight: "350px" }}
                    value={user.biography}
                    readOnly
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default ViewProfile;
