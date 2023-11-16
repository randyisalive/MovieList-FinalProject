import { useEffect, useState } from "react";
import getDiscussion from "./getDiscussion";
import deleteDiscussion from "./deleteDiscussion";

function useDiscussionData() {
  const [discussion, setDiscussion] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState("12 Angry Men");

  useEffect(() => {
    getDiscussion().then((data) => {
      setDiscussion(data);
      console.log(data);
    });
  }, []);

  function FilterDiscussion() {
    const newArray = discussion.filter(
      (item) => item.movie_title === selectedMovies
    );
    setDiscussion(newArray);
  }

  function ResetFilter() {
    getDiscussion().then((data) => {
      setDiscussion(data);
    });
  }

  async function deleteReviews(reviews_id) {
    await deleteDiscussion(reviews_id);
  }

  function truncateString(str, limit) {
    if (str.length > limit) {
      return str.substring(0, limit) + "...";
    } else {
      return str;
    }
  }

  return {
    discussion,
    setDiscussion,
    getDiscussion,
    FilterDiscussion,
    selectedMovies,
    setSelectedMovies,
    ResetFilter,
    deleteReviews,
    truncateString,
  };
}

export default useDiscussionData;
