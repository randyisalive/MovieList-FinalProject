import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";
import { addList, deleteList, updateStatusMyList } from "../../api/mylist_api";
import updateRatingById from "./updateRatingById";
import getCountDataInList from "./getCountDataInList";
import getStatusById from "./getStatusById";
import getTotalMyList from "./getTotalMyList";
import getListByUserId from "./getListByUserId";

function UseMyListData() {
  const [list, setList] = useState([]);
  const [border, setBorder] = useState(false);
  const [rating, setRating] = useState();
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllListById().then((data) => {
      filteringIf(data);
    });
  }, [filter]);

  function getList() {
    getAllListById().then((data) => [setList(data)]);
  }

  function refreshList() {
    getAllListById().then((data) => {
      setList(data);
    });
  }

  function ViewList(user_id) {
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      getListByUserId(user_id).then((data) => {
        setList(data);
        setLoading(false);
      });
    }, []);

    return { list, setList, isLoading };
  }

  function filteringIf(data) {
    setList(data);

    if (filter === "all") {
      // If 'all', no additional filtering needed
      refreshList();
    } else if (filter === "watching") {
      const newArray = data.filter((item) => item.list_status === "Watching");
      setList(newArray);
    } else if (filter === "completed") {
      const newArray = data.filter((item) => item.list_status === "Completed");
      setList(newArray);
    } else if (filter === "plan") {
      const newArray = data.filter(
        (item) => item.list_status === "Plan to Watch"
      );
      setList(newArray);
    } else if (filter === "dropped") {
      const newArray = data.filter((item) => item.list_status === "Dropped");
      setList(newArray);
    }
  }

  function filterMyList(item) {
    setFilter(item);
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

  function GetTotalMyList() {
    const [total, setTotal] = useState("");
    useEffect(() => {
      getTotalMyList().then((data) => {
        setTotal(data);
      });
    }, []);

    return total;
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
    setList,
    GetTotalMyList,
    ViewList,
  };
}

export default UseMyListData;
