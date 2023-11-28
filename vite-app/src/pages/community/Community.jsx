import useDiscussionData from "../../functionComponent/community/useDiscussionData";
import RecentMoviesDiscussion from "../../components/community/RecentMoviesDiscussion";

function Community() {
  const { GetRecentDiscussionFunction } = useDiscussionData();
  const { data } = GetRecentDiscussionFunction();

  return (
    <>
      <div className="container">
        <>
          <RecentMoviesDiscussion />
        </>
      </div>
    </>
  );
}

export default Community;
