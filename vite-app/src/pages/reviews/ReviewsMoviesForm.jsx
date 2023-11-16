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
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { Image } from "primereact/image";

function ReviewsMoviesForm() {
  const { HandleForm, form } = useReviewsData();
  const { GetMoviesDetail, detail } = UseMoviesData();
  const { id, title } = useParams();
  GetMoviesDetail(title);
  console.log(detail);
  return (
    <>
      <MDBContainer className=" ms-3 mt-5">
        <MDBCard>
          <MDBCardHeader className="bg-white text-center">
            <p className="h2"> Review The Movie</p>
          </MDBCardHeader>
          <MDBCardBody>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={`../../../movies_data/${detail.id}/${detail.image}`}
                  width="100"
                />
                <h3 className="h3">{detail.title}</h3>
              </div>

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
            <div className="d-flex gap-3 align-items-center">
              Rating:{" "}
              <Rating
                cancel={false}
                name="rating"
                stars={5}
                onChange={(e) => HandleForm(e, id)}
                value={form.rating}
                pt={{
                  // this is for coloring the stars
                  onIcon: {
                    className:
                      form.rating <= 2.5 ? "text-danger" : "text-success",
                  },
                }}
              />
              {form.rating <= 2.5 ? (
                <p className="text-danger"> {form.rating}</p>
              ) : (
                <p className="text-success"> {form.rating}</p>
              )}
            </div>
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
