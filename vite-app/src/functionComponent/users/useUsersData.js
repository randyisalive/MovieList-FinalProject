import { useEffect, useState } from "react";
import getAllUser from "./getAllUser";

function useUsersData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUser().then((data) => {
      setUsers(data);
    });
  }, []);

  return { users };
}

export default useUsersData;
