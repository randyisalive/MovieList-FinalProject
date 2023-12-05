import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { Skeleton } from "primereact/skeleton";

function ViewListLoading(props) {
  return (
    <>
      <MDBCard className="mb-5">
        <MDBCardHeader className="bg-danger text-white">
          <MDBCardTitle>
            <h4 className="h4 m-0 p-0"> {`${props.user.username} MyList`}</h4>
          </MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div className="d-flex gap-3">
                <div className="d-flex">
                  <Skeleton width="6rem" height="7rem" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <Skeleton width="12rem" />
                  <Skeleton width="7rem" />
                </div>
              </div>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex gap-3">
                <div className="d-flex">
                  <Skeleton width="6rem" height="7rem" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <Skeleton width="12rem" />
                  <Skeleton width="7rem" />
                </div>
              </div>
            </div>{" "}
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex gap-3">
                <div className="d-flex">
                  <Skeleton width="6rem" height="7rem" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <Skeleton width="12rem" />
                  <Skeleton width="7rem" />
                </div>
              </div>
            </div>{" "}
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex gap-3">
                <div className="d-flex">
                  <Skeleton width="6rem" height="7rem" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <Skeleton width="12rem" />
                  <Skeleton width="7rem" />
                </div>
              </div>
            </div>
            <div
              className="d-flex mt-3"
              style={{ justifyContent: "space-between" }}
            >
              <div className="d-flex gap-3">
                <div className="d-flex">
                  <Skeleton width="6rem" height="7rem" />
                </div>
                <div className="d-flex flex-column gap-3">
                  <Skeleton width="12rem" />
                  <Skeleton width="7rem" />
                </div>
              </div>
            </div>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default ViewListLoading;
