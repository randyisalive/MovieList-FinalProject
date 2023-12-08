import { MDBFile, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import UseProfileData from "../../functionComponent/profile/useProfileData";
import useGenderData from "../../functionComponent/gender/useGenderData";

function ProfileForm() {
  const { formHandler, form, submitUpdateHandler } = UseProfileData();
  const { gender } = useGenderData();
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <label htmlFor="">Username</label>
        <MDBInput
          placeholder="username..."
          name="username"
          onChange={formHandler}
          value={form.username}
        />
        <label htmlFor="">Picture Profile</label>

        <MDBFile name="image" onChange={formHandler} />

        <label htmlFor="">Birthday</label>
        <input
          type="date"
          className="form-control"
          onChange={formHandler}
          name="birthday"
          value={form.birthday}
        />
        <label htmlFor="">Biography</label>
        <MDBTextArea
          placeholder="About..."
          name="biography"
          onChange={formHandler}
          value={form.biography}
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id=""
          className="form-control"
          onChange={formHandler}
        >
          {gender.map((item) => {
            return (
              <>
                <option
                  value={`${item.gender}`}
                  selected={form.gender === item.gender}
                >
                  {item.gender}
                </option>
              </>
            );
          })}
        </select>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-danger rounded-5"
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
