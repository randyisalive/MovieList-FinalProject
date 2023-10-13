import checkLogin from "../../functionComponent/authentication/checkIsLogin";

function Home() {
  checkLogin(); // if not login

  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;
