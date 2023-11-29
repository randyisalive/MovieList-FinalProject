import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";

function Friends() {
  const { friends, GetAllFriends } = useFriendsData();
  const { items, setItems } = GetAllFriends();
  console.log("items:", items);

  return (
    <>
      <MDBContainer className="mt-5">
        <Link to={`/friends/request`}>
          <button className="btn btn-primary mb-3">Request</button>
        </Link>
        <MDBCard>
          <MDBCardHeader className="bg-danger">
            <MDBCardTitle className="m-0 d-flex align-items-center gap-3 text-white">
              <i className="pi pi-users" style={{ fontSize: "2rem" }}></i>
              <p className="m-0 h3">Friends List</p>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              {items.length <= 0 ? (
                <>
                  <p className="h3">No Data</p>
                </>
              ) : (
                <DataTable value={items} paginator rows={10}>
                  <Column
                    header="Profile Picture"
                    body={(item) => {
                      return (
                        <>
                          <MDBContainer>
                            <Image
                              src={
                                item.image === "default.jpg"
                                  ? `../../../actors_data/default.jpg`
                                  : `../../../user_data/picture/${item.user_id}/${item.image}`
                              }
                              width="100"
                              preview
                            />
                          </MDBContainer>
                        </>
                      );
                    }}
                  />
                  <Column
                    header="Username"
                    field="username"
                    body={(item) => {
                      return (
                        <>
                          <div className="d-flex">
                            <h1>{item.username}</h1>
                          </div>
                        </>
                      );
                    }}
                  />
                </DataTable>
              )}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Friends;
