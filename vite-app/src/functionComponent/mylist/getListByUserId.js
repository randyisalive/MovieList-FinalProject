import { viewListApi } from "../API";

async function getListByUserId(id) {
  try {
    const response = await fetch(viewListApi, {
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

export default getListByUserId;
