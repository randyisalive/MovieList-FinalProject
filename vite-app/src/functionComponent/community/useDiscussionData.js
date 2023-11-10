import { useEffect, useState } from "react";
import getDiscussion from "./getDiscussion";

function useDiscussionData() {
  function Discussion() {
    const [discussion, setDiscussion] = useState([]);

    useEffect(() => {
      getDiscussion().then((data) => {
        setDiscussion(data);
      });
    }, []);

    return discussion;
  }

  return { Discussion };
}

export default useDiscussionData;
