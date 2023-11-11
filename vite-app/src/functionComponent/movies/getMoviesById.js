import { getMovieByIdApi } from "../API";

export async function getMoviesById(id) {
  try {
    const response = await fetch(getMovieByIdApi, {
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

export default getMoviesById;
