import { MDBContainer } from "mdb-react-ui-kit";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

function RequestFriends() {
  const { GetRequest } = useFriendsData();
  const { data, setData } = GetRequest();

  if (data) {
    return (
      <>
        <MDBContainer className="mt-5">
          <MDBContainer className="mb-3">
            <div className="d-flex">
              <button className="btn btn-primary">Check Status</button>
            </div>
          </MDBContainer>
          <DataTable value={data}>
            <Column header={"Username"} field="username" />
            <Column
              header="Option"
              body={(item) => {
                return (
                  <>
                    {item.status === "pending" ? (
                      <button className="btn btn-primary">Accept</button>
                    ) : (
                      <button className="btn btn-primary disabled">
                        Accept
                      </button>
                    )}
                  </>
                );
              }}
            />
          </DataTable>
        </MDBContainer>
      </>
    );
  }
}

export default RequestFriends;
