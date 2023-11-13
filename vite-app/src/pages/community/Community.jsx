import { Card } from "primereact/card";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Community() {
  const cardTitile = (title) => {
    return (
      <>
        <Link to={`${title}`}>
          <p className="text-primary">{title}</p>
        </Link>
      </>
    );
  };

  return (
    <>
      <div className="container mt-5">
        <MDBRow>
          <MDBCol>
            <Card title={cardTitile("Movie Discussion")}>
              <p>General movie discussion</p>
            </Card>
          </MDBCol>
          <MDBCol>
            <Card title={cardTitile("Forums")}>
              <p>Forum post from othe users</p>
            </Card>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Community;