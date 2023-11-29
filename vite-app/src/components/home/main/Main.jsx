import SimilarMovies from "./SimilarMovies";
import RecentMoviesDiscussion from "../../../components/community/RecentMoviesDiscussion";
import LatestMyList from "../rightSide/LatestMyList";

function Main() {
  return (
    <main className=" flex-1 py-10  sm:px-10 ">
      <SimilarMovies />
      <RecentMoviesDiscussion />
      <LatestMyList />
    </main>
  );
}

export default Main;
