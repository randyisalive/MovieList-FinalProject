const apiTarget = "http://127.0.0.1:5000/token/addToken";

async function addTokenDatabase(user_id, token) {
  const date = new Date(); // get date
  try {
    fetch(apiTarget, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, token, date }),
    });
  } catch (e) {
    console.error(e);
  }
}

export default addTokenDatabase;
