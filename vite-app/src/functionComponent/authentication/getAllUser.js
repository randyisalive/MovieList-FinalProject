import { getAllUserAPI } from "./API";

const api = getAllUserAPI();

async function getAllUser() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      console.error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getAllUser;
