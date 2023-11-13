import { createNewuserApi } from "../API";

async function createUser(username, password, retype) {
  try {
    const response = await fetch(createNewuserApi, {
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

export default createUser;
