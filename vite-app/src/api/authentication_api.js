import { generateHashPasswordApi, loginApi } from "../functionComponent/API";

// URL: /api/auth/login
export async function LoginHandler(username, password) {
  try {
    const response = await fetch(loginApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

// URL: /api/auth/generate

export async function generateHashPassword(password) {
  try {
    const response = await fetch(generateHashPasswordApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
