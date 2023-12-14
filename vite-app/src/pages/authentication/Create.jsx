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
import { Image } from "primereact/image";

function Create() {
  const {
    formHandler,
    CreateUser,
    usernameRef,
    passwordRef,
    emptyRef,
    successRef,
  } = UseLoginData();

  return (
    <>
      <Toast ref={usernameRef} />
      <Toast ref={passwordRef} />
      <Toast ref={emptyRef} />
      <Toast ref={successRef} />
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url(/360_F_583569487_wWVhbCEqcKNmvEJExkfXRiRnB4RZqcaO.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "0",
          filter: "blur(6px)",
        }}
      ></div>

      <div className=" w-100 flex-column justify-content-center d-flex align-items-center vh-100">
        <MDBCard
          className="my-5 border-0 justify-content-center align-items-center"
          style={{ background: "none" }}
        >
          <MDBCardBody>
            <MDBCardText className="d-flex gap-2">
              <Image src="/icon.jpg" width="100" />
              <h1 className="display-1 text-white">MovieList</h1>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="">
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
                  <i className="pi pi-at" style={{ fontSize: "2rem" }}></i>
                  <MDBInput
                    placeholder="email..."
                    name="email"
                    type="email"
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
                    className="btn btn-danger"
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
