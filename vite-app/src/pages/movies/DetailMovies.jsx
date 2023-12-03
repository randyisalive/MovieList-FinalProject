import { Link, useParams } from "react-router-dom";
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
} from "mdb-react-ui-kit";

import { Rating } from "primereact/rating";

import { Image } from "primereact/image";
import useCastsData from "../../functionComponent/casts/useCastsData";
import useGenresData from "../../functionComponent/genres/useGenresData";
import MoviesByGenre from "../../components/movies/MoviesByGenre";
import { Toast } from "primereact/toast";
import { useRef } from "react";

import { Tooltip } from "primereact/tooltip";
import useWhereToWatchData from "../../functionComponent/where_to_watch/useWhereToWatchData";

function DetailMovies() {
  // must add add to list feature in details movies
  const { id, title } = useParams();
  const { GetMoviesDetail, rating, addList, detail } = UseMoviesData();

  // where to watch
  const { GetDataByMovie } = useWhereToWatchData();
  const { data } = GetDataByMovie(id);
  console.log(data);

  // where to watch

  const { GetCastByMovieId } = useCastsData(id);
  const { Genres } = useGenresData();
  GetMoviesDetail(title);
  console.log(detail);

  // toast
  const addListRef = useRef(null);
  const developmentRef = useRef(null);

  const show = () => {
    addListRef.current.show({
      severity: "success",
      summary: "Info",
      detail: "Add to MyList",
    });
  };
  const showDev = () => {
    developmentRef.current.show({
      severity: "error",
      summary: "Info",
      detail: "Under Development",
    });
  };

  return (
    <>
      <Toast ref={developmentRef} />
      <Toast ref={addListRef} />
      <MDBContainer className="mt-5">
        <MDBCard className="mb-3">
          <MDBCardBody>
            <MDBCardText>
              <p className="h3 m-0">{detail.title}</p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
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
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <Link to={`/reviews/${id}/${title}`}>
                      <button className="btn rounded-5 border btn-danger ">
                        Review This Movie
                      </button>
                    </Link>
                    {detail.isAdded === 1 ? null : (
                      <>
                        {" "}
                        <Tooltip target=".add-list" />
                        <button
                          className="btn btn-danger rounded-5 add-list"
                          data-pr-tooltip="Add to Mylist"
                          onClick={() => {
                            addList(title).then(() => {
                              show();
                            });
                          }}
                        >
                          <i className="pi pi-plus"></i>
                        </button>
                      </>
                    )}
                  </div>
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
                            <Link
                              className="text-white d-flex gap-1 align-items-center"
                              onClick={() => {
                                showDev();
                              }}
                            >
                              <i className="pi pi-wrench"></i>
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
                                  value={rating / 2}
                                  stars={5}
                                  pt={{
                                    // this is for coloring the stars
                                    onIcon: {
                                      className:
                                        rating / 2 <= 2.5
                                          ? "text-danger"
                                          : "text-success",
                                    },
                                  }}
                                  readOnly
                                />
                                {rating <= 2.5 ? (
                                  <p className="text-danger"> {rating / 2}</p>
                                ) : (
                                  <p className="text-success"> {rating / 2}</p>
                                )}
                              </div>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      )}
                      <MDBCard className="mt-3">
                        <MDBCardHeader className="bg-danger text-white">
                          <MDBCardTitle className="m-0 p-0 d-flex align-items-center gap-2">
                            <Image
                              src="../../../public/5340270_cast_feed_rss_streaming_icon.png"
                              width="28"
                            />
                            <h3 className="h3 m-0 p-0">Where To Watch</h3>
                          </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText className="">
                            {data.map((item) => {
                              return (
                                <>
                                  <div
                                    className="d-flex  align-items-center my-3 border-bottom pb-3"
                                    style={{ justifyContent: "space-between" }}
                                  >
                                    <div className="d-flex gap-2 align-items-center">
                                      <Image
                                        src={`../../../public/${item.icon}`}
                                        width="35"
                                      />
                                      <p>{item.platform}</p>
                                    </div>

                                    <Link
                                      to={item.link}
                                      className=" btn btn-light d-flex align-items-center border rounded-5"
                                    >
                                      <i className="pi pi-play"></i>
                                      Watch
                                    </Link>
                                  </div>
                                </>
                              );
                            })}
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MoviesByGenre title={title} />
      </MDBContainer>
    </>
  );
}

export default DetailMovies;
