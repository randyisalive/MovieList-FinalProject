import { getCookies } from "./CookiesFunction";

const cookies = getCookies();

function checkLogin() {
  if (cookies.token === undefined || cookies.user_id === undefined) {
    window.location.href = "/login";
  }
}

export default checkLogin;
