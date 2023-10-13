import { getAllUserAPI } from "./API";

async function getAllUser() {
  try {
    const response = await fetch(getAllUserAPI);
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
