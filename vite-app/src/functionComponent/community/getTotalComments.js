import { getTotalCommentsApi } from "../API";

async function getTotalComments(id) {
  try {
    const response = await fetch(getTotalCommentsApi, {
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

export default getTotalComments;
