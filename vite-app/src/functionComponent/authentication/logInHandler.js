import { generateToken, setCookies } from "./CookiesFunction";

function logInHandler(username, password, users) {
  for (let i = 0; i < users.length; i++) {
    const usernameQuery = users[i][1];
    const passwordQuery = users[i][2];

    if (usernameQuery === username && passwordQuery === password) {
      const token = generateToken();
      setCookies(users[i][0], username, token).then(() => {
        window.location.href = "/";
      });
    }
    console.log(users[i][0]);
  }
}

export default logInHandler;
