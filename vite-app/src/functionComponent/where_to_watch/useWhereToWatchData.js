import { useEffect, useState } from "react";
import { getWhereToWatchByMovie } from "../../api/movies_api";

function useWhereToWatchData() {
  function GetDataByMovie(movie_id) {
    const [data, setData] = useState([]);
    useEffect(() => {
      getWhereToWatchByMovie(movie_id).then((data) => {
        setData(data);
      });
    }, []);

    return { data, setData };
  }

  return { GetDataByMovie };
}

export default useWhereToWatchData;
