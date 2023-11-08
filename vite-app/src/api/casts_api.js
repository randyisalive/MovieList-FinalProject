import { getActorsByMovieApi } from "../functionComponent/API";

export async function getActorsByMovie(movie_id) {
  try {
    const response = await fetch(getActorsByMovieApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
