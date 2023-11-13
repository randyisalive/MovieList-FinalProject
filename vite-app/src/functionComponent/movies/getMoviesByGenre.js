import { getMoviesByGenresApi } from "../API";

async function getMoviesByGenre(genre_id) {
  try {
    const response = await fetch(getMoviesByGenresApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ genre_id }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getMoviesByGenre;
