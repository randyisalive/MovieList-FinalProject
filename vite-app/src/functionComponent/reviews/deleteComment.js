import { deleteCommentApi } from "../API";

async function deleteComment(id) {
  try {
    const response = await fetch(deleteCommentApi, {
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

export default deleteComment;
