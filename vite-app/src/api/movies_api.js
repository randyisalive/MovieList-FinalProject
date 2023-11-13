import {
  addMoviesApi,
  getAllMovieApi,
  getMovieByTitleApi,
} from "../functionComponent/API";

// get all movies function
export async function getAllMovie() {
  try {
    const response = await fetch(getAllMovieApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getMovieByTitle(title) {
  try {
    const response = await fetch(getMovieByTitleApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

// add movies to database
export function addMovies(title, rating, description, image) {
  try {
    fetch(addMoviesApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, rating, description, image }),
    });
  } catch (e) {
    console.error(e);
  }
}
