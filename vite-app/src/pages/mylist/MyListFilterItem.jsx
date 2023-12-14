import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";

function MyListFilterItem({ list, filterMyList }) {
  return (
    <>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>
            <div className="d-flex justify-content-center align-items-center gap-5">
              <p
                className="h4 border-bottom border-primary p-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  filterMyList("all");
                }}
              >
                All Movies
              </p>

              <p
                className="h4 border-bottom border-primary p-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  filterMyList("watching");
                }}
              >
                Watching
              </p>
              <p
                className="h4 border-bottom border-primary p-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  filterMyList("completed");
                }}
              >
                Completed
              </p>
              <p
                className="h4 border-bottom border-primary p-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  filterMyList("dropped");
                }}
              >
                Dropped
              </p>
              <p
                className="h4 border-bottom border-primary p-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  filterMyList("plan");
                }}
              >
                Plan to Watched
              </p>
            </div>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default MyListFilterItem;
