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

function Login() {
  const { formHandler, LoginBtnHandler, LoginRef } = UseLoginData();

  return (
    <>
      <Toast ref={LoginRef} />
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage:
            "url(/360_F_583569487_wWVhbCEqcKNmvEJExkfXRiRnB4RZqcaO.jpg)",
          backgroundSize: "cover",
          zIndex: "0",
          filter: "blur(6px)",
        }}
      ></div>
      <div className=" w-100 justify-content-center align-items-center d-flex vh-100">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <MDBCard className="pb-3">
            <MDBCardHeader className="bg-danger text-white">
              <MDBCardTitle className=" d-flex align-items-center gap-3">
                <i className="pi pi-sign-in" style={{ fontSize: "1.5rem" }}></i>

                <h3 className="h3 m-0 p-0">Login</h3>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody className="d-flex flex-column gap-3 ">
              <div className="d-flex gap-3 align-items-center justify-content-center">
                <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                <MDBInput
                  placeholder="username..."
                  type="text"
                  name="username"
                  onChange={formHandler}
                />
              </div>
              <div className="d-flex gap-3 align-items-center justify-content-center">
                <i className="pi pi-key" style={{ fontSize: "2rem" }}></i>
                <MDBInput
                  placeholder="password..."
                  type="password"
                  name="password"
                  onChange={formHandler}
                />
              </div>
              <div className="d-flex justify-content-center gap-2 ">
                <a href="/create" className="text-primary">
                  Create Account
                </a>
                |
                <a href="/forgot" className="text-primary">
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    LoginBtnHandler();
                  }}
                >
                  Login
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </form>
      </div>
    </>
  );
}

export default Login;
