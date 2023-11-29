import { userIdCookie } from "../../Cookies";
import { getTotalMyListApi } from "../API";

async function getTotalMyList() {
  const id = userIdCookie;
  try {
    const response = await fetch(getTotalMyListApi, {
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

export default getTotalMyList;
