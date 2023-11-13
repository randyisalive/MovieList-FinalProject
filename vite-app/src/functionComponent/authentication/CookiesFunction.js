import Cookies from "js-cookie";

const user_id = Cookies.get("user_id");
const token = Cookies.get("auth_token");

export function getCookies() {
  const data = {
    user_id: user_id,
    token: token,
  };
  return { user_id, token };
}

export function generateToken() {
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const tokenLength = 32; // Adjust the desired length of your token

  let token = "";

  for (let i = 0; i < tokenLength; i++) {
    const randomIndex = Math.floor(Math.random() * randomChars.length);
    token += randomChars.charAt(randomIndex);
  }

  return token;
}

export async function setCookies(user_id, token) {
  Cookies.set("user_id", user_id);
  Cookies.set("auth_token", token);
}

export function isLogin() {
  if (user_id === undefined || token === undefined) {
    return false;
  }
  return true;
}
