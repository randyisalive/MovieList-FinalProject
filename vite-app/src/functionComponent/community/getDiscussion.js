import { getDiscussionApi } from "../API";

async function getDiscussion() {
  try {
    const response = await fetch(getDiscussionApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getDiscussion;
