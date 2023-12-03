import { getWhereToWatchApi } from "../functionComponent/API";

async function getWhereToWatch() {
  try {
    const response = await fetch(getWhereToWatchApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getWhereToWatch;
