import { useParams } from "react-router-dom";
import UseMoviesData from "../../functionComponent/movies/useMoviesData";
import { MDBCardImage, MDBContainer } from "mdb-react-ui-kit";
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
          <MDBCardImage
            src={`../../../movies_data/1/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg`} // still broken
            width="100"
            preview
          />
          <h1>{movie.title}</h1>
        </div>
      </>
    );
  };

  return (
    <>
      <MDBContainer className="mt-5">
        <Card title={cardTitle}></Card>
      </MDBContainer>
      <h1>Details of reviews here</h1>
    </>
  );
}

export default ReviewsMoviesDetails;
