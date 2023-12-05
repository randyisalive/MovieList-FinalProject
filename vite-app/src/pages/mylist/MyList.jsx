import { MDBContainer } from "mdb-react-ui-kit";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import ImageTemplateMyList from "./ImageTemplateMyList";
import BtnListMyList from "./BtnListMyList";
import MyListFilterItem from "./MyListFilterItem";
import MyListHeader from "./MyListHeader";

function MyList() {
  const { list, TemplateFilterItem } = MyListFilterItem();

  return (
    <>
      <Toast />
      <MDBContainer className="mt-5">
        <MyListHeader />
        <TemplateFilterItem />
        <DataTable
          value={list}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          className="mt-4"
        >
          <Column
            body={(item) =>
              ImageTemplateMyList(
                item.movie_id,
                item.movie_image,
                item.list_status
              )
            }
          />
          <Column
            header="Movie Title"
            field="movie_title"
            sortable
            body={(item) => {
              return (
                <>
                  <div className="d-flex">
                    <Link
                      className="text-primary w-0 d-flex"
                      to={`/movies/${item.movie_id}/${item.movie_title}`}
                    >
                      <p className="m-0 d-flex w-0">{item.movie_title}</p>
                    </Link>
                  </div>
                </>
              );
            }}
          />
          <Column
            body={(item) =>
              BtnListMyList(item.list_id, item.movie_title, item.list_status)
            }
          />
        </DataTable>
      </MDBContainer>
    </>
  );
}

export default MyList;
