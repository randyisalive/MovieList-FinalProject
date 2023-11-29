import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { Tag } from "primereact/tag";
import useHomeData from "../../../functionComponent/home/useHomeData";
import Imbd_svg from "../../Imdb_svg";
import LoadingPage from "../../../pages/LoadingPage";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";

function LatestMyList() {
  const { LatestInMyList } = useHomeData();
  const { data, isLoading } = LatestInMyList();

  console.log("Latest MyList: ", data);

  const severityArray = ["success", "info", "warning", "danger"];

  const getNum = (list_status) => {
    if (list_status === "Watching") {
      return 1;
    } else if (list_status === "Completed") {
      return 0;
    } else if (list_status === "Dropped") {
      return 3;
    } else if (list_status === "Plan to Watch") {
      return 2;
    }
    return 4;
  };

  if (isLoading) {
    return (
      <>
        <MDBCard className="mt-3">
          <MDBCardBody>
            <MDBCardText>
              <LoadingPage />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }

  return (
    <div className="mt-10">
      <MDBCard>
        <MDBCardHeader className="bg-danger text-white">
          <MDBCardTitle>
            <div
              className="d-flex align-items-center"
              style={{ justifyContent: "space-between" }}
            >
              <span className="h4">Latest Movies in MyList</span>
              <Link to={`/mylist`}>
                <span>View More</span>
              </Link>
            </div>
          </MDBCardTitle>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
            {data.map((item) => {
              return (
                <>
                  <div
                    className="d-flex mt-3 gap-3 border-bottom p-2 "
                    key={item.id}
                  >
                    <div className="" id="image-container">
                      <Image
                        src={`../../../movies_data/${item.id}/${item.image}`}
                        alt="movie_image"
                        width="80"
                      />
                    </div>
                    <div className="detail-container d-flex flex-column gap-3">
                      <Link to={`/movies/${item.id}/${item.title}`}>
                        <p className="text-primary">{item.title}</p>
                      </Link>
                      <Tag
                        value={item.status}
                        severity={severityArray[getNum(item.status)]}
                      />
                      <div className="d-flex gap-2">
                        <p>{item.rating}</p>
                        <Imbd_svg />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default LatestMyList;
