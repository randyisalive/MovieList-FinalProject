import { Link, useParams } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import { Rating } from "primereact/rating";

import { Image } from "primereact/image";
import useCastsData from "../../functionComponent/casts/useCastsData";
import useGenresData from "../../functionComponent/genres/useGenresData";
import MoviesByGenre from "../../components/movies/MoviesByGenre";
import ReviewMovies from "../../components/movies/ReviewsMovies";
import useReviewsData from "../../functionComponent/reviews/useReviewsData";

function DetailMovies() {
  const { id, title } = useParams();
  const { GetMoviesDetail, detail, rating } = UseMoviesData();
  const { GetCastByMovieId } = useCastsData(id);
  const { Genres } = useGenresData();
  const { GetReviewsNewestByMovieId } = useReviewsData();
  const data = GetReviewsNewestByMovieId(id);
  console.log(data);
  GetMoviesDetail(title);
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              <MDBRow>
                <MDBCol className="col-xl-3 flex-column d-flex align-items-center justify-content-center gap-5">
                  <Image
                    width="250"
                    src={`../../../movies_data/${detail.id}/${detail.image}`}
                    preview
                  />
                  <Link to={`/reviews/${id}/${title}`}>
                    <button className="btn btn-primary">
                      Review This Movie
                    </button>
                  </Link>
                </MDBCol>
                <MDBCol className="d-flex flex-column gap-3">
                  <MDBRow>
                    <MDBCol>
                      <MDBCard>
                        <MDBCardHeader className="bg-danger text-white">
                          <MDBCardTitle className="m-0">
                            <div className="d-flex align-items-center gap-2">
                              <i className="pi pi-table"></i>
                              <p className="h4 m-0 p-0">MOVIE INFO</p>
                            </div>
                          </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>{detail.description}</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBCard>
                        <MDBCardHeader
                          className="d-flex align-items-center gap-3 bg-danger"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <i className="pi pi-search text-white"></i>
                            <p className="h4 p-0 m-0 text-white">CAST & CREW</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link className="text-white" to={"all-actors"}>
                              View More
                            </Link>
                          </div>
                        </MDBCardHeader>
                        <MDBCardBody className="d-flex">
                          <MDBCardText className="d-flex w-100 h-100">
                            {GetCastByMovieId().map((item) => {
                              return (
                                <>
                                  <div
                                    className="text-center align-items-center d-flex flex-column gap-3 w-100"
                                    key={item.id}
                                  >
                                    <Image
                                      src={
                                        item.image === "default.jpg"
                                          ? "../../../actors_data/default.jpg"
                                          : `../../../actors_data/${item.id}/${item.image}`
                                      }
                                      width="90"
                                      preview
                                    />
                                    <p>{`${item.FirstName} ${item.LastName}`}</p>
                                  </div>
                                </>
                              );
                            })}
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                      {Genres === null ? null : (
                        <MDBCard className="mt-3">
                          <MDBCardBody>
                            <MDBCardText className="d-flex flex-column gap-3">
                              <div className="d-flex">
                                <b>Genre: </b>
                                <ul className="gap-2 ms-2">
                                  {Genres === null
                                    ? null
                                    : Genres.map((item) => {
                                        return (
                                          <>
                                            <li>{item.genre}</li>
                                          </>
                                        );
                                      })}
                                </ul>
                              </div>
                              <div className="d-flex align-items-center gap-2">
                                <b>Rating: </b>
                                <Rating
                                  cancel={false}
                                  value={rating}
                                  stars={10}
                                  readOnly
                                />
                                {rating <= 5 ? (
                                  <p className="text-danger"> {rating}</p>
                                ) : (
                                  <p className="text-primary"> {rating}</p>
                                )}
                              </div>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <ReviewMovies />
        <MoviesByGenre title={title} />
      </MDBContainer>
    </>
  );
}

export default DetailMovies;
