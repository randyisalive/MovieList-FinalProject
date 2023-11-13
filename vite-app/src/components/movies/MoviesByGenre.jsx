import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";

function MoviesByGenre(props) {
  const { GetMoviesDetail, RandomizeArrayAndLimit } = UseMoviesData();

  const randomArray = RandomizeArrayAndLimit(); // spit similar movies by genre
  GetMoviesDetail(props.title);
  return (
    <>
      <MDBCard className="mt-3 mb-3">
        <MDBCardHeader className="bg-white">
          <MDBCardTitle>
            <h3 className="h3">
              <MDBBadge className="bg-danger">SIMILAR MOVIES</MDBBadge>
            </h3>
          </MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            <MDBRow>
              {randomArray.map((item) => {
                return (
                  <>
                    <MDBCol key={item.movie_id}>
                      <a href={`/movies/${item.movie_id}/${item.movie_title}`}>
                        <MDBCard className="border-0">
                          <MDBCardBody className="d-flex flex-column align-items-center">
                            <Image
                              alt="movie_poster"
                              src={`../../../movies_data/${item.movie_id}/${item.movie_image}`}
                              width={200}
                            />
                            <MDBCardText>
                              <div
                                className="d-flex gap-5"
                                style={{ justifyContent: "space-between" }}
                              >
                                <p className="h6">{item.movie_title}</p>
                                <p className="h6">{item.movie_rating}</p>
                              </div>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCard>
                      </a>
                    </MDBCol>
                  </>
                );
              })}
            </MDBRow>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default MoviesByGenre;
