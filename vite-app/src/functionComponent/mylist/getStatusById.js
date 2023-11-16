import { getStatusMoveMylistApi } from "../API";

async function getStatusById(id) {
  try {
    const response = await fetch(getStatusMoveMylistApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getStatusById;
