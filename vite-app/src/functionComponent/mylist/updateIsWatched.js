import { updateIsWatchedApi } from "../API";

async function updateIsWatched(id, status) {
  try {
    const response = await fetch(updateIsWatchedApi, {
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

export default updateIsWatched;
