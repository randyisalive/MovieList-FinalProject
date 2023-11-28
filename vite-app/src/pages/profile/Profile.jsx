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
import useUsersData from "../../functionComponent/users/useUsersData";
import { Image } from "primereact/image";
import { useState } from "react";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfileStatistics from "../../components/profile/ProfileStatistics";

function Profile() {
  const { GetUser } = useUsersData();
  const [setting, setSetting] = useState(true);

  const user = GetUser();

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardHeader className="bg-danger text-white">
            <MDBCardTitle className="d-flex align-items-center gap-3">
              <i
                className="pi pi-user m-0 p-0"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <h3 className="h3 m-0 p-0">Profile Settings</h3>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <MDBRow>
                <MDBCol>
                  <div className="d-flex flex-column gap-3 align-items-center">
                    <Image
                      src={
                        user.image === "default.jpg"
                          ? `../../../actors_data/default.jpg`
                          : `../../../user_data/picture/${user.id}/${user.image}`
                      }
                      width="200"
                      preview
                    />
                    <div className="d-flex">
                      <button
                        className={
                          "btn btn-primary d-flex align-items-center gap-2 "
                        }
                        onClick={() => setSetting(!setting)}
                      >
                        {setting ? (
                          <>
                            <i className="pi pi-chart-pie"></i>
                            Statistics
                          </>
                        ) : (
                          <>
                            <i className="pi pi-cog"></i>Setting
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol className="col-xl-9 mt-3">
                  {setting ? <ProfileForm /> : <ProfileStatistics />}
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Profile;
