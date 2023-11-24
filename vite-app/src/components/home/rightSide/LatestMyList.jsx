import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { Tag } from "primereact/tag";
import useHomeData from "../../../functionComponent/home/useHomeData";
import Imbd_svg from "../../Imdb_svg";

function LatestMyList() {
  const { LatestInMyList } = useHomeData();
  const { data } = LatestInMyList();

  const severityArray = ["success", "info", "warning", "danger"];

  const getNum = (list_status) => {
    if (list_status === "Watching") {
      return 1;
    } else if (list_status === "Completed") {
      return 0;
    } else if (list_status === "Dropped") {
      return 3;
    } else if (list_status === "Plan to Watch") {
      return 2;
    }
    return 4;
  };
  return (
    <div className="mt-10">
      <span className="h6">Latest Movies in MyList</span>
      <div className="mt-4 text-gray-400 text-xs space-y-3">
        {data.map((item) => {
          return (
            <>
              <li className="flex space-y-3 space-x-3 ">
                <Image
                  src={`../../../../movies_data/${item.id}/${item.image}`}
                  alt="image_movies"
                  width="100"
                />
                <div className="flex flex-col justify-between  ">
                  <div className="flex flex-col space-y-1">
                    <span className="text-gray-700 dark:text-white font-semibold">
                      <Link
                        to={`/movies/${item.id}/${item.title}`}
                        className=""
                      >
                        {item.title}
                      </Link>
                    </span>
                    <span>
                      <Tag
                        value={item.status}
                        severity={severityArray[getNum(item.status)]}
                      ></Tag>
                    </span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Imbd_svg />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </li>
            </>
          );
        })}

        <li className="pt-1">
          <Link
            to={`/mylist`}
            className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white"
          >
            See More
          </Link>
        </li>
      </div>
    </div>
  );
}

export default LatestMyList;
