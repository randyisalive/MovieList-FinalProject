import Cookies from "js-cookie";

function logOut() {
  Cookies.remove("user_id");
  Cookies.remove("isLoggedIn");
  Cookies.remove("auth_token");

  window.location.href = "/login";
}

export default logOut;
