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

function Profile() {
  const { GetUser } = useUsersData();
  const [setting, setSetting] = useState(false);

  console.log(GetUser());
  const user = GetUser();

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardHeader>
            <MDBCardTitle>
              <h3 className="h3">Profile Settings</h3>
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
                        <i className="pi pi-cog"></i>
                        Setting
                      </button>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol className="col-xl-9 mt-3">
                  {setting ? <ProfileForm /> : null}
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
