import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";
import { addList, deleteList, updateStatusMyList } from "../../api/mylist_api";
import updateRatingById from "./updateRatingById";
import getCountDataInList from "./getCountDataInList";
import getStatusById from "./getStatusById";

function UseMyListData() {
  const [list, setList] = useState([]);
  const [border, setBorder] = useState(false);
  const [rating, setRating] = useState();
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAllListById().then((data) => {
      setList(data);
    });
  }, []);

  function getList() {
    getAllListById().then((data) => [setList(data)]);
  }

  function refreshList() {
    getAllListById().then((data) => {
      setList(data);
    });
  }

  function filterMyList() {
    getAllListById()
      .then((data) => {
        setList(data);
      })
      .then(() => {
        if (filter === "All Movies") {
          setList(data);
        } else if (filter === "Currently Watching") {
          setList(data);

          const newArray = list.filter(
            (item) => item.list_status === "Watching"
          );
          setList(newArray);
        } else if (filter === "Watched") {
          setList(data);

          const newArray = list.filter(
            (item) => item.list_status === "Completed"
          );
          setList(newArray);
        } else if (filter === "Plan to Watched") {
          setList(data);

          const newArray = list.filter(
            (item) => item.list_status === "Plan to Watch"
          );
          setList(newArray);
        } else if (filter === "Dropped") {
          setList(data);

          const newArray = list.filter(
            (item) => item.list_status === "Dropped"
          );
          setList(newArray);
        }
      });
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

  function GetCountData() {
    const [count, setCount] = useState([]);

    useEffect(() => {
      getCountDataInList().then((data) => {
        console.log(data);
        setCount(data);
      });
    }, []);

    return count;
  }

  function GetStatus(id) {
    useEffect(() => {
      getStatusById(id).then((data) => {
        console.log(data);
      });
    }, [id]);
  }

  function update_rating(id, e) {
    const newRating = e.value;
    updateRatingById(id, newRating).then((data) => {
      console.log(data);
      setRating(newRating);
    });
  }

  return {
    list,
    toggleWatchList,
    addMovieToList,
    deleteMyList,
    getList,
    border,
    setBorder,
    update_rating,
    setRating,
    rating,
    GetCountData,
    GetStatus,
    select,
    setSelect,
    filterMyList,
    setFilter,
    refreshList,
  };
}

export default UseMyListData;
