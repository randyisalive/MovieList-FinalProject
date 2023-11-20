import { getCountDataInListApi } from "../API";

async function getCountDataInList() {
  try {
    const response = await fetch(getCountDataInListApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getCountDataInList;
