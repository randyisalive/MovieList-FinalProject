import { useEffect, useRef, useState } from "react";
import {
  getAllFriends,
  getFriends,
  getFriendsById,
  getRequestFriends,
  requestFriends,
} from "./fetchFriends";
import { userIdCookie } from "../../Cookies";

function useFriendsData() {
  const [friends, setFriends] = useState({});

  const user_id = userIdCookie;

  useEffect(() => {
    getFriends(user_id).then((data) => {
      console.log(data);
      setFriends(data);
    });
  }, [user_id]);

  // toast ref
  const reqToastRef = useRef(null);
  const show = (toastRef, severity, msg) => {
    toastRef.current.show({
      severity: severity,
      summary: "Info",
      detail: msg,
    });
  };

  function GetAllFriends() {
    const [items, setItems] = useState([]);
    useEffect(() => {
      getAllFriends().then((data) => {
        setItems(data);
      });
    }, []);

    return { items, setItems };
  }

  function GetRequest() {
    const [data, setData] = useState([]);
    useEffect(() => {
      getRequestFriends().then((data) => {
        setData(data);
      });
    }, []);

    return { data, setData };
  }

  function request_friends(friend_id) {
    requestFriends(user_id, friend_id).then((data) => {
      console.log(data);
      /*       RefreshData(); // refresh
       */ show(reqToastRef, "success", "Added Friend"); // show toast
    });
  }

  return {
    friends,
    request_friends,
    setFriends,
    GetRequest,
    reqToastRef,
    show,
    GetAllFriends,
  };
}

export default useFriendsData;
