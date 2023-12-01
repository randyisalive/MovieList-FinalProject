import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import { Link } from "react-router-dom";

function LoadingFriends() {
  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <Link to={`/friends/request`}>
          <button className="btn btn-primary mb-3">Request</button>
        </Link>
        <MDBCard>
          <MDBCardHeader className="bg-danger">
            <MDBCardTitle className="m-0 d-flex align-items-center gap-3 text-white">
              <i className="pi pi-users" style={{ fontSize: "2rem" }}></i>
              <p className="m-0 h3">Friends List</p>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <MDBCard className="mt-2">
                <MDBCardBody>
                  <MDBCardText className="">
                    <div className="d-flex gap-3 w-100">
                      <div className="d-flex gap-3 w-100">
                        <Skeleton
                          width="3.5rem"
                          height="3rem"
                          className="mb-2"
                          shape="circle"
                        ></Skeleton>
                        <div className="d-flex flex-column gap-3 w-100">
                          <Skeleton width="10rem" className="" />
                          <Skeleton height="4rem" className="" />
                        </div>
                      </div>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mt-3">
                <MDBCardBody>
                  <MDBCardText className="">
                    <div className="d-flex gap-3 w-100">
                      <div className="d-flex gap-3 w-100">
                        <Skeleton
                          width="3.5rem"
                          height="3rem"
                          className="mb-2"
                          shape="circle"
                        ></Skeleton>
                        <div className="d-flex flex-column gap-3 w-100">
                          <Skeleton width="10rem" className="" />
                          <Skeleton height="4rem" className="" />
                        </div>
                      </div>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mt-3">
                <MDBCardBody>
                  <MDBCardText className="">
                    <div className="d-flex gap-3 w-100">
                      <div className="d-flex gap-3 w-100">
                        <Skeleton
                          width="3.5rem"
                          height="3rem"
                          className="mb-2"
                          shape="circle"
                        ></Skeleton>
                        <div className="d-flex flex-column gap-3 w-100">
                          <Skeleton width="10rem" className="" />
                          <Skeleton height="4rem" className="" />
                        </div>
                      </div>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mt-3">
                <MDBCardBody>
                  <MDBCardText className="">
                    <div className="d-flex gap-3 w-100">
                      <div className="d-flex gap-3 w-100">
                        <Skeleton
                          width="3.5rem"
                          height="3rem"
                          className="mb-2"
                          shape="circle"
                        ></Skeleton>
                        <div className="d-flex flex-column gap-3 w-100">
                          <Skeleton width="10rem" className="" />
                          <Skeleton height="4rem" className="" />
                        </div>
                      </div>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mt-3">
                <MDBCardBody>
                  <MDBCardText className="">
                    <div className="d-flex gap-3 w-100">
                      <div className="d-flex gap-3 w-100">
                        <Skeleton
                          width="3.5rem"
                          height="3rem"
                          className="mb-2"
                          shape="circle"
                        ></Skeleton>
                        <div className="d-flex flex-column gap-3 w-100">
                          <Skeleton width="10rem" className="" />
                          <Skeleton height="4rem" className="" />
                        </div>
                      </div>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default LoadingFriends;
