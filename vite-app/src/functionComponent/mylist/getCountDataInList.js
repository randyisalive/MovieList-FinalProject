import { getCountDataInListApi } from "../API";
import { userIdCookie } from "../../Cookies";

async function getCountDataInList() {
  try {
    const id = userIdCookie;
    const response = await fetch(getCountDataInListApi, {
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

export default getCountDataInList;
