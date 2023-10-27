import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

function MyList() {
  return (
    <>
      <MDBContainer className="bg-primary d-flex">
        <MDBCard className="d-flex m-5" style={{ height: "fit-content" }}>
          <MDBCardImage
            src="https://th.bing.com/th/id/OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4?pid=ImgDet&rs=1"
            position="top"
            alt="image-card"
            style={{ height: "250px" }}
          />
          <MDBCardBody>
            <MDBCardText>
              <div
                className="d-flex"
                style={{ justifyContent: "space-around" }}
              >
                <div className="d-flex mx-2">Aladin</div>
                <div className="d-flex"> Imdb icon {"7.8"}</div>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default MyList;
