import { updateStatusMyListApi } from "../API";

async function updateStatusMyListMovie(id, status) {
  try {
    const response = await fetch(updateStatusMyListApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default updateStatusMyListMovie;
