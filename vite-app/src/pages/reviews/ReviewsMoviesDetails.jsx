import { useParams } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

function ReviewsMoviesDetails() {
  const { movie_id } = useParams();
  const { GetSingleMovieById } = UseMoviesData();
  const movie = GetSingleMovieById(movie_id);
  console.log(movie);

  const cardTitle = () => {
    return (
      <>
        <div className="d-flex gap-3 align-items-center">
          <h1>{movie.title}</h1>
        </div>
      </>
    );
  };

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardHeader>
            <MDBCardTitle>
              <h3 className="h3">{movie.title}</h3>
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
              </MDBRow>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <h1>Details of reviews here</h1>
    </>
  );
}

export default ReviewsMoviesDetails;
