import Main from "../../components/home/main/Main";
import RigthSide from "../../components/home/rightSide/RightSide";
import checkLogin from "../../functionComponent/authentication/checkIsLogin";

function Home() {
  checkLogin(); // if not login

  return (
    <>
      <Main />
      <RigthSide />
    </>
  );
}

export default Home;
