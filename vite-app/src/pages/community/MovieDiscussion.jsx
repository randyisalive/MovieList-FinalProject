import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import useDiscussionData from "../../functionComponent/community/useDiscussionData";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { userIdCookie } from "../../Cookies";
import getDiscussion from "../../functionComponent/community/getDiscussion";

function MovieDiscussion() {
  const {
    discussion,
    setDiscussion,
    FilterDiscussion,
    selectedMovies,
    setSelectedMovies,
    ResetFilter,
    deleteReviews,
  } = useDiscussionData();
  const { movies } = UseMoviesData();

  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center gap-3">
            <select
              name=""
              id=""
              className="form-control my-3"
              value={selectedMovies}
              onChange={(e) => {
                setSelectedMovies(e.target.value);
              }}
            >
              {movies.map((item) => {
                return (
                  <>
                    <option value={item.title}>{item.title}</option>
                  </>
                );
              })}
            </select>
            {discussion.length === 0 ? null : null}

            <button
              className={
                "btn btn-primary d-flex gap-2 align-items-center " +
                (discussion.length === 0 ? "disabled" : null)
              }
              onClick={() => {
                FilterDiscussion();
              }}
            >
              <i className="pi pi-search"></i>
              Search
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                ResetFilter();
                console.log(discussion.length);
              }}
            >
              <i
                className="pi pi-refresh
"
              ></i>
            </button>
          </div>
        </div>
        {discussion.length === 0 ? (
          <>
            <h1 className="h1">No Reviews Found Yet.</h1>
          </>
        ) : (
          discussion.map((item) => {
            return (
              <>
                <MDBCard className="mb-5">
                  <MDBCardHeader className="bg-white">
                    <MDBCardTitle>
                      <div className="d-flex align-items-center gap-4">
                        <Image
                          src={
                            item.user_image === "default.jpg"
                              ? `../../../actors_data/default.jpg`
                              : `../../../user_data/picture/${item.user_id}/${item.user_image}`
                          }
                          alt="profile_picture"
                          width="50"
                          preview
                        />
                        <p className="h6 m-0">{item.user_username}</p>
                      </div>
                    </MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardText>
                      <div className="d-flex gap-2">
                        Movie:
                        <Link
                          className="text-primary"
                          to={`/movies/${item.movie_id}/${item.movie_title}`}
                        >
                          <b>{item.movie_title}</b>
                        </Link>
                      </div>
                      <div className="d-flex mt-3">
                        <Link to={`${item.id}/${item.movie_id}/${item.title}`}>
                          <h3 className="h3 text-primary">{item.title}</h3>
                        </Link>
                      </div>
                      <div className="d-flex mt-3">{item.body}</div>
                    </MDBCardText>
                    {item.user_id === userIdCookie ? (
                      <MDBCardText className="mt-5">
                        <button
                          className="d-flex gap-2 btn btn-danger align-items-center"
                          onClick={() => {
                            deleteReviews(item.id).then(() => {
                              getDiscussion().then((data) => {
                                setDiscussion(data);
                              });
                            });
                          }}
                        >
                          <i className="pi pi-trash"></i>Delete
                        </button>
                      </MDBCardText>
                    ) : null}
                  </MDBCardBody>
                </MDBCard>
              </>
            );
          })
        )}
      </MDBContainer>
    </>
  );
}

export default MovieDiscussion;
