import Cookies from "js-cookie";

function Logout() {
  const date = new Date();

  // delete all cookies
  Cookies.remove("auth_token");
  Cookies.remove("username");
  Cookies.remove("user_id");

  // log user log out time

  // reload page
  window.location.href = "/login";
}

export default Logout;
