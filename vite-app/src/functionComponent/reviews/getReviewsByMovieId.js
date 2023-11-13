import { getReviewsByMovieIdApi } from "../API";

async function getReviewsNewestByMovieId(id) {
  try {
    const response = await fetch(getReviewsByMovieIdApi, {
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

export default getReviewsNewestByMovieId;
