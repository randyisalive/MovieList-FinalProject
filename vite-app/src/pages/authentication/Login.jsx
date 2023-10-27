import { Button } from "bootstrap";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import handleLogin from "./LoginFunction";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import logInHandler from "../../functionComponent/authentication/logInHandler";
import useUsersData from "../../functionComponent/users/useUsersData";

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { users } = useUsersData();

  return (
    <>
      <div className=" w-100 justify-content-center align-items-center d-flex">
        <MDBCard>
          <MDBCardHeader>
            <MDBCardTitle>Login</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody className="d-flex flex-column gap-3">
            <div className="d-flex gap-3 align-items-center">
              <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
              <MDBInput
                placeholder="username..."
                type="text"
                name="username"
                ref={usernameRef}
              />
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i className="pi pi-key" style={{ fontSize: "2rem" }}></i>
              <MDBInput
                placeholder="password..."
                type="password"
                name="password"
                ref={passwordRef}
              />
            </div>
            <div className="d-flex bg-warning justify-content-center">
              Forgot Password | Contact Us
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  logInHandler(
                    usernameRef.current.value,
                    passwordRef.current.value,
                    users
                  );
                }}
              >
                Login
              </button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Login;
