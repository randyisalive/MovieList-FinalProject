import { addTokenApi } from "../API";

async function addTokenDatabase(user_id, token) {
  try {
    fetch(addTokenApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, token }),
    });
  } catch (e) {
    console.error(e);
  }
}

export default addTokenDatabase;
