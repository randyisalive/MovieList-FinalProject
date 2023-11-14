import { updateProfileApi } from "../API";

async function updateProfile(
  username,
  image,
  biography,
  birthday,
  gender,
  user_id
) {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("image", image);
    formData.append("biography", biography);
    formData.append("birthday", birthday);
    formData.append("gender", gender);
    formData.append("user_id", user_id);
    const response = await fetch(updateProfileApi, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default updateProfile;
