import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import UseLoginData from "../../functionComponent/authentication/useLoginData";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const { form, formHandler } = UseLoginData();
  const refConfirmToast = useRef(null);
  const show = (ref) => {
    ref.current.show({
      severity: "error",
      summary: "Info",
      detail: "Under Development",
    });
  };
  return (
    <>
      <Toast ref={refConfirmToast} />
      <MDBContainer className="d-flex vh-100  justify-content-center align-items-center">
        <div className="d-flex ">
          <MDBCard>
            <MDBCardHeader className="bg-danger text-white">
              <MDBCardTitle>
                <h3 className="h3 m-0 p-0">Forgot Password</h3>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                  <div className="d-flex mt-3 flex-column gap-3">
                    <div className="d-flex  align-items-center justify-content-center gap-3">
                      <i
                        className="pi pi-user"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <MDBInput
                        name="username"
                        placeholder="username..."
                        required
                        style={{ width: "100%" }}
                        onChange={(e) => formHandler(e)}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <i
                        className="pi pi-at"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                      <MDBInput
                        name="email"
                        placeholder="email..."
                        type="email"
                        required
                        onChange={(e) => formHandler(e)}
                      />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <div className="d-flex w-50">
                        <p className="text-secondary text-center">
                          Forgot password request is under development, look at
                          the printed password in terminal console of flask
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 justify-content-center d-flex align-items-center gap-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          show(refConfirmToast);
                        }}
                      >
                        Send Request
                      </button>
                    </div>

                    <div className=" justify-content-center d-flex align-items-center gap-3">
                      <Link className="btn btn-link" to={`/login`}>
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </>
  );
}

export default ForgotPassword;
