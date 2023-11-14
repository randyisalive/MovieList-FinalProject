import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import UseLoginData from "../../functionComponent/authentication/useLoginData";

function Login() {
  const { formHandler, LoginBtnHandler } = UseLoginData();

  return (
    <>
      <div className=" w-100 justify-content-center align-items-center d-flex">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <MDBCard>
            <MDBCardHeader className="bg-danger">
              <MDBCardTitle className=" d-flex">
                <h1 className="h3 m-0 p-0">Login</h1>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody className="d-flex flex-column gap-3">
              <div className="d-flex gap-3 align-items-center">
                <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                <MDBInput
                  placeholder="username..."
                  type="text"
                  name="username"
                  onChange={formHandler}
                />
              </div>
              <div className="d-flex gap-3 align-items-center">
                <i className="pi pi-key" style={{ fontSize: "2rem" }}></i>
                <MDBInput
                  placeholder="password..."
                  type="password"
                  name="password"
                  onChange={formHandler}
                />
              </div>
              <div className="d-flex justify-content-center">
                <a href="/create">Create Account</a>| Contact Us
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
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
