import { useEffect, useState } from "react";
import { getALlStatusApi } from "../API";

function useStatusData() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    getAllStatus().then((data) => {
      setStatus(data);
      console.log(data);
    });
  }, []);

  return { status };
}

async function getAllStatus() {
  try {
    const response = await fetch(getALlStatusApi);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default useStatusData;
