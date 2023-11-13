import { useState } from "react";
import { userIdCookie } from "../../Cookies";

function useReviewsData() {
  const [form, setForm] = useState({});

  function HandleForm(e, movie_id) {
    const user_id = userIdCookie;
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value,
      movie_id: movie_id,
      user_id: user_id,
    }));
    console.log(form);
  }

  return { HandleForm, form };
}

export default useReviewsData;
