import { MDBFile, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import useUsersData from "../../functionComponent/users/useUsersData";
import UseProfileData from "../../functionComponent/profile/useProfileData";

function ProfileForm() {
  const { formHandler, form, submitUpdateHandler } = UseProfileData();
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <MDBInput
          placeholder="username..."
          name="username"
          onChange={formHandler}
          value={form.username}
        />

        <MDBFile name="image" onChange={formHandler} />
        <input
          type="date"
          className="form-control"
          onChange={formHandler}
          name="birtday"
          value={form.birthday}
        />
        <MDBTextArea
          placeholder="About..."
          name="biography"
          onChange={formHandler}
          value={form.biography}
        />
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-warning"
            onClick={() => {
              submitUpdateHandler();
              console.log(form);
            }}
          >
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileForm;
