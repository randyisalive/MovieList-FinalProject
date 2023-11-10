import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

function ReviewsMoviesForm() {
  return (
    <>
      <MDBContainer className=" ms-3 mt-5">
        <MDBCard>
          <MDBCardHeader className="bg-white text-center">
            <p className="h2"> Review The Movie</p>
          </MDBCardHeader>
          <MDBCardBody>
            <form action="">
              <MDBInput placeholder="title..." className="my-3" />
              <MDBTextArea
                placeholder="body..."
                className="my-3"
                style={{ height: "250px" }}
              />
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default ReviewsMoviesForm;
