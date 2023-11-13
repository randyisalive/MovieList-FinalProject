import { userIdCookie } from "../../Cookies";
import { getAllListApi } from "../API";

async function getAllListById() {
  const user_id = userIdCookie;
  try {
    const response = await fetch(getAllListApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getAllListById;
