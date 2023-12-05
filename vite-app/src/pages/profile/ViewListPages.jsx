import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

import { Image } from "primereact/image";
import { Tag } from "primereact/tag";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";
import useUsersData from "../../functionComponent/users/useUsersData";
import { Skeleton } from "primereact/skeleton";
import ViewListLoading from "./ViewListLoading";

function ViewListPages() {
  const { id } = useParams();
  const { ViewList } = UseMyListData();
  const { ViewUserById } = useUsersData();
  const user = ViewUserById(id);
  const { list, isLoading } = ViewList(id);
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
  console.log(list);

  if (isLoading) {
    return (
      <>
        <ViewListLoading user={user} />;
      </>
    );
  }
  return (
    <>
      <MDBContainer className="my-5">
        <MDBCard className=" mt-3">
          <MDBCardHeader className="bg-danger text-white">
            <MDBCardTitle>
              <h4 className="h4 m-0 p-0">{`${user.username} `}MyList</h4>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              {list.length < 0 ? null : (
                <>
                  <h3 className="h3 text-danger">No Data</h3>
                </>
              )}
              {list.map((item) => {
                return (
                  <>
                    <MDBCard className="mt-3">
                      <MDBCardBody>
                        <MDBCardText>
                          <div
                            className="d-flex"
                            style={{ justifyContent: "space-between" }}
                          >
                            <div className="d-flex gap-2 w-100">
                              <div className="d-flex flex-column align-items-center gap-3">
                                <Image
                                  src={`../../../movies_data/${item.movie_id}/${item.movie_image}`}
                                  alt="movie_image"
                                  width="50"
                                />
                              </div>
                              <div className="d-flex flex-column gap-3">
                                <h5 className="h5 text-primary">
                                  {item.movie_title}
                                </h5>
                                <div className="d-flex">
                                  <Tag
                                    severity={
                                      severityArray[getNum(item.list_status)]
                                    }
                                    value={`${item.list_status}`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex"></div>
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
      </MDBContainer>
    </>
  );
}

export default ViewListPages;
