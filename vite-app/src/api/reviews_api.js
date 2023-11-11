import { reviewsFormApi } from "../functionComponent/API";

export async function formSubmitHandler(form) {
  const title = form.title;
  const body = form.body;
  const rating = form.rating;
  const movie_id = form.movie_id;
  const user_id = form.user_id;
  try {
    await fetch(reviewsFormApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, rating, movie_id, user_id }),
    });
  } catch (e) {
    console.error(e);
  }
}
