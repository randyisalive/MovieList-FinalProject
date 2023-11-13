import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import UseLoginData from "../../functionComponent/authentication/useLoginData";

function Create() {
  const { formHandler, CreateUser } = UseLoginData();
  return (
    <>
      <div className=" w-100 justify-content-center d-flex align-items-center">
        <MDBCard>
          <MDBCardHeader className="bg-danger text-white">
            <MDBCardTitle>
              <h3 className="h3">Create Account</h3>
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardText>
              <form
                action=""
                onSubmit={(e) => e.preventDefault()}
                className="d-flex flex-column gap-3"
              >
                <MDBInput
                  placeholder="username..."
                  name="username"
                  onChange={formHandler}
                />
                <MDBInput
                  type="password"
                  placeholder="password..."
                  onChange={formHandler}
                  name="password"
                />
                <MDBInput
                  placeholder="re-type password..."
                  onChange={formHandler}
                  name="retype"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      CreateUser();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
}

export default Create;
