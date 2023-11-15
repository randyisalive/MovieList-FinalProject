import { useEffect, useState } from "react";
import getAllUser from "./getAllUser";
import getUserById from "./getUserById";
import { userIdCookie } from "../../Cookies";

function useUsersData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser().then((data) => {
      setUsers(data);
    });
  }, []);

  function GetUser() {
    const [user, setUser] = useState([]);
    const user_id = userIdCookie;
    useEffect(() => {
      getUserById(user_id).then((data) => {
        setUser(data);
      });
    }, []);

    return user;
  }

  function ViewUserById(user_id) {
    const [user, setUser] = useState([]);
    useEffect(() => {
      getUserById(user_id)
        .then((data) => {
          console.log(data);
          setUser(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }, []);

    return user;
  }

  return { users, GetUser, ViewUserById };
}

export default useUsersData;
