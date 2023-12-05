import { useEffect, useRef, useState } from "react";
import {
  acceptInvites,
  fetchFriendsData,
  getAllFriends,
  getFriends,
  getRequestFriends,
  requestFriends,
} from "./friends_api";
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
  const acceptToastRef = useRef(null);
  const show = (toastRef, severity, msg) => {
    toastRef.current.show({
      severity: severity,
      summary: "Info",
      detail: msg,
    });
  };

  function GetAllFriends() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
      getAllFriends().then((data) => {
        setLoading(false);
        setItems(data);
      });
    }, []);

    return { items, setItems, isLoading };
  }

  function GetRequest() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const total = data.length;
    useEffect(() => {
      getRequestFriends().then((data) => {
        setData(data);
        setLoading(true);
      });
    }, []);

    return { data, setData, isLoading, total };
  }

  async function Request_friends(friend_id) {
    // Assuming GetFriendsTable returns an object with a setData method

    // Assuming requestFriends and fetchFriendsData are asynchronous functions
    await requestFriends(user_id, friend_id).then((data) => {
      console.log(data);

      // Assuming show is a function to display a toast notification
      show(reqToastRef, "success", "Added Friend"); // Show toast
    }); // Assuming fetchFriendsData returns data related to the friend
  }

  function GetFriendsTable(friend_id) {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchFriendsData(friend_id).then((data) => {
        setData(data);
      });
    }, []);

    return { data, setData };
  }

  function acceptInvitesHandler(friend_id) {
    acceptInvites(friend_id).then((data) => {
      console.log(data);
    });

    show(acceptToastRef, "success", "Accept Invites");
  }

  return {
    friends,
    Request_friends,
    setFriends,
    GetRequest,
    reqToastRef,
    show,
    GetAllFriends,
    GetFriendsTable,
    acceptToastRef,
    acceptInvitesHandler,
  };
}

export default useFriendsData;
