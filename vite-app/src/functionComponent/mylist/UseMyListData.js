import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";
import { addList, deleteList, updateStatusMyList } from "../../api/mylist_api";
import updateIsWatched from "./updateIsWatched";

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

  function toggleIsWatched(id, status) {
    updateIsWatched(id, status).then((data) => {
      console.log(data);
      getAllListById().then((data) => {
        setList(data);
      });
    });
  }

  return {
    list,
    toggleWatchList,
    addMovieToList,
    deleteMyList,
    getList,
    toggleIsWatched,
  };
}

export default UseMyListData;
