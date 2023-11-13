import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";
import { addList, deleteList, updateStatusMyList } from "../../api/mylist_api";
import { getAllMovie } from "../../api/movies_api";
import UseMoviesData from "../movies/useMoviesData";

function UseMyListData() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllListById().then((data) => {
      setList(data);
    });
  }, []);

  function getList() {
    getAllListById().then((data) => [setList(data)]);
  }

  function toggleWatchList(status, id) {
    updateStatusMyList(status, id).then(() => {
      getAllListById().then((data) => {
        setList(data);
      });
    });
  }

  async function deleteMyList(id) {
    await deleteList(id);
  }

  async function addMovieToList(movie_id) {
    await addList(movie_id);
  }

  return {
    list,
    toggleWatchList,
    addMovieToList,
    deleteMyList,

    getList,
  };
}

export default UseMyListData;
