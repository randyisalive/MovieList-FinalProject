import { getRecentApi } from "../API";

async function getRecentDiscussion() {
  try {
    const response = await fetch(getRecentApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getRecentDiscussion;
