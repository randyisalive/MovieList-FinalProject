import getAllUser from "../../functionComponent/authentication/getAllUser";
import {
  generateToken,
  setCookies,
} from "../../functionComponent/authentication/CookiesFunction";
import addTokenDatabase from "../../functionComponent/authentication/addTokenDatabase";

function handleLogin(usernameRef, passwordRef) {
  const username = usernameRef.current.value;
  const password = passwordRef.current.value;

  if (username === "" || password === "") {
    return null;
  }

  // get all user data
  const users = getAllUser();
  users.then((data) => {
    for (let i = 0; i < data.length; i++) {
      // validate username and password
      if (username === data[i][1] && password === data[i][2]) {
        // set cookies
        const token = generateToken();
        const userId = data[i][0];
        addTokenDatabase(userId, token);
        setCookies(userId, username, token).then(() => {
          window.location.href = "/"; //redirect to home
        });
      }
    }
  });
}

export default handleLogin;
