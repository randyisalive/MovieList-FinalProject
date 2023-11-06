import {
  MDBBtn,
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
      <MDBContainer className="bg-primary d-flex flex-column">
        <MDBContainer>
          <select name="" id="">
            <option value="watched">Watched</option>
            <option value="unwatched">Un-Watched</option>
          </select>
        </MDBContainer>
        <div className="d-flex">
          <MDBCard className="d-flex m-5" style={{ height: "fit-content" }}>
            <MDBCardImage
              src="https://th.bing.com/th/id/OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4?pid=ImgDet&rs=1"
              position="top"
              alt="image-card"
              style={{ height: "250px" }}
            />
            <MDBCardBody>
              <MDBCardText>
                <h3>Aladdin</h3>
                <p>rating: 8.5</p>
                <div className="d-flex mt-3 gap-2 justify-content-end">
                  <i className="pi pi-check" style={{ fontSize: "1.5rem" }}></i>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </>
  );
}

export default MyList;
