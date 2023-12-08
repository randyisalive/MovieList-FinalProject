import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Toast } from "primereact/toast";
import { useRef } from "react";

function Error404() {
  const errorToastRef = useRef(null);
  const show = (ref) => {
    ref.current.show({
      severity: "error",
      summary: "Error",
      detail: "Error: undefined",
    });
  };
  return (
    <>
      <Toast ref={errorToastRef} />
      <MDBContainer className="my-5">
        <MDBCard className="h-100 border-0">
          <MDBCardBody>
            <MDBCardText className="d-flex h-100 justify-content-center align-items-center">
              <div
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
                onClick={() => show(errorToastRef)}
              >
                <i
                  className="pi pi-ban text-danger"
                  style={{ fontSize: "3rem" }}
                ></i>
                <h1 className="h1 text-danger m-0 p-0">Error: undefined</h1>
                <i
                  className="pi pi-ban text-danger"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Error404;
