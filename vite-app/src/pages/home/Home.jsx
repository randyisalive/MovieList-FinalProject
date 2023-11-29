import Main from "../../components/home/main/Main";
import checkLogin from "../../functionComponent/authentication/checkIsLogin";

function Home() {
  checkLogin(); // if not login

  return (
    <>
      <Main />
    </>
  );
}

export default Home;
