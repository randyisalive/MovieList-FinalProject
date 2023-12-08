import { changePasswordApi } from "../API";

export async function changePassword(username, password, retype) {
  try {
    const response = await fetch(changePasswordApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, retype }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
