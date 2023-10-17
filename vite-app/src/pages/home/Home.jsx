import CorouselSelf from "../../components/home/CorouselSelf";
import TableTopMovies from "../../components/home/TableTopMovies";
import checkLogin from "../../functionComponent/authentication/checkIsLogin";

function Home() {
  checkLogin(); // if not login

  return (
    <>
      <div className="container d-flex">
        <div className="d-flex bg-primary w-100 flex-column" id="left">
          <div className="d-flex w-100 navbar p-0">
            <span>Fall 2023 Movies</span>
            <span>View More</span>
          </div>
          <CorouselSelf />
        </div>
        <div className="d-flex flex-column bg-secondary p-2 w-0" id="right">
          <TableTopMovies />
          <TableTopMovies />
          <TableTopMovies />
        </div>
      </div>
    </>
  );
}

export default Home;
