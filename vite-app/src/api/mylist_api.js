import { userIdCookie } from "../Cookies";
import {
  addListAPi,
  deleteListApi,
  updateStatusMyListApi,
} from "../functionComponent/API";

export async function getAllListById() {
  const user_id = userIdCookie;
  try {
    const response = await fetch(getAllListById, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

/* status = data["status"]
user_id = data["user_id"] */
export async function updateStatusMyList(status, id) {
  try {
    const response = await fetch(updateStatusMyListApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status, id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteList(id) {
  try {
    const response = await fetch(deleteListApi, {
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

export async function addList(movie_id) {
  const user_id = userIdCookie;
  try {
    const response = await fetch(addListAPi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie_id, user_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
