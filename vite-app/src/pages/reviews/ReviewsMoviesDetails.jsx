import { useParams } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import useReviewsData from "../../functionComponent/reviews/useReviewsData";
import { Dialog } from "primereact/dialog";

import { getCookies } from "../../functionComponent/authentication/CookiesFunction";
import { Rating } from "primereact/rating";

import { Toast } from "primereact/toast";
import { userIdCookie } from "../../Cookies";

function ReviewsMoviesDetails() {
  const { id, movie_id } = useParams();
  const { GetSingleMovieById } = UseMoviesData();
  const { user_id } = getCookies();
  const {
    GetReviewsById,
    AddComment,
    GetComment,
    handleComment,
    commentForm,
    openReply,
    visible,
    setVisible,
    toastRefDelete,
    toastRefSuccess,
    deleteCommentHandler,
  } = useReviewsData();
  const reviews = GetReviewsById(id);
  const comments = GetComment(id);
  console.log(comments);
  const movie = GetSingleMovieById(movie_id); // get single movie

  return (
    <>
      <Toast ref={toastRefDelete} />
      <Toast ref={toastRefSuccess} />
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardHeader className="bg-white">
            <MDBCardTitle>
              <h3 className="h3">{reviews.title}</h3>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <MDBRow>
                <MDBCol>
                  <Image
                    src={`../../../../movies_data/${movie.id}/${movie.image}`}
                    width="150"
                    preview
                  />
                </MDBCol>
                <MDBCol className="col-xl-10">
                  <div
                    className="d-flex flex-column h-100"
                    style={{ justifyContent: "space-between" }}
                  >
                    <h6 className="h6"> {reviews.body}</h6>
                    <div className="d-flex gap-2 align-items-center">
                      <h6 className="h6 m-0 p-0"> Rating: </h6>
                      <Rating
                        cancel={false}
                        stars={5}
                        readOnly
                        value={reviews.rating}
                        pt={{
                          // this is for coloring the stars
                          onIcon: {
                            className:
                              reviews.rating / 2 <= 2.5
                                ? "text-danger"
                                : "text-success",
                          },
                        }}
                      />

                      {reviews.rating <= 5 ? (
                        <p className="text-danger">{reviews.rating}</p>
                      ) : (
                        <p className="text-primary">{reviews.rating}</p>
                      )}
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mt-5 mb-5">
          <MDBCardHeader className="bg-white">
            <MDBCardTitle>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <h3 className="h3">Comments</h3>
                <div className="d-flex m-0 p-0">
                  <button
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    Add Comment
                  </button>
                  <Dialog
                    header="Add Comment"
                    visible={visible}
                    style={{ width: "50vw" }}
                    onHide={() => setVisible(false)}
                  >
                    <MDBTextArea
                      style={{ minHeight: "300px" }}
                      name="body"
                      onChange={handleComment}
                    />
                    <div className="d-flex justify-content-center mt-4">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          AddComment(commentForm.body, id, user_id);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </Dialog>
                </div>
              </div>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            {comments.map((item) => {
              return (
                <>
                  <MDBCard className="mt-3">
                    <MDBCardBody>
                      <MDBCardText>
                        <MDBRow>
                          <MDBCol>
                            <div className="d-flex p-3 justify-content-center gap-2 flex-column h-100">
                              <h5 className="h5"> {item.username}</h5>
                              <Image
                                alt="profile_picture"
                                src={
                                  item.user_image === "default.jpg"
                                    ? `../../../../actors_data/default.jpg`
                                    : `../../../../user_data/picture/${item.user_id}/${item.user_image}`
                                }
                                width="100"
                              />
                              <div className="d-flex gap-2">
                                {item.isReplyOpen === 1 ? (
                                  <p
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openReply(item.id, 0, id)}
                                  >
                                    Close
                                  </p>
                                ) : (
                                  <p
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => openReply(item.id, 1, id)}
                                  >
                                    Reply...
                                  </p>
                                )}
                              </div>
                            </div>
                          </MDBCol>
                          <MDBCol className="col-xl-9">
                            <h6 className="h6">{item.body}</h6>
                          </MDBCol>
                          <MDBCol className="col-xl-1">
                            {item.user_id === userIdCookie ? (
                              <i
                                className="pi pi-times text-danger"
                                style={{
                                  fontSize: "1.2rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  deleteCommentHandler(item.id, id);
                                }}
                              ></i>
                            ) : null}
                          </MDBCol>
                        </MDBRow>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </>
              );
            })}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default ReviewsMoviesDetails;
