import { addCommentReviewsApi } from "../API";

async function addCommentsReviews(body, review_id, user_id) {
  try {
    const response = await fetch(addCommentReviewsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body, review_id, user_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default addCommentsReviews;
