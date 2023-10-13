import Cookies from "js-cookie";

const user_id = Cookies.get("user_id");
const token = Cookies.get("auth_token");

export function getCookies() {
  const data = {
    user_id: user_id,
    token: token,
  };
  return data;
}

export function isLogin() {
  if (user_id === undefined || token === undefined) {
    return false;
  }
  return true;
}
