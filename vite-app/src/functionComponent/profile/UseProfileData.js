import { useEffect, useState } from "react";
import useUsersData from "../users/useUsersData";
import updateProfile from "./updateProfile";
import { userIdCookie } from "../../Cookies";

function UseProfileData() {
  const { GetUser } = useUsersData();
  const user = GetUser();
  const [form, setForm] = useState({
    username: "",
    birthday: "",
    biography: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username,
        birthday: user.birthday,
        biography: user.biography,
        gender: user.gender,
      });
    }
  }, [user]);

  function formHandler(e) {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]:
        e.target.name === "image" ? e.target.files[0] : e.target.value,
      user_id: userIdCookie,
      // If 'image' is the name of the file input, directly store the File object in the state
    }));
    console.log(form);
  }

  function submitUpdateHandler() {
    const username = form.username;
    const image = form.image;
    const biography = form.biography;
    const birthday = form.birthday;
    const gender = form.gender;
    const user_id = form.user_id;
    updateProfile(username, image, biography, birthday, gender, user_id).then(
      (data) => {
        console.log(data);
        window.location.href = "/profile";
      }
    );
  }
  return { formHandler, form, submitUpdateHandler };
}

export default UseProfileData;
