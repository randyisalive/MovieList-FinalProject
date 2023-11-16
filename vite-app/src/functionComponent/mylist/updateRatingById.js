import { updateRatingApi } from "../API";

async function updateRatingById(id, rating) {
  try {
    const response = await fetch(updateRatingApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, rating }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default updateRatingById;
