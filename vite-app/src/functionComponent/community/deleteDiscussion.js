import { deleteDiscussionApi } from "../API";

async function deleteDiscussion(reviews_id) {
  try {
    await fetch(deleteDiscussionApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviews_id }),
    });
  } catch (e) {
    console.error(e);
  }
}

export default deleteDiscussion;
