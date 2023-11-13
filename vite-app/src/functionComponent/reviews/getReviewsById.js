import { getReviewsByIdApi } from "../API";

async function getReviewsById(id) {
  try {
    const response = await fetch(getReviewsByIdApi, {
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

export default getReviewsById;
