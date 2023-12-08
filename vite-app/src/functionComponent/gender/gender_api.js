// fetch function for gender

import { getGenderApi } from "../API";

export async function getGender_api() {
  try {
    const response = await fetch(getGenderApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
