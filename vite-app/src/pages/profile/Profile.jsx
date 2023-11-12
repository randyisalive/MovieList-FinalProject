import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import useUsersData from "../../functionComponent/users/useUsersData";
import { Image } from "primereact/image";
import { useState } from "react";

function Profile() {
  const { GetUser } = useUsersData();
  const [setting, setSetting] = useState(false);
  const [form, setForm] = useState([]);
  const formHandler = (e) => {
    setForm(() => ({ ...form, [e.target.name]: e.target.value }));
  };
  console.log(GetUser());
  const user = GetUser();

  const profileSetting = () => {
    return (
      <>
        <div className="d-flex flex-column gap-3">
          <MDBInput
            placeholder="username..."
            name="username"
            onChange={formHandler}
          />
          <MDBInput
            placeholder="password..."
            name="password"
            onChange={formHandler}
          />
          <MDBFile />
          <input
            type="date"
            className="form-control"
            onChange={formHandler}
            name="birtday"
          />
          <div className="d-flex align-items-center justify-content-center">
            <button
              className="btn btn-warning"
              onClick={() => console.log(form)}
            >
              Update Profile
            </button>
          </div>
        </div>
      </>
    );
  };

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
                          : `../../../users_data/${user.id}/${user.image}`
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
                  {setting ? profileSetting() : null}
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
