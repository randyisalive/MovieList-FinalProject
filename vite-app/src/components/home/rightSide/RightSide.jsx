import { Image } from "primereact/image";
import useHomeData from "../../../functionComponent/home/useHomeData";
import { Link } from "react-router-dom";
import LatestMyList from "./LatestMyList";

function RigthSide() {
  return (
    <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
      <LatestMyList />
    </aside>
  );
}

export default RigthSide;
