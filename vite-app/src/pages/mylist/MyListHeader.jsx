import useUsersData from "../../functionComponent/users/useUsersData";

function MyListHeader() {
  const { GetUser } = useUsersData();
  const { user } = GetUser();

  return (
    <>
      <div className="bg-danger text-white h-25 card mb-3 d-flex justify-content-center align-items-center">
        <p className="h1">{`${user.username} List`}</p>
      </div>
    </>
  );
}

export default MyListHeader;
