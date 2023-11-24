import { userIdCookie } from "../../Cookies";
import { getTokensById } from "../API";

// get all token in database
export async function getAllTokenById() {
  try {
    const id = userIdCookie;
    const response = await fetch(getTokensById, {
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

// get all token avaliable
export async function getAllToken() {
  try {
    const response = await fetch(getTokensById);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
