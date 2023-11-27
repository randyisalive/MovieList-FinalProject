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

function RecentMoviesDiscussion() {
  const { GetRecentDiscussionFunction } = useDiscussionData();
  const { data } = GetRecentDiscussionFunction();
  console.log(data);
  const discussions = data[1];
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBCard className="mt-5">
            <MDBCardHeader className="bg-danger text-white">
              <MDBCardTitle>
                <h4 className="h4"> Recent Movie Discussion</h4>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                {discussions.map((item) => {
                  return (
                    <>
                      <MDBCard className="border-0 border-bottom">
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
                                      to={`/profile/view/${item.user_id}`}
                                    >
                                      {` ${item.username}`}
                                    </Link>
                                  }
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
