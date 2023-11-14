import { MDBCard, MDBContainer } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

function ViewList() {
  const { id } = useParams();

  return (
    <>
      <MDBContainer>
        <MDBCard>asd</MDBCard>
      </MDBContainer>
    </>
  );
}

export default ViewList;
