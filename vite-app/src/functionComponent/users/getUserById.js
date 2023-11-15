import { userIdCookie } from "../../Cookies";
import { getUserByIdApi } from "../API";

async function getUserById(id) {
  try {
    const response = await fetch(getUserByIdApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getUserById;
