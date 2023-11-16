import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";
import { addList, deleteList, updateStatusMyList } from "../../api/mylist_api";
import updateIsWatched from "./updateIsWatched";
import updateRatingById from "./updateRatingById";
import getRating from "./getRating";
import updateStatusMyListMovie from "./updateStatusMyListMovie";

function UseMyListData() {
  const [list, setList] = useState([]);
  const [border, setBorder] = useState(false);
  const [rating, setRating] = useState();

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

  function GetListByUserId(id) {
    const [list, setList] = useState([]);

    useEffect(() => {}, []);

    return list;
  }

  function FilterList() {
    const newArray = {};
  }

  function update_rating(id, e) {
    const newRating = e.value;
    updateRatingById(id, newRating).then((data) => {
      console.log(data);
      setRating(newRating);
    });
  }

  function update_status(id, status, e) {
    const newStatus = e.target.value;
    updateStatusMyListMovie(id, newStatus).then((data) => {
      console.log(data);
    });
  }

  return {
    list,
    toggleWatchList,
    addMovieToList,
    deleteMyList,
    getList,
    toggleIsWatched,
    border,
    setBorder,
    update_rating,
    setRating,
    rating,
    update_status,
  };
}

export default UseMyListData;
