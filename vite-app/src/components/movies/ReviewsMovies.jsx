import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import useReviewsData from "../../functionComponent/reviews/useReviewsData";

function ReviewMovies() {
  const { id } = useParams();
  const {} = useReviewsData();

  return (
    <>
      <MDBCard className="mt-5 mb-5">
        <MDBCardHeader className="bg-white">
          <MDBBadge className="bg-danger p-0 m-0">
            <h3 className="h3 m-0 p-2">
              <b>REVIEW</b>
            </h3>
          </MDBBadge>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText className="">
            <div className="d-flex">
              <p className="m-0 p-0 h5">TITLE</p>
            </div>
            <div className="d-flex mt-4">
              <p>asd</p>
            </div>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default ReviewMovies;
