import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";

function Movies() {
  const body = () => {
    return <img src="" alt="movie img" />;
  };

  const [data, setData] = useState([
    {
      id: "1",
      title: "hello",
      detail: "detail",
    },
    {
      id: "1",
      title: "hello",
      detail: "detail",
    },
    {
      id: "1",
      title: "hello",
      detail: "detail",
    },
    {
      id: "1",
      title: "hello",
      detail: "detail",
    },
  ]);

  return (
    <>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column header="Title" field="title" />
        <Column header="Detail" field="detail" />
      </DataTable>
      <Button>ads</Button>
    </>
  );
}

export default Movies;
