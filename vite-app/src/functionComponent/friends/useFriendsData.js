import { useEffect, useState } from "react";
import { getFriends, getFriendsById, requestFriends } from "./fetchFriends";
import { userIdCookie } from "../../Cookies";

function useFriendsData() {
  const [friends, setFriends] = useState([]);
  const user_id = userIdCookie;
  useEffect(() => {
    getFriends(user_id).then((data) => {
      console.log(data);
      setFriends(data);
    });
  }, [user_id]);

  function CheckRequest(id) {
    useEffect(() => {
      getFriendsById(user_id, id).then((data) => {
        console.log(data);
      });
    }, [id]);
  }
  function request_friends(friend_id) {
    requestFriends(user_id, friend_id).then((data) => {
      console.log(data);
    });

    console.log(check_request());
  }

  return { friends, request_friends, CheckRequest };
}

export default useFriendsData;
