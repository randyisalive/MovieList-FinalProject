import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import { useState } from "react";

function CheckStatus() {
  const [deleteStatus, setDeleteStatus] = useState(false);

  return (
    <>
      <MDBContainer className="mt-5">
        {/* search feature */}
        <div className="d-flex mb-3 gap-3">
          <MDBInput placeholder="name..." />
          <button className="btn btn-primary">Search Name</button>
        </div>
        <MDBCard>
          <MDBCardHeader className="bg-danger d-flex text-white">
            <MDBCardTitle>
              <h3 className="h3 m-0 p-0">Friends Status</h3>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardText>
                    <div className="d-flex gap-2">
                      <Image src="/" alt="profile_picture" width="100" />
                      <div className=" d-flex flex-column gap-2">
                        <div
                          className="d-flex align-items-center"
                          style={{ justifyContent: "space-between" }}
                        >
                          <p>admin</p>
                          {deleteStatus ? (
                            <Tag
                              value={`Cancel`}
                              severity={"danger"}
                              onMouseLeave={() => {
                                setDeleteStatus(!deleteStatus);
                              }}
                              style={{ cursor: "pointer", fontSize: "1rem" }}
                            />
                          ) : (
                            <Tag
                              value={`Pending`}
                              severity={"warning"}
                              onMouseOver={() => {
                                setDeleteStatus(!deleteStatus);
                              }}
                              style={{ fontSize: "1rem" }}
                            />
                          )}
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iure fugiat saepe omnis non alias iste totam
                          maxime! Aliquam omnis maxime, voluptas quis incidunt
                          nulla reprehenderit sapiente quae eligendi.
                          Repellendus, aperiam.
                        </p>
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

export default CheckStatus;
