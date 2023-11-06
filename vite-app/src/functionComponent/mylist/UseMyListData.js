import { useEffect, useState } from "react";
import getAllListById from "./getAllListById";

function UseMyListData() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllListById().then((data) => {
      setList(data);
    });
  }, []);

  return { list };
}

export default UseMyListData;
