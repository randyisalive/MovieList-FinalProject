import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import UseLoginData from "../../functionComponent/authentication/useLoginData";
import { Toast } from "primereact/toast";

function Create() {
  const { formHandler, CreateUser, status } = UseLoginData();

  return (
    <>
      {console.log(status)}
      <div className=" w-100 justify-content-center d-flex align-items-center">
        <MDBCard>
          <MDBCardHeader className="bg-danger text-white">
            <MDBCardTitle>
              <h3 className="h3">Create Account</h3>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <form
                action=""
                onSubmit={(e) => e.preventDefault()}
                className="d-flex flex-column gap-3"
              >
                <div className="d-flex gap-3 align-items-center">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                  <MDBInput
                    placeholder="username..."
                    name="username"
                    onChange={formHandler}
                  />
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <i className="pi pi-key" style={{ fontSize: "2rem" }}></i>
                  <MDBInput
                    type="password"
                    placeholder="password..."
                    onChange={formHandler}
                    name="password"
                  />
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <i className="pi pi-replay" style={{ fontSize: "2rem" }}></i>
                  <MDBInput
                    placeholder="re-type password..."
                    onChange={formHandler}
                    name="retype"
                  />
                </div>

                <div className="d-flex justify-content-center mt-5 align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      CreateUser();
                    }}
                  >
                    Create Account
                  </button>
                </div>
                <div className="d-flex justify-content-center  mt-5 flex-column gap-3 mt-3 align-items-center">
                  Already Have Account?
                  <a href="/login" className="btn text-primary">
                    Login
                  </a>
                </div>
              </form>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Create;
