import { updateIsReplyOpenApi } from "../API";

async function updateIsReplyOpen(id, isReplyOpen) {
  try {
    const response = await fetch(updateIsReplyOpenApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, isReplyOpen }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default updateIsReplyOpen;
