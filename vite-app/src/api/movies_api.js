import { getAllMovieApi } from "../functionComponent/API";

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
