import { useEffect, useState } from "react";
import getAllUser from "./getAllUser";
import { userIdCookie } from "../../Cookies";
import getUserById from "./getUserById";

function useUsersData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser().then((data) => {
      setUsers(data);
    });
  }, []);

  function GetUser() {
    const [user, setUser] = useState([]);
    useEffect(() => {
      getUserById().then((data) => {
        setUser(data);
      });
    }, []);

    return user;
  }

  return { users, GetUser };
}

export default useUsersData;
