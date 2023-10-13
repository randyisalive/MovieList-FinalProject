import { Button } from "bootstrap";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useRef } from "react";
import "./Login.css";
import getAllUser from "../../functionComponent/authentication/getAllUser";

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === "" || password === "") {
      return null;
    }

    // get all user data
    const data = getAllUser();

    // validate username and password

    // set cookies

    //redirect to home

    // console.log
    console.log(username, password);
  }

  return (
    <>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Card
          className="d-flex w-50 p-5 justify-content-center"
          id="card-container"
        >
          <div className="d-flex w-100 justify-content-center mb-3">
            <h3>Login</h3>
          </div>
          <div className="d-flex w-100 justify-content-center gap-3">
            <form
              action=""
              className="d-flex gap-3"
              style={{ flexDirection: "column" }}
            >
              <div className="form-container">
                <div className="d-flex gap-3">
                  <i className="pi pi-user" style={{ fontSize: "2.5rem" }}></i>
                  <input
                    type="text"
                    className="form-control"
                    ref={usernameRef}
                  />
                </div>
              </div>
              <div className="form-container">
                <div className="d-flex gap-3">
                  <i className="pi pi-key" style={{ fontSize: "2.5rem" }}></i>
                  <input
                    type="text"
                    className="form-control"
                    ref={passwordRef}
                  />
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-center align-items-center bg-warning">
              <img src="" alt="logo of the website" />
            </div>
          </div>
          <div className="d-flex w-100 justify-content-center mt-5">
            <button
              className="btn btn-warning"
              type="submit"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
