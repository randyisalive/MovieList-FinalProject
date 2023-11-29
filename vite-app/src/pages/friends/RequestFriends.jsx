import { MDBContainer } from "mdb-react-ui-kit";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";

function RequestFriends() {
  const { GetRequest, acceptToastRef, acceptInvitesHandler } = useFriendsData();
  const { data, setData } = GetRequest();
  console.log(data);

  if (data) {
    return (
      <>
        <Toast ref={acceptToastRef} />
        <MDBContainer className="mt-5">
          <MDBContainer className="mb-3">
            <div className="d-flex">
              <Link to={`/friends/check`}>
                <button className="btn btn-primary">Check Status</button>
              </Link>
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
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          acceptInvitesHandler(item.user_id);
                        }}
                      >
                        Accept
                      </button>
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
