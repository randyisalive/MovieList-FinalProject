import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import useDiscussionData from "../../functionComponent/community/useDiscussionData";

function MovieDiscussion() {
  const { Discussion } = useDiscussionData();
  console.log(Discussion());
  const discussion = Discussion();
  return (
    <>
      <MDBContainer className="mt-5">
        {discussion.map((item) => {
          return (
            <>
              <MDBCard>
                <MDBCardHeader className="bg-white">
                  <MDBCardTitle>
                    <div className="d-flex align-items-center gap-4">
                      <Image
                        src={
                          item.user_image === "default.jpg"
                            ? `../../../actors_data/default.jpg`
                            : `../../../users_data/${item.user_id}/${item.user_image}`
                        }
                        alt="profile_picture"
                        width="100"
                        preview
                      />
                      <p className="h6 m-0">{item.user_username}</p>
                    </div>
                  </MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>
                    <div className="d-flex gap-2">
                      Movie:
                      <Link className="text-primary" to={`/movies/1/Aladdin`}>
                        <b>{item.movie_title}</b>
                      </Link>
                    </div>
                    <div className="d-flex mt-3">
                      <h3 className="h3">{item.title}</h3>
                    </div>
                    <div className="d-flex mt-3">{item.body}</div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </>
          );
        })}
      </MDBContainer>
    </>
  );
}

export default MovieDiscussion;
