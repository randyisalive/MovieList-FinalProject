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

import { Card } from "primereact/card";

import { Image } from "primereact/image";
import useCastsData from "../../functionComponent/casts/useCastsData";
import useGenresData from "../../functionComponent/genres/useGenresData";

function DetailMovies() {
  const { id, title } = useParams();
  const { GetMoviesDetail, detail } = UseMoviesData();
  const { GetCastByMovieId } = useCastsData(id);
  const { Genres } = useGenresData();
  GetMoviesDetail(title);
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              <MDBRow>
                <MDBCol className="col-xl-3 ">
                  <Image
                    width="250"
                    src={`../../../movies_data/${detail.id}/${detail.image}`}
                    preview
                  />
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
                            <Link className="" to={"all-actors"}>
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
                            <MDBCardText>
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
      </MDBContainer>
    </>
  );
}

export default DetailMovies;
