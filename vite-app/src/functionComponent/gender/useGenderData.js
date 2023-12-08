import { useEffect, useState } from "react";
import { getGender_api } from "./gender_api";

function useGenderData() {
  const [gender, setGender] = useState([]);
  useEffect(() => {
    getGender_api().then((data) => {
      setGender(data);
      console.log(gender);
    });
  }, []);

  return { gender };
}

export default useGenderData;
