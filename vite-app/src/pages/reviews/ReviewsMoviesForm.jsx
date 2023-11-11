import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Rating } from "primereact/rating";
import useReviewsData from "../../functionComponent/reviews/useReviewsData";
import { formSubmitHandler } from "../../api/reviews_api";
import { useParams } from "react-router-dom";

function ReviewsMoviesForm() {
  const { HandleForm, form } = useReviewsData();
  const { id } = useParams();
  console.log;
  return (
    <>
      <MDBContainer className=" ms-3 mt-5">
        <MDBCard>
          <MDBCardHeader className="bg-white text-center">
            <p className="h2"> Review The Movie</p>
          </MDBCardHeader>
          <MDBCardBody>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <MDBInput
                placeholder="title..."
                className="my-3"
                name="title"
                onChange={(e) => HandleForm(e, id)}
              />
              <MDBTextArea
                placeholder="body..."
                className="my-3"
                style={{ height: "250px" }}
                name="body"
                onChange={(e) => HandleForm(e, id)}
              />
            </form>
            <Rating
              cancel={false}
              name="rating"
              onChange={(e) => HandleForm(e, id)}
              value={form.rating}
            />
          </MDBCardBody>
        </MDBCard>
        <div className="mt-4 justify-content-center d-flex">
          <button
            className="btn btn-primary"
            onClick={() =>
              formSubmitHandler(form).then(() => {
                window.location.href = "/community/Movie Discussion";
              })
            }
          >
            Submit
          </button>
        </div>
      </MDBContainer>
    </>
  );
}

export default ReviewsMoviesForm;
