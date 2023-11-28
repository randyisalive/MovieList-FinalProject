import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";

import { Carousel } from "primereact/carousel";
import { Image } from "primereact/image";
import Imbd_svg from "../../Imdb_svg";
import useHomeData from "../../../functionComponent/home/useHomeData";
import { Link } from "react-router-dom";

function SimilarMovies() {
  const { RandomMovieList } = useHomeData();

  const movies = RandomMovieList();

  const productTemplate = (movie) => {
    return (
      <>
        <MDBContainer>
          <MDBCard className="my-5 p-0">
            <MDBCardBody className="m-0 p-0">
              <MDBCardText className="p-0 m-0 d-flex flex-column">
                <Link to={`/movies/${movie.id}/${movie.title}`}>
                  <Image
                    src={`../../../../movies_data/${movie.id}/${movie.image}`}
                    alt={movie.image}
                    width="200"
                  />
                </Link>

                <div
                  className="d-flex p-3 w-100 h-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>{movie.title}</p>
                  <div className="d-flex gap-2">
                    <p>
                      <Imbd_svg />
                    </p>
                    <p>{movie.rating}</p>
                  </div>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </>
    );
  };

  return (
    <>
      <span className="font-semibold text-gray-700 text-base dark:text-white">
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          Similar Movies
          <Link to={`/movies`}>
            <p className="p-0 m-0">View More</p>
          </Link>
        </div>
      </span>
      <div className="card mt-3">
        <Carousel
          value={movies}
          numVisible={4}
          numScroll={3}
          itemTemplate={productTemplate}
        />
      </div>
    </>
  );
}

export default SimilarMovies;
