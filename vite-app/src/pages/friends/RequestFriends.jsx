import { MDBContainer } from "mdb-react-ui-kit";
import useFriendsData from "../../functionComponent/friends/useFriendsData";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";

function RequestFriends() {
  const { GetRequest, acceptToastRef, acceptInvitesHandler } = useFriendsData();
  const { data, setData, isLoading } = GetRequest();
  console.log(data);

  return (
    <>
      <Toast ref={acceptToastRef} />
      <MDBContainer className="mt-5">
        <MDBContainer className="mb-3"></MDBContainer>
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
                    <button className="btn btn-primary disabled">Accept</button>
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

export default RequestFriends;
