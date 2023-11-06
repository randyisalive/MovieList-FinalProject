import { getAllMovieApi } from "../API";

async function getAllMovie() {
  try {
    const response = await fetch(getAllMovieApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default getAllMovie;
