import { userIdCookie } from "../../Cookies";
import {
  getAllFriendsApi,
  getRequestFriendsApi,
  getSingleFriendApi,
} from "../API";

export async function getFriends(id) {
  try {
    const response = await fetch(getAllFriendsApi, {
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

export async function getRequestFriends() {
  const id = userIdCookie;
  try {
    const response = await fetch(getRequestFriendsApi, {
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

export async function getAllFriends() {
  const id = userIdCookie;
  try {
    const response = await fetch(getAllFriendsApi, {
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

export async function getFriendsById(id) {
  try {
    const response = await fetch(getSingleFriendApi, {
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

export async function requestFriends(id, friend_id) {
  try {
    const response = await fetch(requestFriendsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, friend_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
