import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import useDiscussionData from "../../functionComponent/community/useDiscussionData";
import { Link } from "react-router-dom";
import { userIdCookie } from "../../Cookies";
import LoadingPage from "../../pages/LoadingPage";

function RecentMoviesDiscussion() {
  const { GetRecentDiscussionFunction } = useDiscussionData();
  const { data, total, isLoading } = GetRecentDiscussionFunction();
  console.log(data);

  if (isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBCard className="mt-5">
            <MDBCardHeader className="bg-danger  text-white d-flex">
              <MDBCardTitle className="d-flex align-items-center w-100 m-0 p-0">
                <div
                  className=" d-flex w-100 align-items-center"
                  style={{ justifyContent: "space-between" }}
                >
                  <h4 className="h4 p-0 m-0"> Recent Movie Discussion</h4>
                  <Link to={`/community/Movie Discussion`}>
                    <p className="m-0 p-0">View More</p>
                  </Link>
                </div>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                {data.map((item, index) => {
                  return (
                    <>
                      <MDBCard className="border-0 border-bottom" key={item.id}>
                        <MDBCardBody>
                          <MDBCardText>
                            <div className="d-flex flex-column gap-1">
                              <p className="p">
                                <Link
                                  className="text-primary"
                                  style={{ cursor: "pointer" }}
                                  to={`/community/Movie Discussion/${item.id}/${item.movie_id}/${item.title}`}
                                >
                                  {item.title}
                                </Link>
                              </p>
                              <div className="d-flex flex-column">
                                <p>
                                  By
                                  {
                                    <Link
                                      className="text-primary"
                                      style={{ cursor: "pointer" }}
                                      to={
                                        item.user_id === userIdCookie
                                          ? `/profile/`
                                          : `/profile/view/${item.user_id}`
                                      }
                                    >
                                      {` ${item.username}`}
                                    </Link>
                                  }
                                  {` (${total[index]} Replies)`}
                                </p>
                                <p className="mt-3">
                                  {" "}
                                  {`Overall Rating: ${item.rating}`}
                                </p>
                              </div>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </>
                  );
                })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default RecentMoviesDiscussion;
