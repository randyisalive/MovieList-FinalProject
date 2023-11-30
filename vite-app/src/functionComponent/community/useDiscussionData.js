import { useEffect, useState } from "react";
import getDiscussion from "./getDiscussion";
import deleteDiscussion from "./deleteDiscussion";
import getRecentDiscussion from "./getRecentDiscussion";
import getTotalComments from "./getTotalComments";

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

  function GetRecentDiscussionFunction() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      getRecentDiscussion().then((data) => {
        setData(data[1]);
        setTotal(data[0]);
        setLoading(false);
      });
    }, []);

    return { data, total, isLoading };
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
    GetRecentDiscussionFunction,
  };
}

export default useDiscussionData;
