import { userIdCookie } from "../Cookies";
import {
  getLatestInMyListApi,
  getRandomMoviesApi,
} from "../functionComponent/API";

// latest in my list table
export async function getLatestInMyList() {
  try {
    const id = userIdCookie;
    const response = await fetch(getLatestInMyListApi, {
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

export async function getRandomMovies() {
  try {
    const response = await fetch(getRandomMoviesApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
