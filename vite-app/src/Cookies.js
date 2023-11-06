import Cookies from "js-cookie";

export const userIdCookie = Cookies.get("user_id");
export const authTokenCookie = Cookies.get("auth_token");

export function isValid() {
  if (userIdCookie === undefined || authTokenCookie === undefined) {
    return false;
  }
  return true;
}
