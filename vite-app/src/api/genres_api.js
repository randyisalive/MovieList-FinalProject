import { getGenreByMovieIdApi } from "../functionComponent/API";

// url: /api/genres/get
export async function getGenresByMovieId(movie_id) {
  try {
    const response = await fetch(getGenreByMovieIdApi, {
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
