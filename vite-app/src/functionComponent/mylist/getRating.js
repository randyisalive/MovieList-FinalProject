import { getRatingApi } from "../API";

async function getRating(id) {
  try {
    const response = await fetch(getRatingApi, {
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

export default getRating;
