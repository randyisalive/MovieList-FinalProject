import { Image } from "primereact/image";
import { Tag } from "primereact/tag";

function ImageTemplateMyList(movie_id, movie_image, list_status) {
  const severityArray = ["success", "info", "warning", "danger"];

  const getNum = () => {
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
    <>
      <div className="d-flex flex-column gap-3 align-items-center">
        <Image
          src={`../../../movies_data/${movie_id}/${movie_image}`}
          width="100"
          preview
        />
        <Tag value={list_status} severity={severityArray[getNum()]}></Tag>
      </div>
    </>
  );
}

export default ImageTemplateMyList;
