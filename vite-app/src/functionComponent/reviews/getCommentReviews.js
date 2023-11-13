import { getCommentsApi } from "../API";

async function getCommentReviews(review_id) {
  try {
    const response = await fetch(getCommentsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getCommentReviews;
